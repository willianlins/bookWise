import styled, { css } from 'styled-components'

interface ContainerAsideSectionProps {
  size: 'small' | 'medium'
}
const containerAsideSectionVariant = {
  small: css`
    width: 4rem;
    height: 5.875rem;
  `,
  medium: css`
    width: 6.75rem;
    height: 9.5rem;
  `,
}

export const ContainerAsideSection = styled.div<ContainerAsideSectionProps>`
  height: 8.125rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;

  background-color: ${(props) => props.theme.COLORS['gray-700']};

  img {
    ${(props) => containerAsideSectionVariant[props.size]}
  }
`

export const ContentInfo = styled.div`
  h2 {
    font-size: ${(props) => props.theme.FONT_SIZE.md};
    line-height: 140%;
  }
  span {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    color: ${(props) => props.theme.COLORS['gray-400']};
  }
`
