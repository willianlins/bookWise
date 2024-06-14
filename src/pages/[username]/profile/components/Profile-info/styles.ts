import styled from 'styled-components'

export const ContainerProfile = styled.aside`
  width: 19.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${(props) => props.theme.COLORS['gray-700']};
`

export const ProfileWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  h2 {
    font-size: ${(props) => props.theme.FONT_SIZE.xl};
    line-height: 140%;
    font-weight: 700;
    margin-top: 2rem;
  }

  span {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    color: ${(props) => props.theme.COLORS['gray-400']};
  }
`

export const ProfileBorder = styled.div`
  width: 2rem;
  height: 0.25rem;
  margin: 2rem 0;
  border-radius: ${(props) => props.theme.RADII.full};
  background: ${(props) => props.theme.COLORS['gradient-horizontal']};
`

export const InfoWrapper = styled.ul`
  padding: 2rem 3.5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    strong {
      line-height: 140%;
      ${(props) => props.theme.COLORS['gray-200']};
    }

    span {
      display: block;
      font-size: ${(props) => props.theme.FONT_SIZE.sm};
      color: ${(props) => props.theme.COLORS['gray-300']};
    }
  }

  li + li {
    margin-top: 2.5rem;
  }

  svg {
    color: ${(props) => props.theme.COLORS['green-100']};
  }
`
