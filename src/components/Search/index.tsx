import { MagnifyingGlass } from 'phosphor-react'
import { ContainerForm, ContentInputSearch } from './styles'

export function Search() {
  return (
    <ContainerForm>
      <ContentInputSearch>
        <input type="text" placeholder="Buscar livro avaliado" />
        <button>
          <MagnifyingGlass size={20} />
        </button>
      </ContentInputSearch>
    </ContainerForm>
  )
}
