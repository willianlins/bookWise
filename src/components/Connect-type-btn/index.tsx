import { ConnectType } from './styles'
import Image, { StaticImageData } from 'next/image'

interface ConnectTypeBtnProps {
  imageUrl: StaticImageData
  typeText: string
  description?: string
  onConnectWithAccount: (type: 'google' | 'github') => void
}

export function ConnectTypeBtn({
  imageUrl,
  typeText,
  onConnectWithAccount,
  description = '',
}: ConnectTypeBtnProps) {
  function handleConnectWithAccount(type: 'google' | 'github') {
    onConnectWithAccount(type)
  }

  return (
    <ConnectType onClick={() => handleConnectWithAccount('google')}>
      <Image
        height={32}
        quality={100}
        src={imageUrl}
        alt={description}
        fetchPriority={undefined}
      />
      <span>{typeText}</span>
    </ConnectType>
  )
}
