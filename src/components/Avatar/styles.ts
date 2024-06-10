import styled from 'styled-components'

export const ContainerAvatar = styled.div`
  /* border-radius: ${(props) => props.theme.RADII.full}; */
  border-color: red #32a1ce;

  img {
    width: 72px;
    height: 72px;
    object-fit: cover;
    border-radius: ${(props) => props.theme.RADII.full};
  }
`
