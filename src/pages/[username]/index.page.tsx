import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContainerSections,
  ContentMain,
  ContentSectionHeader,
  ContentWrapper,
} from './styles'
import { ChartLineUp } from 'phosphor-react'
import { SectionEbookLarge } from '@/components/Section-ebook-large'

export default function Home() {
  return (
    <ContainerHome>
      <MenuSide />
      <ContentMain>
        <ContentSectionHeader>
          <div>
            <ChartLineUp size={32} />
            <h1>Início</h1>
          </div>
          <p>Avaliações mais recentes</p>
        </ContentSectionHeader>
        <ContentWrapper>
          <ContainerSections>
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
          </ContainerSections>
          <div>Left Content</div>
        </ContentWrapper>
      </ContentMain>
    </ContainerHome>
  )
}
