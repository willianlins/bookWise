import { Avatar } from '../Avatar'
import AvatarUser from '@/assets/avatarUser.jpg'
import {
  ContainerHeader,
  ContainerSection,
  ContentArticle,
  ContentUser,
} from './styled'

import * as Dialog from '@radix-ui/react-dialog'
import { ModalEbook } from '../Modal-ebook'

import bookTeste from '@/assets/Book_teste.png'
import Image from 'next/image'
import { RatingEbook } from '../Rating-ebook'

export function SectionEbookLarge() {
  return (
    <ContainerSection>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <ContainerHeader>
              <ContentUser>
                <Avatar size="medium" imagesrc={AvatarUser} />
                <div>
                  <p>Willian Araujo</p>
                  <span>Hoje</span>
                </div>
              </ContentUser>
              <RatingEbook initialValue={4} readonly />
            </ContainerHeader>
            <ContentArticle>
              <Image src={bookTeste} height={152} alt="" />
              <div>
                <h2>O Hobbit</h2>
                <span>J.R.R. Tolkien</span>
                <p>
                  Semper et sapien proin vitae nisi. Feugiat neque integer donec
                  et aenean posuere amet ultrices. Cras fermentum id pulvinar
                  varius leo a in. Amet libero pharetra nunc elementum fringilla
                  velit ipsum. Sed vulputate massa velit nibh...{' '}
                  <strong>ver mais</strong>
                </p>
              </div>
            </ContentArticle>
          </button>
        </Dialog.Trigger>
        <ModalEbook />
      </Dialog.Root>
    </ContainerSection>
  )
}
