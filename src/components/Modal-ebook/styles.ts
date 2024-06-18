import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
`
export const Content = styled(Dialog.Content)`
  width: 41rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS['gray-800']};
  padding: 1rem 2rem 0 3rem;

  position: fixed;
  top: 0;
  right: 0;
`

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 2rem;
  color: ${({ theme }) => theme.COLORS['gray-400']};
`

export const EbookWrapperInfo = styled.div`
  width: 35rem;
  background-color: ${({ theme }) => theme.COLORS['gray-700']};
  margin: 2rem auto;
  border-radius: ${({ theme }) => theme.RADII.md};
  padding: 1.5rem 2rem 1rem;
`

export const EbookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  span{
    display: block;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: ${({theme})=> theme.FONT_SIZE.lg};
      margin-bottom: 0.625rem;
      line-height: 140%;
    }

    span {
      color: ${({theme}) => theme.COLORS['gray-300']};
   
    }
    
  }

`

export const EbookRating = styled.div`
  span {
    color: ${({theme})=> theme.COLORS['gray-400']};
    font-size: ${({theme})=> theme.FONT_SIZE.sm};
  }
`
