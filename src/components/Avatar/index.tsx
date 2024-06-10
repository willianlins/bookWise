import Image from 'next/image'

import AvatarUser from '@/assets/avatarUser.jpg'
import { ContainerAvatar } from './styles'

export function Avatar() {
  return (
    <ContainerAvatar>
      <Image src={AvatarUser} alt="" quality={100} />
    </ContainerAvatar>
  )
}
