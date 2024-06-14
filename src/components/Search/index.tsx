import { MagnifyingGlass } from 'phosphor-react'
import { ContainerForm, ContentInputSearch } from './styles'

export function Search() {
  return (
    <ContainerForm>
      <ContentInputSearch>
        <input type="text" placeholder="Buscar livro avaliado" />
        <MagnifyingGlass size={20} />
      </ContentInputSearch>
    </ContainerForm>
  )
}
