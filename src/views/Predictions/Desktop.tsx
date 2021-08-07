import React from 'react'
import styled from 'styled-components'
import { useAppDispatch } from 'state'
import { ArrowDownIcon, Button, ChartIcon } from '@rug-zombie-libs/uikit'
import { useGetPredictionsStatus, useIsChartPaneOpen, useIsHistoryPaneOpen } from 'state/hooks'
import { setChartPaneState } from 'state/predictions'
import { PredictionStatus, Round } from 'state/types'
import { useTranslation } from 'contexts/Localization'
import PrizeTab from './components/PrizeTab'
import { ErrorNotification, PauseNotification } from './components/Notification'
import History from './History'
import Positions from './Positions'

const PositionsPane = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  min-height: 506px;
`

const HistoryPane = styled.div<{ isHistoryPaneOpen: boolean }>`
  flex: none;
  overflow: hidden;
  transition: width 200ms ease-in-out;
  width: ${({ isHistoryPaneOpen }) => (isHistoryPaneOpen ? '384px' : 0)};
`

const ChartPane = styled.div<{ isChartPaneOpen: boolean }>`
  height: ${({ isChartPaneOpen }) => (isChartPaneOpen ? '100%' : 0)};
  position: relative;
`

const ExpandChartButton = styled(Button)`
  background-color: ${({ theme }) => theme.card.background};
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  color: ${({ theme }) => theme.colors.text};
  display: none;
  left: 32px;
  position: absolute;
  top: -32px;
  z-index: 50;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    background-color: ${({ theme }) => theme.card.background};
    opacity: 1;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    display: inline-flex;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
`

const StyledDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: flex;
    height: 100%;
  }
`

interface DesktopProps {
  bids: any[],
  lastBidId: number,
  userInfo: any,
  aid: number,
  setRefresh: any,
  refresh: boolean
}

const Desktop: React.FC<DesktopProps> = ({ bids, refresh, lastBidId, setRefresh, userInfo, aid }) => {
  const isHistoryPaneOpen = useIsHistoryPaneOpen()
  const isChartPaneOpen = useIsChartPaneOpen()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const toggleChartPane = () => {
    dispatch(setChartPaneState(!isChartPaneOpen))
  }

  return (
    <StyledDesktop>
      <ContentWrapper>
        <>
          <PositionsPane>
            <Positions bids={bids} refresh={refresh} setRefresh={setRefresh} userInfo={userInfo} lastBidId={lastBidId}
                       aid={aid} />
          </PositionsPane>
          <ChartPane isChartPaneOpen={isChartPaneOpen}>
            <ExpandChartButton
              variant='tertiary'
              scale='sm'
              startIcon={isChartPaneOpen ? <ArrowDownIcon /> : <ChartIcon />}
              onClick={toggleChartPane}
            >
              {isChartPaneOpen ? t('Close') : t('Auction details')}
            </ExpandChartButton>
            <PrizeTab />
          </ChartPane>
        </>
      </ContentWrapper>
      <HistoryPane isHistoryPaneOpen={isHistoryPaneOpen}>
        <History />
      </HistoryPane>
    </StyledDesktop>
  )
}

export default Desktop
