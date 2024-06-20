import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'
import { ConnectTypeBtn } from '../Connect-type-btn'
import { useRouter } from 'next/router'

import googleLogo from '@/assets/google_logo.png'
import gitHubLogo from '@/assets/git_hub_logo.png'

export function LoginModal() {

  async function handleConnectWithAccount(type: string) {
    const router = useRouter()
    switch (type) {
      case 'google':
        console.log('Login with google')
        break
      case 'github':
        console.log('github')
        break
      default:
        await router.push('/visitant/')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton asChild>
          <X size={24} />
        </CloseButton>
        <p>Faça login para deixar sua avaliação</p>
        <ConnectTypeBtn
            imageUrl={googleLogo}
            onConnectWithAccount={() => handleConnectWithAccount('google')}
            typeText="Entrar com Google"
            description="Imagem ilustrando a letra G do google"
          />
          <ConnectTypeBtn
            imageUrl={gitHubLogo}
            onConnectWithAccount={() => handleConnectWithAccount('github')}
            typeText="Entrar com GitHub"
            description="Imagem ilustrando o icone do github"
          />
      </Content>
    </Dialog.Portal>
  )
}
