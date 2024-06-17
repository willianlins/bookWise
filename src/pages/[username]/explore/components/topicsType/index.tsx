import { ContainerType } from './styles'

interface TipicsTypeProps {
  type: string
  status?: 'default' | 'selected'
}

export function TopicsType({ type, status = 'default' }: TipicsTypeProps) {
  return <ContainerType status={status}>{type}</ContainerType>
}
