import ebookTeste from '@/assets/Book_teste.png'
import Image from 'next/image'
import { ContainerAsideSection, ContentInfo } from './styles'

import * as Dialog from '@radix-ui/react-dialog'
import { ModalEbook } from '../Modal-ebook'
import { RatingEbook } from '../Rating-ebook'

interface SectioneBookProps {
  size?: 'small' | 'medium'
}

export function SectioneBook({ size = 'small' }: SectioneBookProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ContainerAsideSection size={size}>
          <Image src={ebookTeste} alt="" quality={100} />
          <div>
            <ContentInfo>
              <h2>A evolução dos bichos</h2>
              <span>George Orwell</span>
            </ContentInfo>
           <RatingEbook />
          </div>
        </ContainerAsideSection>
      </Dialog.Trigger>
      <ModalEbook />
    </Dialog.Root>
  )
}
