import React from 'react'
import {
  Text,
  Card,
  CardBody,
  Heading,
  Flex,
  ArrowForwardIcon,
  Button,
  useMatchBreakpoints,
} from '@rug-zombie-libs/uikit'
import { useTranslation } from 'contexts/Localization'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../../../components/layout/Container'

const NowLive = styled(Text)`
  background: -webkit-linear-gradient(#ffd800, #eb8c00);
  font-size: 24px;
  font-weight: 600;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Wrapper = styled.div`
  background-color: #101820;
  max-height: max-content;
  overflow: hidden;

  ${({ theme }) => theme.mediaQueries.md} {
    max-height: 256px;
  }
`

const Inner = styled(Container)`
  display: flex;
  flex-direction: column-reverse;

  ${({ theme }) => theme.mediaQueries.sm} {
    flex-direction: row;
  }
`

const LeftWrapper = styled(Flex)`
  flex-direction: column;
  flex: 1;
  padding-bottom: 40px;
  padding-top: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 40px;
  }
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0.5;

  & img {
    width: 80%;
    margin-top: 24px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & img {
      margin-top: 0;
    }
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex: 0.8;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & img {
      margin-top: -25px;
    }
  }
`

const PrizeFlex = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 8px;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 640px;
  }
`

const Over = styled(Text)`
  :empty {
    margin-right: 0;
  }
`

const StyledNFTBanner = styled(Card)`
  background-image: url('/images/zmbe-bg.png');
  background-size: 400px 400px;
  background-position-x: 100px;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 100px;
  margin-bottom: 10px;
  border-radius: 0;
`
const NFTBanner: React.FC = () => {
  const { t } = useTranslation()
  const { isLg, isXl } = useMatchBreakpoints()
  const isDesktop = isLg || isXl
  return (
    <Wrapper style={{width: "100%"}}>
      <Inner style={{width: "100%"}}>
        <LeftWrapper width="100%">
          <NowLive>{t('Mausoleum has Ended')}</NowLive>
          { isDesktop ? <Flex>
            <Over fontSize='40px' bold mr='8px' style={{ whiteSpace: 'nowrap' }}>
              {t('The First')}
            </Over>
            <Over fontSize='40px' color='primary' bold mr='8px' style={{ whiteSpace: 'nowrap' }}>
              One of a Kind
            </Over>
            <Over fontSize='40px' bold mr='8px'>
              NFT was minted in the Mausoleum
            </Over>
          </Flex> :
            <>
              <Over fontSize='40px' bold mr='8px'>
                {t('Earn a')}
              </Over>
              <Over fontSize='40px' color='primary' bold mr='8px'>
                One of a Kind
              </Over>
              <Over fontSize='40px' bold mr='8px'>
                NFT in our first Auction
              </Over>
            </>
          }
          <NavLink exact activeClassName='active' to='/mausoleum' id='lottery-pot-banner' style={{paddingTop: "8px"}}>
            <Button>
              <Text color='white' bold fontSize='16px' mr='4px'>
                {t('Remember to withdraw your bids')}
              </Text>
              <ArrowForwardIcon color='white' />
            </Button>
          </NavLink>
        </LeftWrapper>
      </Inner>

    </Wrapper>
  )
}
export default NFTBanner
