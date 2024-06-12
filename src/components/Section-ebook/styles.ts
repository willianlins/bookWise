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

export const ContainerAsideSection = styled.button<ContainerAsideSectionProps>`
  min-height: 8.125rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: ${(props) => props.theme.COLORS['gray-700']};
  transition: border 0.2s;

  img {
    ${(props) => containerAsideSectionVariant[props.size]}
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &:hover {
    border-color: ${(props) => props.theme.COLORS['gray-500']};
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
