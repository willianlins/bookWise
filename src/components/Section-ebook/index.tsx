import ebookTeste from '@/assets/Book_teste.png'
import Image from 'next/image'
import { Rating } from 'react-simple-star-rating'
import { ContainerAsideSection, ContentInfo } from './styles'

interface SectioneBookProps {
  size?: 'small' | 'medium'
}

export function SectioneBook({ size = 'small' }: SectioneBookProps) {
  return (
    <ContainerAsideSection size={size}>
      <Image src={ebookTeste} alt="" quality={100} />
      <ContentInfo>
        <h2>A evolução dos bichos</h2>
        <span>George Orwell</span>
      </ContentInfo>
      <Rating
        initialValue={2}
        fillColor="#8381D9"
        size={16}
        readonly={true}
        allowFraction={true}
      />
    </ContainerAsideSection>
  )
}
