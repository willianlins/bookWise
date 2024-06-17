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

export const ContainerSections = styled.article`
  display: flex;
  flex-direction: column;

  section + section {
    margin-top: 0.75rem;
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

export const ContentSectionsInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: ${(props) => props.theme.FONT_SIZE.sm};
  margin-bottom: 1rem;
  a {
    display: flex;
    justify-content: center;
    gap: 0.175rem;
    color: ${(props) => props.theme.COLORS['purple-100']};
    font-weight: bold;
    svg {
      line-height: 100%;
    }
  }
`

export const ContainerSectionRead = styled.section`
  width: 38rem;
  height: 12rem;
  background: ${(props) => props.theme.COLORS['gray-700']};
  border-radius: ${({ theme }) => theme.RADII.md};
  padding: 1.25rem;
  border: 1px solid transparent;
  transition: border-color 0.2s;
  margin-bottom: 3rem;

  button {
    cursor: pointer;
  }

  &:hover {
    border-color: ${(props) => props.theme.COLORS['gray-500']};
  }
`

export const ContentArticle = styled.article`
  display: flex;
  gap: 1.25rem;

  h2 {
    font-size: ${(props) => props.theme.FONT_SIZE.md};
    line-height: 140%;
  }

  span {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    color: ${(props) => props.theme.COLORS['gray-400']};
  }

  p {
    margin-top: 1.25rem;
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    line-height: 160%;
    color: ${(props) => props.theme.COLORS['gray-300']};
  }

  strong {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme.COLORS['purple-100']};
  }
`
export const ContentInfoRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
  }
`
