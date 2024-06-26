import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  ComentWrapperHeader,
  CommentAddUserHeader,
  CommentAvatarUser,
  CommentWrapper,
  ContainerCommentAddUser,
  Content,
  ContentAddComent,
  EbookContent,
  EbookInfo,
  EbookRating,
  EbookTagsWrapper,
  EbookWrapperInfo,
  Overlay,
} from './styles'
import { BookOpen, BookmarkSimple, Check, X } from 'phosphor-react'
import Image from 'next/image'

import ebookTest from '@/assets/Book_teste.png'
import { RatingEbook } from '../Rating-ebook'
import { CommentUser } from '../Comment-user'
import { Avatar } from '../Avatar'

import userAvatar from '@/assets/avatarUser.jpg'
import { LoginModal } from '../Login-modal'

export function ModalEbook() {
  return (
    <Dialog.Portal>
      <Overlay>
        <Content>
          <CloseButton asChild>
            <X size={24} />
          </CloseButton>
          <EbookWrapperInfo>
            <EbookInfo>
              <Image src={ebookTest} alt="" height={240} />
              <EbookContent>
                <div>
                  <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
                  <span>Zeno Rocha</span>
                </div>
                <div>
                  <RatingEbook sizes={20} />
                  <EbookRating>3 avaliação</EbookRating>
                </div>
              </EbookContent>
            </EbookInfo>
            <EbookTagsWrapper>
              <li>
                <BookmarkSimple size={24} />
                <div>
                  <span>Categoria</span>
                  <h3>Computação, educação</h3>
                </div>
              </li>
              <li>
                <BookOpen size={24} />
                <div>
                  <span>Páginas</span>
                  <h3>160</h3>
                </div>
              </li>
            </EbookTagsWrapper>
          </EbookWrapperInfo>
          <CommentWrapper>
            <ComentWrapperHeader>
              <span>Avaliação</span>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Avaliar</button>
                </Dialog.Trigger>
                <LoginModal />
              </Dialog.Root>
            </ComentWrapperHeader>
            <ContainerCommentAddUser>
              <CommentAddUserHeader>
                <CommentAvatarUser>
                  <Avatar imagesrc={userAvatar} />
                  <div>
                    <h3>Willian Araujo</h3>
                  </div>
                </CommentAvatarUser>
                <RatingEbook sizes={28} />
              </CommentAddUserHeader>
              <ContentAddComent>
                <textarea placeholder="Excreva sua avaliação" maxLength={450} />
                <div>
                  <button>
                    <X size={24} />
                  </button>
                  <button>
                    <Check size={24} />
                  </button>
                </div>
              </ContentAddComent>
            </ContainerCommentAddUser>
            <CommentUser />
            <CommentUser />
            <CommentUser />
            <CommentUser />
            <CommentUser />
            <CommentUser />
            <CommentUser />
            <CommentUser />
          </CommentWrapper>
        </Content>
      </Overlay>
    </Dialog.Portal>
  )
}
