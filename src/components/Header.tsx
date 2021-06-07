import * as React from 'react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import { Link } from 'gatsby'

import { keyframes } from '@emotion/core'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

interface HeaderStyleProps {
  isVisible: boolean
}

const HideKeyframes = keyframes`
  0%    { transform:translateY(0)    }
  100%  { transform:translateY(-100%) }
`

const ShowKeyframes = keyframes`
  0%   { transform:translateY(-100%) }
  100% { transform:translateY(0)    }
`

const StyledHeader = styled.header<HeaderStyleProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.brand};
  color: ${transparentize(0.5, colors.white)};
  animation: ${(props: HeaderStyleProps) => (props.isVisible ? ShowKeyframes : HideKeyframes)} 0.5s ease 0s forwards;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`

const HomepageLink = styled(Link)`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`

interface HeaderProps {
  title: string
}

interface HeaderState {
  isVisible: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
  lastScrollTop = 0

  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      isVisible: true
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop
    if (st > this.lastScrollTop) {
      this.setState({
        isVisible: false
      })
    } else {
      this.setState({
        isVisible: true
      })
    }
    this.lastScrollTop = st <= 0 ? 0 : st
  }

  render() {
    const { title } = this.props
    const { isVisible } = this.state

    return (
      <StyledHeader isVisible={isVisible}>
        <HeaderInner>
          <HomepageLink to="/">{title}</HomepageLink>
        </HeaderInner>
      </StyledHeader>
    )
  }
}

export default Header
