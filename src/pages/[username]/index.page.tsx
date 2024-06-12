import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContainerSection,
  ContainerSectionRead,
  ContainerSections,
  ContentArticle,
  ContentAside,
  ContentInfoRating,
  ContentMain,
  ContentSectionHeader,
  ContentSectionsInfo,
  ContentWrapper,
} from './styles'
import { CaretRight, ChartLineUp } from 'phosphor-react'
import { SectionEbookLarge } from '@/components/Section-ebook-large'
import Link from 'next/link'
import { SectioneBook } from '@/components/Section-ebook'
import { Rating } from 'react-simple-star-rating'
import Image from 'next/image'

import bookTeste from '@/assets/Book_teste.png'

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
            <ContentSectionsInfo>
              <p>Sua útima leitura</p>
              <Link href="#">
                Ver todas <CaretRight size={16} />
              </Link>
            </ContentSectionsInfo>
            <ContainerSectionRead>
              <button>
                <ContentArticle>
                  <Image src={bookTeste} height={152} alt="" />
                  <div>
                    <ContentInfoRating>
                      <span>Há 2 dias</span>
                      <Rating
                        initialValue={2}
                        fillColor="#8381D9"
                        size={16}
                        readonly={true}
                        allowFraction={true}
                      />
                    </ContentInfoRating>
                    <h2>O Hobbit</h2>
                    <span>J.R.R. Tolkien</span>
                    <p>
                      Semper et sapien proin vitae nisi. Feugiat neque integer
                      donec et aenean posuere amet ultrices. Cras fermentum id
                      pulvinar...
                    </p>
                  </div>
                </ContentArticle>
              </button>
            </ContainerSectionRead>
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
            <SectioneBook size="small" />
            <SectioneBook size="small" />
            <SectioneBook size="small" />
          </ContentAside>
        </ContentWrapper>
      </ContentMain>
    </ContainerHome>
  )
}
