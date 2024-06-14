import styled from 'styled-components'

export const ContainerForm = styled.form``

export const ContentInputSearch = styled.div`
  display: flex;
  border-radius: 4px;
  padding: 0.875rem 1rem;
  gap: 1rem;
  border: 1px solid ${(props) => props.theme.COLORS['gray-500']};

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme.COLORS['gray-100']};

    &::placeholder {
      color: ${(props) => props.theme.COLORS['gray-400']};
      font-size: ${(props) => props.theme.FONT_SIZE.sm};
      font-family: ${(props) => props.theme.FONT.default};
    }
  }
`
