import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContentAside,
  ContentMain,
  ContentSectionHeader,
  ContentWrapper,
} from './styles'
import { User } from 'phosphor-react'

import bookTeste from '@/assets/Book_teste.png'
import { SectioMyEbook } from './components/Section-my-ebook'

export default function Home() {
  return (
    <ContainerHome>
      <MenuSide />
      <ContentMain>
        <ContentSectionHeader>
          <div>
            <User size={32} />
            <h1>Perfil</h1>
          </div>
        </ContentSectionHeader>
        <ContentWrapper>
          <div>
            <SectioMyEbook imageSrc={bookTeste} />
            <SectioMyEbook imageSrc={bookTeste} />
            <SectioMyEbook imageSrc={bookTeste} />
            <SectioMyEbook imageSrc={bookTeste} />
            <SectioMyEbook imageSrc={bookTeste} />
            <SectioMyEbook imageSrc={bookTeste} />
          </div>
          <ContentAside></ContentAside>
        </ContentWrapper>
      </ContentMain>
    </ContainerHome>
  )
}
