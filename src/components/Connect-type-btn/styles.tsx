import styled from 'styled-components'

export const ConnectType = styled.button`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme.COLORS['gray-600']};
  border-radius: ${({ theme }) => theme.RADII.md};
  gap: 1.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background: ${(props) => props.theme.COLORS['gray-500']};
  }
`
