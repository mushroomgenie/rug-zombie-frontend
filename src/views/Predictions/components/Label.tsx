import React from 'react'
import styled from 'styled-components'
import { Box, Button, Card, Flex, Image, LinkExternal, PocketWatchIcon, Text } from '@rug-zombie-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { formatRoundTime } from '../helpers'
import useRoundCountdown from '../hooks/useRoundCountdown'
import tokens from '../../../config/constants/tokens'
import { getBalanceAmount } from '../../../utils/formatBalance'
import { BASE_EXCHANGE_URL } from '../../../config'
import auctions from '../../../redux/auctions'

const Token = styled(Box)`
  margin-top: -24px;
  position: absolute;
  top: 50%;
  z-index: 30;

  & > svg {
    height: 48px;
    width: 48px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-top: -32px;

    & > svg {
      height: 64px;
      width: 64px;
    }
  }
`

const Title = styled(Text)`
  font-size: 16px;
  line-height: 21px;

  ${({ theme }) => theme.mediaQueries.lg} {
    font-size: 20px;
    line-height: 22px;
  }
`

const Interval = styled(Text)`
  ${({ theme }) => theme.mediaQueries.lg} {
    text-align: center;
    width: 32px;
  }
`

const Label = styled(Card)<{ dir: 'left' | 'right' }>`
  align-items: ${({ dir }) => (dir === 'right' ? 'flex-end' : 'flex-start')};
  border-radius: ${({ dir }) => (dir === 'right' ? '8px 8px 8px 24px' : '8px 8px 24px 8px')};
  display: flex;
  flex-direction: column;
  overflow: initial;
  padding: ${({ dir }) => (dir === 'right' ? '0 28px 0 8px' : '0 8px 0 24px')};

  ${({ theme }) => theme.mediaQueries.lg} {
    align-items: center;
    border-radius: 16px;
    flex-direction: row;
    padding: ${({ dir }) => (dir === 'right' ? '8px 40px 8px 8px' : '8px 8px 8px 40px')};
  }
`

export const PricePairLabel: React.FC = () => {
  return (
    <Box pl='24px' position='relative' display='inline-block'>
      <Token style={{ position: 'relative', top: '43px', right: '10px' }}>
        <Image src='/images/rugZombie/BasicZombie.png' width={50} height={50} alt='ZMBE' />
      </Token>

      <Label dir='left'>
        <Title bold textTransform='uppercase'>
          MAUSOLEUM (BETA)
        </Title>
      </Label>
    </Box>
  )
}

interface TimerLabelProps {
  userInfo: any
}

export const TimerLabel: React.FC<TimerLabelProps> = ({ userInfo }) => {
  return (
    <Box pr='100px' position='relative'>
      <Flex alignItems='center' justifyContent='center'>
          <LinkExternal
            href={`${BASE_EXCHANGE_URL}/#/add/${auctions[0].token0}/${auctions[0].token1}`}
            style={{
              width: '100px',
              justifyContent: 'center',
              position: 'relative',
              right: '10px',
            }}
          >
            Get BT
          </LinkExternal>
        <Label dir='right'>
          <Title bold color='secondary'>
            Current Bid
          </Title>
          <Interval fontSize='12px'>{Math.round(getBalanceAmount(userInfo.bid).toNumber() * 100) / 100}</Interval>
        </Label>
      </Flex>
    </Box>
  )
}
