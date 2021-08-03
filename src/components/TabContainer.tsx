import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { colors } from '../styles/variables'

const FadeInAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`

const InstantlyOutAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 0; }
`

const Container = styled.div`
  position: relative;
`

const ContentPanel = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
`

const ContentContainer = styled.div<{ visible: boolean }>`
  animation: ${p => (p.visible ? FadeInAnimation : InstantlyOutAnimation)} 1s;
  opacity: ${p => (p.visible ? 1 : 0)};
  grid-row-start: 1;
  grid-column-start: 1;
`

const HeaderContainer = styled.div`
  margin-bottom: 10px;
`

const PartialHoverBackground = css`
  :hover {
    background-color: ${colors.brand.veryLight};
  }
`

const TabTitle = styled.button<{ selected: boolean }>`
  position: relative;
  display: inline;
  padding: 8px 5px;
  border: 0;
  border-bottom: 2px solid ${p => (p.selected ? colors.brand.default : colors.black)};
  background-color: ${p => (p.selected ? colors.brand.light : colors.transparent)};
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
        <ContentPanel>
          {tabs.map((e, _) => (
            <ContentContainer visible={selectedTab === e} key={e.title}>
              {e.content}
            </ContentContainer>
          ))}
        </ContentPanel>
      </Container>
    )
  }
}

export { TabContainer }
