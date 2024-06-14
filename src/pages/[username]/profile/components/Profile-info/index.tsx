import { Avatar } from '@/components/Avatar'

import userProfile from '@/assets/avatarUser.jpg'
import { BookOpen, BookmarkSimple, Books, UserList } from 'phosphor-react'
import {
  ContainerProfile,
  InfoWrapper,
  ProfileBorder,
  ProfileWrapper,
} from './styles'

export function ProfileInfo() {
  return (
    <ContainerProfile>
      <ProfileWrapper>
        <Avatar size="large" imagesrc={userProfile} />
        <h2>Willian Araujo</h2>
        <span>membro desde 2024</span>
      </ProfileWrapper>
      <ProfileBorder />
      <InfoWrapper>
        <li>
          <BookOpen size={32} />
          <div>
            <strong>3000</strong>
            <span>Páginas lidas</span>
          </div>
        </li>
        <li>
          <Books size={32} />
          <div>
            <strong>10</strong>
            <span>Livros Avaliados</span>
          </div>
        </li>
        <li>
          <UserList size={32} />
          <div>
            <strong>8</strong>
            <span>Autores lidos</span>
          </div>
        </li>
        <li>
          <BookmarkSimple size={32} />
          <div>
            <strong>Computação</strong>
            <span>Categoria mais lida</span>
          </div>
        </li>
      </InfoWrapper>
    </ContainerProfile>
  )
}
