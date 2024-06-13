import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
`

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5.938rem;
`
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 38rem 24.25rem;
  margin-top: 1rem;
`

export const ContentSectionHeader = styled.header`
  margin-top: 4.5rem;

  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }

  h1 {
    font-size: ${(props) => props.theme.FONT_SIZE['2xl']};
  }

  svg {
    color: ${(props) => props.theme.COLORS['green-100']};
  }
`

export const ContentAside = styled.aside`
  margin-left: 4rem;
  display: flex;
  flex-direction: column;

  button + button {
    margin-top: 0.75rem;
  }
`
