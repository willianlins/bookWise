import * as Dialog from '@radix-ui/react-dialog'
import {
  CloseButton,
  Content,
  EbookInfo,
  EbookRating,
  EbookWrapperInfo,
  Overlay,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'

import ebookTest from '@/assets/Book_teste.png'
import { RatingEbook } from '../Rating-ebook/indext'

export function ModalEbook() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>
        <EbookWrapperInfo>
          <EbookInfo>
            <Image src={ebookTest} alt="" height={240} />
            <div>
              <h2>14 Hábitos de Desenvolvedores Altamente Produtivos</h2>
              <span>Zeno Rocha</span>
            </div>
            <EbookRating>
              <RatingEbook />
              <span>3 avaliação</span>
            </EbookRating>
          </EbookInfo>
        </EbookWrapperInfo>
      </Content>
    </Dialog.Portal>
  )
}
