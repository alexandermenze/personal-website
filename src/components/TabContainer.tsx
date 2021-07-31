import * as React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  position: relative;
`

const TabTitle = styled.h3<{ selected: boolean }>`
  position: relative;
  display: inline;
  border: 2px solid #000;
  background-color: ${p => (p.selected ? `#808080` : `white`)};
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
        <div>{selectedTab?.content}</div>
      </Container>
    )
  }
}

export { TabContainer }