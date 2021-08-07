import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useMatchBreakpoints, useModal } from '@rug-zombie-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { BigNumber } from 'bignumber.js'
import { MultiCall } from '@indexed-finance/multicall'
import mausoleumAbi from 'config/abi/mausoleum.json'
import Container from './components/Container'
import CollectWinningsPopup from './components/CollectWinningsPopup'
import SwiperProvider from './context/SwiperProvider'
import Desktop from './Desktop'
import Mobile from './Mobile'
import { getMausoleumContract } from '../../utils/contractHelpers'
import { initialData } from '../../redux/fetch'
import auctions from '../../redux/auctions'
import { getMausoleumAddress } from '../../utils/addressHelpers'
import useWeb3 from '../../hooks/useWeb3'

const Predictions = () => {
  const { isLg, isXl } = useMatchBreakpoints()
  const isDesktop = isLg || isXl
  const [bids, setBids] = useState([])
  const [lastBidId, setLastBidId] = useState(0)
  const [userInfo, setUserInfo] = useState({})
  const [lastUpdate, setLastUpdate] = useState(Date.now())
  const [refresh, setRefresh] = useState(false)
  const { account } = useWeb3React()
  const web3 = useWeb3()


  initialData(account)

  const aid = auctions[0].aid

  useEffect(() => {
    if(account) {
      getMausoleumContract().methods.userInfo(aid, account).call()
        .then(userInfoRes => {
          setUserInfo({
            lastBidDate: parseInt(userInfoRes.lastBidDate),
            bid: new BigNumber(userInfoRes.bid),
            paidUnlockFee: userInfoRes.paidUnlockFee
          })
        })
    }
  }, [account, aid])
  useEffect(() => {
    getMausoleumContract().methods.bidsLength(aid).call()
      .then(bidsLengthRes => {
        const multi = new MultiCall(web3);
        const inputs = [];
        for (let x = 0; x < parseInt(bidsLengthRes); x++) {
          inputs.push({ target: getMausoleumAddress(), function: 'bidInfo', args: [aid, x] });
        }

          multi.multiCall(mausoleumAbi, inputs)
            .then(res => {
              setLastUpdate(Date.now())
              setBids(res[1])
              setLastBidId(parseInt(bidsLengthRes))
            })
            .catch(() => {
              console.log("multicall failed")
            })

      })
    // setInterval(() => fetchBids(), 5000);
  // }
  },[aid, refresh, web3])

  return (
    <>
       <Helmet>
        <script src="https://s3.tradingview.com/tv.js" type="text/javascript" id="tradingViewWidget" />
       </Helmet>
       <SwiperProvider>
        <Container >
           {isDesktop ? <Desktop refresh={refresh} bids={bids} lastBidId={lastBidId} setRefresh={setRefresh} userInfo={userInfo} aid={aid}/> :
            <Mobile refresh={refresh} bids={bids} lastBidId={lastBidId} setRefresh={setRefresh} userInfo={userInfo} aid={aid}/>}
           <CollectWinningsPopup />
         </Container>
       </SwiperProvider>
    </>
  )
}

export default Predictions
