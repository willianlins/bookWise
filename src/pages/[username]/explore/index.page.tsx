import { MenuSide } from '@/components/Menu-side'
import {
  ContainerHome,
  ContentMain,
  ContentSectionHeader,
  ContentWrapper,
} from './styles'
import { Binoculars } from 'phosphor-react'

export default function Explore() {
  return (
    <ContainerHome>
      <MenuSide />
      <ContentMain>
        <ContentSectionHeader>
          <div>
            <Binoculars size={32} />
            <h1>Explorar</h1>
            <p>s</p>
          </div>
        </ContentSectionHeader>
        <ContentWrapper></ContentWrapper>
      </ContentMain>
    </ContainerHome>
  )
}
