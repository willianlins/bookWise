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
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;

  &::-webkit-scrollbar {
    width: 0.375rem;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS['gray-700']};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS['gray-600']};
    border-radius: 20px;
    border: 3px solid ${({ theme }) => theme.COLORS['gray-600']};
  }
`

export const CloseButton = styled(Dialog.Close)`
  cursor: pointer;
  position: absolute;
  right: 0;
  margin-right: 2rem;
  color: ${({ theme }) => theme.COLORS['gray-400']};
`

export const EbookWrapperInfo = styled.div`
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
  margin-bottom: 2.5rem;
`

export const EbookContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: ${({ theme }) => theme.FONT_SIZE.lg};
    margin-bottom: 0.625rem;
    line-height: 140%;
  }

  span {
    color: ${({ theme }) => theme.COLORS['gray-300']};
  }
`

export const EbookRating = styled.div`
  display: block;
  color: ${({ theme }) => theme.COLORS['gray-400']};
  font-size: ${({ theme }) => theme.FONT_SIZE.sm};
`
export const EbookTagsWrapper = styled.ul`
  border-top: 1px dotted ${({ theme }) => theme.COLORS['gray-600']};
  padding: 1.5rem 0;
  list-style: none;

  display: flex;
  gap: 3.5rem;

  svg {
    color: ${({ theme }) => theme.COLORS['green-100']};
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: ${({ theme }) => theme.FONT_SIZE.sm};
      color: ${({ theme }) => theme.COLORS['gray-300']};
    }

    h3 {
      font-size: ${({ theme }) => theme.FONT_SIZE.md};
      line-height: 140%;
    }
  }
`

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > div + div {
    margin-top: 0.75rem;
  }
`

export const ComentWrapperHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    font-size: ${({ theme }) => theme.FONT_SIZE.sm};
    color: ${({ theme }) => theme.COLORS['gray-200']};
  }

  button {
    font-size: ${({ theme }) => theme.FONT_SIZE.md};
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS['purple-100']};
    cursor: pointer;
  }
`

export const ContainerCommentAddUser = styled.div`
  padding: 1.5rem;
  background: ${({theme}) => theme.COLORS['gray-700']};
  border-radius: ${({theme}) => theme.RADII.md};
`

export const CommentAddUserHeader = styled.header`
  display: flex;
  justify-content:space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h3 {
    font-size: ${({theme}) => theme.FONT_SIZE.md};
  }

`

export const CommentAvatarUser = styled.div``


export const ContentAddComent = styled.div``
