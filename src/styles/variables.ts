/* eslint-disable max-len */

export const colors = {
  brand: {
    default: '#663399',
    light: 'rgba(102, 51, 153, 0.3)',
    veryLight: 'rgba(102, 51, 153, 0.1)'
  },
  backgroundColor: 'rgba(0, 0, 0, 0.05)',
  accent: '#ffb238',
  secondary: '#D86130',
  gray: {
    dark: 'hsla(270, 17.119554496%, 0%, 0.92)',
    copy: 'hsla(270, 15.797828016000002%, 0%, 0.88)',
    calm: 'rgba(0, 0, 0, 0.54)',
    light: 'rgba(0, 0, 0, 0.1)'
  },
  white: '#fff',
  black: '#000',
  transparent: 'rgba(0, 0, 0, 0)'
}

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  sm: 500,
  md: 720,
  lg: 960,
  xl: 1140,
  sideBar: 120,
  socialIcon: 24
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5
}

export const heights = {
  header: 60
}

export const margins = {
  defaultDouble: 20,
  default: 10,
  defaultHalf: 5,
  contentToHeaderMargin: 100
}

export const cssValues = {
  usableScreenHeight: `calc(100vh - ${margins.contentToHeaderMargin * 2}px)`,
  firstUsableScreenHeight: `calc(100vh - ${margins.contentToHeaderMargin * 2}px - ${heights.header * 2}px)`
}
