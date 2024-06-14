import styled from 'styled-components'

export const ContainerSections = styled.article`
  display: flex;
  flex-direction: column;
  /* margin-top: 2rem; */

  section + section {
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
  min-height: 12rem;
  background: ${(props) => props.theme.COLORS['gray-700']};
  border-radius: 8px;
  padding: 1.25rem;
  border: 1px solid transparent;
  transition: border-color 0.2s;
  margin-bottom: 1.5rem;

  button {
    cursor: pointer;
  }

  &:hover {
    border-color: ${(props) => props.theme.COLORS['gray-500']};
  }
`

export const ContentArticle = styled.article`
  display: flex;
  flex-direction: column;

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
  gap: 1rem;

  span {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
  }
`

export const ContentInfoBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
