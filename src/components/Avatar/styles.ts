import styled from 'styled-components'

interface ContainerAvatarProps {
  size: 'small' | 'medium'
}

export const ContainerAvatar = styled.div<ContainerAvatarProps>`
  border-radius: ${(props) => props.theme.RADII.full};
  line-height: 0;
  overflow: hidden;
  border: 2px solid transparent;
  background: ${(props) => props.theme.COLORS['gradient-horizontal']};

  ${(props) =>
    props.size === 'small'
      ? `
      img {
        width: 2rem;
        height: 2rem;
        object-fit: cover;
      }
  `
      : `
      img {
        width: 4.5rem;
        height: 4.5rem;
        object-fit: cover;
      }
  `}
`
