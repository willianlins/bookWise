import Image from 'next/image'
import { Container, ContentLeft, ContentRight } from './styles'

import backgroundLogo from '@/assets/background_login.png'
import googleLogo from '@/assets/google_logo.png'
import gitHubLogo from '@/assets/git_hub_logo.png'
import rocketLogo from '@/assets/Rocket_launch_logo.png'
import { useRouter } from 'next/router'
import { ConnectTypeBtn } from '@/components/Connect-type-btn'

export default function Login() {
  const router = useRouter()

  async function handleConnectWithAccount(type: string) {
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
    <Container>
      <ContentLeft>
        <Image src={backgroundLogo} alt="" quality={100} height={912} />
      </ContentLeft>
      <ContentRight>
        <div>
          <h2>Boas vindas!</h2>
          <p>Faça seu login ou acesse como visitante</p>

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
          <ConnectTypeBtn
            imageUrl={rocketLogo}
            onConnectWithAccount={() => handleConnectWithAccount('visitant')}
            typeText="Acessar como visitante"
            description="Imagem ilustrando um icone de um foguete"
          />
        </div>
      </ContentRight>
    </Container>
  )
}
