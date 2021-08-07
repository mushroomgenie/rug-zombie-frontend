import React, { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import {
  CardBody,
  LinkExternal,
  PlayCircleOutlineIcon,
  Button,
 Text, Flex, FlexProps,
} from '@rug-zombie-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { BetPosition } from 'state/types'
import { ethers } from 'ethers'
import CardFlip from '../CardFlip'
import { RoundResultBox } from '../RoundResult'
import * as get from '../../../../redux/get'
import Card from './Card'
import CardHeader from './CardHeader'
import SetPositionCard from './SetPositionCard'
import { getBep20Contract, getMausoleumContract } from '../../../../utils/contractHelpers'
import useWeb3 from '../../../../hooks/useWeb3'
import { BIG_TEN, BIG_ZERO } from '../../../../utils/bigNumber'
import { getBalanceAmount } from '../../../../utils/formatBalance'
import { account } from '../../../../redux/get'
import auctions from '../../../../redux/auctions'
import { getMausoleumAddress } from '../../../../utils/addressHelpers'
import { useERC20, useMausoleum } from '../../../../hooks/useContract'
import '../MobileCard/cardStyles.css';

// PrizePoolRow
interface CurrentBidProps extends FlexProps {
  totalAmount: BigNumber,
}


export const CurrentBid: React.FC<CurrentBidProps> = ({ totalAmount, ...props }) => {
  const { t } = useTranslation()

  return (
    <Flex alignItems='center' justifyContent='space-between' {...props}>
      <Text bold>{t('Bid Value')}:</Text>
      <Text bold>{getBalanceAmount(totalAmount).toString()} BT</Text>
    </Flex>
  )
}

interface OpenRoundCardProps {
  lastBid: any
  userInfo: any
  aid: number
  id: number
  setRefresh: any
  refresh: boolean
}

const IncreaseBidCard: React.FC<OpenRoundCardProps> = ({ lastBid, userInfo, refresh, setRefresh, aid, id }) => {
  const [state, setState] = useState({
    isSettingPosition: false,
    position: BetPosition.BULL,
  })
  const { t } = useTranslation()
  const { isSettingPosition, position } = state
  const mausoleum = useMausoleum()
  const bidToken = useERC20(auctions[0].bidToken)

  const handleBack = () =>
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: false,
    }))

  const handleSetPosition = (newPosition: BetPosition) => {
    setState((prevState) => ({
      ...prevState,
      isSettingPosition: true,
      position: newPosition,
    }))
  }

  const togglePosition = () => {
    setState((prevState) => ({
      ...prevState,
      position: prevState.position === BetPosition.BULL ? BetPosition.BEAR : BetPosition.BULL,
    }))
  }

  const [allowance, setAllowance] = useState(BIG_ZERO)
  const [amount, setAmount] = useState(lastBid.amount ? new BigNumber(lastBid.amount) : BIG_ZERO)
  const [latestUserInfo, setLatestUserInfo] = useState(userInfo)
  const [paidUnlockFee, setPaidUnlockFee] = useState(latestUserInfo.paidUnlockFee)

  if(!amount.eq(latestUserInfo.bid) && amount.eq(BIG_ZERO)) {
    setAmount(new BigNumber(userInfo.bid))
  }

  const increaseBid = () => {
    setAmount(amount.plus(BIG_TEN.pow(19)))
  }

  const decreaseBid = () => {
    let result = amount.minus(BIG_TEN.pow(19))
    result = result.lt(BIG_ZERO) ? BIG_ZERO : result
    setAmount(result)
  }

  const isDisabled = amount.lte(lastBid.amount)

  const submitBid = () => {
    if(account()) {
      mausoleum.methods.increaseBid(aid, amount.minus(userInfo.bid).toString())
        .send({from: account() })
        .then(()=>{setRefresh(!refresh)})
    }
  }

  const withdrawBid = () => {
    if(account()) {
      mausoleum.methods.withdrawBid(aid)
        .send({from: account()})
    }
  }

  const handleUnlock = () => {
    if(account()) {
      mausoleum.methods.unlockFeeInBnb(aid).call()
        .then(res => {
          mausoleum.methods.unlock(aid)
            .send({from: account(), value: res.toString()})
            .then(() => {
              mausoleum.methods.userInfo(aid, account()).call()
                .then(userInfoRes => {
                  setLatestUserInfo(userInfoRes)
                  setPaidUnlockFee(true)
                })
            })
        })
    }
  }

  const handleApprove = () => {
    bidToken.methods.approve(getMausoleumAddress(), ethers.constants.MaxUint256)
      .send({from: account()})
      .then(() => {
        setAllowance(new BigNumber(ethers.constants.MaxUint256.toString()))
      })
  }
  const accountAddress = account()

  if(paidUnlockFee !== latestUserInfo.paidUnlockFee) {
    setPaidUnlockFee(latestUserInfo.paidUnlockFee)
  }

  useEffect(() => {
    if(accountAddress) {
      getBep20Contract(auctions[0].bidToken).methods.allowance(accountAddress, getMausoleumAddress()).call()
        .then(res => {
          setAllowance(new BigNumber(res))
        })
    }
  }, [accountAddress])

  return (
    <CardFlip isFlipped={isSettingPosition} height='404px'>
      <Card className="mbCardStyle">
        <CardHeader
          status='next'
          icon={<PlayCircleOutlineIcon color='white' mr='4px' width='21px' />}
          title={t('Bid')}
          bid={lastBid}
          id={id}
        />
        <CardBody p='16px'>
          <RoundResultBox>
            {/* eslint-disable-next-line no-nested-ternary */}
            {paidUnlockFee ? allowance.gt(BIG_ZERO) ?
            <>
              <CurrentBid totalAmount={amount} mb='8px' />
              <Button
                variant='success'
                width='100%'
                onClick={increaseBid}
                mb='4px'
              >
                {t('Increase BID')}
              </Button>
              <Button
                variant='danger'
                width='100%'
                onClick={decreaseBid}
                mb='4px'
              >
                {t('Decrease BID')}
              </Button>
              <Flex alignItems='center' justifyContent='center'>
                {/* eslint-disable-next-line no-nested-ternary */}
                { !isDisabled ?
                  <Button
                    variant='secondary'
                    onClick={submitBid}
                    style={{
                      width: '50%',
                      justifyContent: 'center',
                    }}
                  >
                    {t('SUBMIT')}
                  </Button> :
                    lastBid.bidder === account() ?
                      <Button
                        variant='secondary'
                        disabled
                        onClick={withdrawBid}
                        style={{
                          width: '75%',
                          justifyContent: 'center',
                        }}
                      >
                        {t("YOU'RE BID LEADER")}
                      </Button> :
                      <Button
                        variant='secondary'
                        onClick={withdrawBid}
                        style={{
                          width: '50%',
                          justifyContent: 'center',
                        }}
                      >
                        {t('WITHDRAW BID')}
                      </Button>
                }
              </Flex>
              <Flex alignItems='center' justifyContent='center' className='indetails-title' paddingTop='10px'>
                <LinkExternal onClick={() => handleSetPosition(BetPosition.BULL)}
                              fontSize='14px'>{t('Enter custom bid')}</LinkExternal>
              </Flex>
            </> :
              <Flex alignItems='center' justifyContent='center'>
                <Button
                  variant='secondary'
                  onClick={handleApprove}
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                  }}
                >
                  {t('Approve BT')}
                </Button>
              </Flex> :
              <Flex alignItems='center' justifyContent='center'>
                <Button
                  variant='secondary'
                  onClick={handleUnlock}
                  style={{
                    width: '50%',
                    justifyContent: 'center',
                  }}
                >
                  {t('Unlock to start')}
                </Button>
              </Flex>}
          </RoundResultBox>
        </CardBody>
      </Card>
      <SetPositionCard
        onBack={handleBack}
        onSuccess={async ()=>{console.log('success')}}
        position={position}
        togglePosition={togglePosition}
      />
    </CardFlip>
  )
}

export default IncreaseBidCard
