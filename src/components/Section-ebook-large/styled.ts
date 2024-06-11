import styled from 'styled-components'

export const ContainerSection = styled.section`
  width: 38rem;
  height: 17.5rem;
  background: ${(props) => props.theme.COLORS['gray-700']};
  border-radius: 8px;
  padding: 1.25rem;
`

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export const ContentUser = styled.div`
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  span {
    color: ${(props) => props.theme.COLORS['gray-400']};
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
  }

  p {
    margin-top: 0.125rem;
  }
`

export const ContentArticle = styled.article`
  display: flex;
  margin-top: 2rem;
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

  button {
    font-size: ${(props) => props.theme.FONT_SIZE.sm};
    line-height: 160%;
    font-weight: bold;
    color: ${(props) => props.theme.COLORS['purple-100']};
  }
`
