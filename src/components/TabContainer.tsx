import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { colors } from '../styles/variables'

const FadeInAnimation = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`

const Container = styled.div`
  position: relative;
`

const ContentContainer = styled.div`
  animation: ${FadeInAnimation} 1s;
`

const HeaderContainer = styled.div``

const PartialHoverBackground = css`
  :hover {
    background-color: ${colors.brandVeryLight};
  }
`

const TabTitle = styled.button<{ selected: boolean }>`
  position: relative;
  display: inline;
  padding: 8px 5px;
  border: 0;
  border-bottom: 2px solid ${p => (p.selected ? colors.brand : colors.black)};
  background-color: ${p => (p.selected ? colors.brandLight : colors.white)};
  cursor: pointer;

  ${p => (p.selected ? `` : PartialHoverBackground)}
`

const TitleParagraph = styled.p`
  margin: 0 0 4px 0;
  font-size: 1.1em;
`

const SubtitleParagraph = styled.p`
  margin: 0;
  text-align: left;
  font-size: 0.9em;
  font-style: italic;
`

export interface Tab {
  title: string
  subtitle: string
  content: React.ReactNode
}

interface TabContainerProps {
  tabs: Tab[]
}

interface TabContainerState {
  selectedTab?: Tab
}

class TabContainer extends React.Component<TabContainerProps, TabContainerState> {
  constructor(props: TabContainerProps) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { tabs } = this.props
    const [firstTab] = tabs
    this.setState({
      selectedTab: firstTab
    })
  }

  onTabHeaderClick(index: number) {
    const { tabs } = this.props
    this.setState({
      selectedTab: tabs[index]
    })
  }

  render() {
    const { tabs } = this.props
    const { selectedTab } = this.state

    return (
      <Container>
        <HeaderContainer>
          {tabs.map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TabTitle onClick={() => this.onTabHeaderClick(i)} selected={e === selectedTab} key={i}>
              <TitleParagraph>{e.title}</TitleParagraph>
              <SubtitleParagraph>{e.subtitle}</SubtitleParagraph>
            </TabTitle>
          ))}
        </HeaderContainer>
        <ContentContainer key={selectedTab?.title}>{selectedTab?.content}</ContentContainer>
      </Container>
    )
  }
}

export { TabContainer }
