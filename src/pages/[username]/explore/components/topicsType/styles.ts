import styled, { css } from 'styled-components'

interface ContainerTypeProps {
  status: 'default' | 'selected'
}

const TypeVariant = {
  default: css`
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS['purple-100']};
    color: ${({ theme }) => theme.COLORS['purple-100']};
  `,
  selected: css`
    background: ${({ theme }) => theme.COLORS['purple-200']};
    color: ${({ theme }) => theme.COLORS['gray-100']};
  `,
}

export const ContainerType = styled.button<ContainerTypeProps>`
  padding: 0.25rem 0.875rem;
  border-radius: ${({ theme }) => theme.RADII.full};
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s;

  ${(props) => TypeVariant[props.status]}

  &:hover {
    border-color: ${({ theme }) => theme.COLORS['purple-100']};
    background: ${({ theme }) => theme.COLORS['purple-200']};
    color: ${({ theme }) => theme.COLORS['gray-100']};
  }
`
