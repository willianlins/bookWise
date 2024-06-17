import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContainerSectionsBook,
  ContainerTopics,
  ContentMain,
  ContentSectionHeader,
  ContentWrapper,
} from './styles'
import { Binoculars } from 'phosphor-react'
import { Search } from '@/components/Search'
import { TopicsType } from './components/topicsType'
import { SectioneBook } from '@/components/Section-ebook'

export default function Explore() {
  return (
    <ContainerHome>
      <MenuSide />
      <ContentMain>
        <ContentSectionHeader>
          <div>
            <Binoculars size={32} />
            <h1>Explorar</h1>
          </div>
          <Search placeHolderName="Buscar livro ou autor" />
        </ContentSectionHeader>
        <ContentWrapper>
          <ContainerTopics>
            <TopicsType type="Tudo" status="selected" />
            <TopicsType type="Computação" />
            <TopicsType type="Educação" />
            <TopicsType type="Fantasia" />
            <TopicsType type="Ficção científica" />
            <TopicsType type="Horror" />
            <TopicsType type="HQs" />
            <TopicsType type="Suspense" />
          </ContainerTopics>
        </ContentWrapper>
        <ContainerSectionsBook>
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
          <SectioneBook size="medium" />
        </ContainerSectionsBook>
      </ContentMain>
    </ContainerHome>
  )
}
