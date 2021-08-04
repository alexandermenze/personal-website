import * as React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/core'
import { breakpoints, colors, fonts } from '../styles/variables'

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
  padding-top: 12px;
  padding-bottom: 12px;
`

const ContentPanel = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  margin-left: 12px;
  margin-right: 12px;
`

const ContentContainer = styled.div<{ visible: boolean }>`
  animation: ${p => (p.visible ? FadeInAnimation : InstantlyOutAnimation)} 1s;
  opacity: ${p => (p.visible ? 1 : 0)};
  grid-row-start: 1;
  grid-column-start: 1;
`

const HeaderContainer = styled.div<{ onTop: boolean }>`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  margin-bottom: ${p => (p.onTop ? `16px` : `0`)};
  margin-top: ${p => (p.onTop ? `0` : `16px`)};
`

const TabTitle = styled.button<{ selected: boolean; onTop: boolean }>`
  position: relative;
  display: inline;
  padding: 8px 12px;
  border: 0;
  color: ${p => (p.selected ? colors.brand.default : colors.black)};
  background-color: ${colors.transparent};
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 25%;
    height: 1px;
    width: 50%;
    border-bottom: 2px solid ${p => (p.selected ? colors.brand.default : colors.transparent)};
    transition: border-bottom 0.15s linear;

    ${p => (p.onTop ? `bottom: 0` : ``)};
    ${p => (!p.onTop ? `top: 0` : ``)};
  }

  :hover {
    background-color: ${colors.brand.veryLight};
    border-radius: 0.4rem;
  }

  &:first-child {
    margin-left: 12px;
  }

  &:last-child {
    margin-right: 12px;
  }
`

const TitleParagraph = styled.p`
  margin: 0 0 4px 0;
  font-size: 1.1em;
`

const SubtitleParagraph = styled.p`
  margin: 0;
  margin-bottom: 4px;
  text-align: left;
  font-size: 0.9em;
  font-family: ${fonts.monospace};
`

const HideIfLessThanMedium = styled.div`
  @media (max-width: ${breakpoints.md}px) {
    display: none;
  }
`

const ShowIfLessThanMedium = styled.div`
  @media (min-width: ${breakpoints.md}px) {
    display: none;
  }
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

  onTabHeaderClick(index: number, event: React.MouseEvent) {
    const { tabs } = this.props
    this.setState({
      selectedTab: tabs[index]
    })
    event.currentTarget.scrollIntoView(false)
  }

  render() {
    const { tabs } = this.props
    const { selectedTab } = this.state

    return (
      <Container>
        <HideIfLessThanMedium>
          <HeaderContainer onTop>
            {tabs.map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TabTitle onClick={event => this.onTabHeaderClick(i, event)} selected={e === selectedTab} key={i} onTop>
                <TitleParagraph>{e.title}</TitleParagraph>
                <SubtitleParagraph>{e.subtitle}</SubtitleParagraph>
              </TabTitle>
            ))}
          </HeaderContainer>
        </HideIfLessThanMedium>
        <ContentPanel>
          {tabs.map((e, _) => (
            <ContentContainer visible={selectedTab === e} key={e.title}>
              {e.content}
            </ContentContainer>
          ))}
        </ContentPanel>
        <ShowIfLessThanMedium>
          <HeaderContainer onTop={false}>
            {tabs.map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <TabTitle onClick={event => this.onTabHeaderClick(i, event)} selected={e === selectedTab} key={i} onTop={false}>
                <TitleParagraph>{e.title}</TitleParagraph>
                <SubtitleParagraph>{e.subtitle}</SubtitleParagraph>
              </TabTitle>
            ))}
          </HeaderContainer>
        </ShowIfLessThanMedium>
      </Container>
    )
  }
}

export { TabContainer }
