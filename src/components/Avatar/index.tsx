import Image from 'next/image'

import AvatarUser from '@/assets/avatarUser.jpg'
import { ContainerAvatar } from './styles'

interface AvatarProps {
  size?: 'small' | 'medium'
}

export function Avatar({ size = 'small' }: AvatarProps) {
  return (
    <ContainerAvatar size={size}>
      <Image src={AvatarUser} alt="" quality={100} />
    </ContainerAvatar>
  )
}
