import { Avatar } from '../Avatar'

import userAvatar from '@/assets/avatarUser.jpg'
import { RatingEbook } from '../Rating-ebook'
import { ContainerComment, ContainerUser, CotainerWrapper } from './styles'

export function CommentUser() {
  return (
    <ContainerComment>
      <CotainerWrapper>
        <ContainerUser>
          <Avatar imagesrc={userAvatar} />
          <div>
            <h3>Willian Araujo</h3>
            <time>Há 2 dias</time>
          </div>
        </ContainerUser>
        <RatingEbook />
      </CotainerWrapper>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque laborum
        assumenda autem officiis nam consequatur iusto culpa, doloremque rem
        obcaecati molestiae, debitis eligendi numquam repellat dolorem, quisquam
        pariatur esse? Itaque.
      </p>
    </ContainerComment>
  )
}
