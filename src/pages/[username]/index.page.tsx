import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContainerSections,
  ContentAside,
  ContentMain,
  ContentSectionHeader,
  ContentSectionsInfo,
  ContentWrapper,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { SectionEbookLarge } from '@/components/Section-ebook-large'
import Link from 'next/link'
import { SectioneBook } from '@/components/Section-ebook'

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
        </ContentSectionHeader>
        <ContentWrapper>
          <ContainerSections>
            {/* <ContentSectionsInfo>
              <p>Sua útima leitura</p>
              <Link href="#">
                Ver todas <CaretRight size={16} />
              </Link>
            </ContentSectionsInfo> */}
            <ContentSectionsInfo>
              <p>Avaliações mais recentes</p>
            </ContentSectionsInfo>
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
            <SectionEbookLarge />
          </ContainerSections>
          <ContentAside>
            <ContentSectionsInfo>
              <p>Livros populares</p>
              <Link href="#">
                Ver todos <CaretRight size={16} />
              </Link>
            </ContentSectionsInfo>
            <SectioneBook size="small" />
          </ContentAside>
        </ContentWrapper>
      </ContentMain>
    </ContainerHome>
  )
}
