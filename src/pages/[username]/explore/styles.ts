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
  width: 62.25rem;
  height: 20px;
`

export const ContentSectionHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 27rem;
  justify-content: space-between;
  align-items: center;
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

export const ContainerTopics = styled.nav`
  display: flex;
  gap: 1rem;
`

export const ContainerSectionsBook = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 3rem;
`
