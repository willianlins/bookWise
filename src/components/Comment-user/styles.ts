import styled from 'styled-components'

export const ContainerComment = styled.div`
  background: ${({ theme }) => theme.COLORS['gray-700']};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.RADII.md};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const CotainerWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h3 {
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
  }

  time {
    color: ${({ theme }) => theme.COLORS['gray-400']};
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
  }
`
