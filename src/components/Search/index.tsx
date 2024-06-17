import { MagnifyingGlass } from 'phosphor-react'
import { ContainerForm, ContentInputSearch } from './styles'

interface SearchProps {
  placeHolderName?: string
}

export function Search({ placeHolderName }: SearchProps) {
  return (
    <ContainerForm>
      <ContentInputSearch>
        <input type="text" placeholder={placeHolderName} />
        <button>
          <MagnifyingGlass size={20} />
        </button>
      </ContentInputSearch>
    </ContainerForm>
  )
}
