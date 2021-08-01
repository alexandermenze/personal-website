import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes, SerializedStyles } from '@emotion/core'

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

const PartialHoverBackground = css`
  :hover {
    background-color: yellow;
  }
`

const TabTitle = styled.button<{ selected: boolean }>`
  position: relative;
  display: inline;
  border: 2px solid #000;
  background-color: ${p => (p.selected ? `#cccccc` : `white`)};

  ${p => (p.selected ? `` : PartialHoverBackground)}
`

export interface Tab {
  name: string
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
        <div>
          {tabs.map((e, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <TabTitle onClick={() => this.onTabHeaderClick(i)} selected={e === selectedTab} key={i}>
              {e.name}
            </TabTitle>
          ))}
        </div>
        <ContentContainer key={selectedTab?.name}>{selectedTab?.content}</ContentContainer>
      </Container>
    )
  }
}

export { TabContainer }
