import { LinkExternal } from '@rug-zombie-libs/uikit'
import tokens from 'config/constants/tokens';
import { useDrFrankenstein, useSpawningPool } from 'hooks/useContract'
import React, { useEffect, useState } from 'react'
import { BIG_ZERO } from 'utils/bigNumber';
import { getBalanceAmount, getDecimalAmount, getFullDisplayBalance } from 'utils/formatBalance'
import BigNumber from 'bignumber.js';
import numeral from 'numeral';
import { Token } from '../../../../config/constants/types'
import { BASE_V1_EXCHANGE_URL } from '../../../../config'
import { Grave } from '../../../../redux/types'
import { bnbPriceUsd, grave, spawningPool } from '../../../../redux/get'


interface RugInDetailsProps {
  id: number,
  bnbInBusd: number,
  zombieUsdPrice: number
}

const RugInDetails: React.FC<RugInDetailsProps> = ({
  id , zombieUsdPrice, bnbInBusd,
}) => {
  const { subtitle, rewardToken, pcsVersion, liquidityDetails, project, path, type, withdrawalCooldown, nftRevivalTime, endBlock, artist } = spawningPool(id)
  const { link,  } = project
  const spawningPoolContract = useSpawningPool(id);

  const [unlockFee, setUnlockFee] = useState(0);

  useEffect(() => {
    spawningPoolContract.methods.unlockFeeInBnb().call()
      .then((res) => {
        setUnlockFee(parseFloat(getFullDisplayBalance(new BigNumber(res), tokens.zmbe.decimals, 4)));
      })
  })

  let allocPoint = BIG_ZERO;
    allocPoint = new BigNumber(0)

  let liquidity
  if(pcsVersion === 'v1') {
    liquidity = 'Pancakeswap V1'
  } else if(pcsVersion === 'v2') {
    liquidity = 'Pancakeswap V2'
  } else {
    liquidity = liquidityDetails
  }

  return (
    <div key={id} className="rug-indetails">
      <div className="direction-column imageColumn">
        <div className="sc-iwajpm dcRUtg">
          {type === 'image' ? (
            <img src={path} alt="NFT" className="sc-cxNHIi bjMxQn" />
          ) : (
              <video width="100%" autoPlay>
                <source src={path} type="video/mp4" />
              </video>
            )}
        </div>
      </div>
      <div className="direction-column">
        <span className="indetails-type">{subtitle}</span>
        <span className="indetails-title">
          <LinkExternal bold={false} small href={artist.twitter}>
            View NFT Artist
        </LinkExternal>
        </span>
        <br/>
        <span className="indetails-title">
          What is {project.name}?
        </span>
        <br/>
        <span className="indetails-value">{project.description}</span>

        <br/>
        {project.additionalDetails.map(details => {
          return <>
            <LinkExternal href={details.url}>
              {details.name}
            </LinkExternal>
            <br/>
          </>
        })}

      </div>
      <div className="direction-column">
        <span className="indetails-type">Unlock Fees: {unlockFee} BNB
        ({(unlockFee * bnbPriceUsd()).toFixed(2)} in USD)</span>
        <span className="indetails-title">
          Early Withdrawal Fee:
          <span className="indetails-value">5%</span>
        </span>
        <span className="indetails-title">
          Withdrawal Cooldown:
          <span className="indetails-value">{withdrawalCooldown}</span>
        </span>
        <span className="indetails-title">
          NFT Minting Time:
          <span className="indetails-value">{nftRevivalTime}</span>
        </span>
        <span className="indetails-title">
          <LinkExternal href={`https://bscscan.com/block/countdown/${endBlock}`}>
            Rewards End Block
          </LinkExternal>
        </span>
      </div>
      {/* <div className="direction-column">
          <a href="/" target="_blank" className="indetails-link">Tutorials goes to gitbook</a>
          <a href="/" target="_blank" className="indetails-link">Fees &amp; Tokenomics goes to gitbook page</a>
          <a href="/" target="_blank" className="indetails-link">View Contract goes to BSC Scan (wait for address)</a>
        </div> */}
    </div>
  )
}

export default RugInDetails
