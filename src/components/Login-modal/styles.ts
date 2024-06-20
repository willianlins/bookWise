import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`

export const Content = styled(Dialog.Content)`
  width: 32rem;
  background-color: ${({ theme }) => theme.COLORS['gray-700']};
  padding: 3.5rem 4.5rem;
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    margin-bottom: 2.5rem; 
  }

  button + button {
    margin-top: 1rem;
  }

`


export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  margin-top: 1rem;
  top: 0;
  right: 0;
  margin-right: 1rem;
  color: ${({ theme }) => theme.COLORS['gray-400']};`
