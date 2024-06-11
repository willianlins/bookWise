import Image, { StaticImageData } from 'next/image'

import { ContainerAvatar } from './styles'

interface AvatarProps {
  size?: 'small' | 'medium' | 'large'
  imagesrc: StaticImageData
}

export function Avatar({ size = 'small', imagesrc }: AvatarProps) {
  return (
    <ContainerAvatar size={size}>
      <Image src={imagesrc} alt="" quality={100} />
    </ContainerAvatar>
  )
}
