import styled, { css } from 'styled-components'

interface ContainerAvatarProps {
  size: 'small' | 'medium' | 'large'
}

const ContainerAvatarVariant = {
  small: css`
    width: 2rem;
    height: 2rem;
  `,
  medium: css`
    width: 2.5rem;
    height: 2.5rem;
  `,
  large: css`
    width: 4.5rem;
    height: 4.5rem;
  `,
}

export const ContainerAvatar = styled.div<ContainerAvatarProps>`
  border-radius: ${(props) => props.theme.RADII.full};
  line-height: 0;
  overflow: hidden;
  border: 2px solid transparent;
  background: ${(props) => props.theme.COLORS['gradient-horizontal']};

  img {
    ${(props) => ContainerAvatarVariant[props.size]}
    object-fit: cover;
  }
`
