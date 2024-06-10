import { MenuSide } from '@/components/Menu-side'
import { ContainerHome, ContentMain } from './styles'

export default function Home() {
  return (
    <ContainerHome>
      <MenuSide />
      <ContentMain>
        <div>List Content</div>
        <div>Left Content</div>
      </ContentMain>
    </ContainerHome>
  )
}
