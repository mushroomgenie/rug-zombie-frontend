import React from 'react'
import styled from 'styled-components'
import { Flex, HelpIcon, IconButton } from '@rug-zombie-libs/uikit'
import FlexRow from './FlexRow'
import { PricePairLabel, TimerLabel } from './Label'
import PrevNextNav from './PrevNextNav'
import HistoryButton from './HistoryButton'

const SetCol = styled.div`
  flex: none;
  width: auto;

  ${({ theme }) => theme.mediaQueries.lg} {
    width: 270px;
  }
`

const HelpButtonWrapper = styled.div`
  order: 1;
  margin: 0 8px 0 0;

  ${({ theme }) => theme.mediaQueries.lg} {
    order: 2;
    margin: 0 0 0 8px;
  }
`

const TimerLabelWrapper = styled.div`
  order: 2;

  ${({ theme }) => theme.mediaQueries.lg} {
    order: 1;
  }
`

const HistoryButtonWrapper = styled.div`
  display: none;
  order: 3;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: initial;
  }
`
interface MenuProps {
  userInfo: any
}

const Menu: React.FC<MenuProps> = ({userInfo}) => {
  return (
    <FlexRow alignItems="center" p="16px">
      <SetCol>
        <PricePairLabel />
      </SetCol>
      <FlexRow justifyContent="center">
        <PrevNextNav />
      </FlexRow>
      <SetCol>
        <Flex alignItems="center" justifyContent="flex-end">
          <TimerLabelWrapper>
            <TimerLabel userInfo={userInfo} />
          </TimerLabelWrapper>
        </Flex>
      </SetCol>
    </FlexRow>
  )
}

export default Menu
