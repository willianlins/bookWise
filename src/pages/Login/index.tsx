import Image from 'next/image'
import { ConnectType, Container, ContentLeft, ContentRight } from './styles'

import backgroundLogo from '@/assets/background_login.png'
import googleLogo from '@/assets/google_logo.png'
import gitHubLogo from '@/assets/git_hub_logo.png'
import rocketLogo from '@/assets/Rocket_launch_logo.png'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()

  async function handleConnectWithAccount(type: string) {
    await router.push('/visitant/')
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
          <ConnectType onClick={() => handleConnectWithAccount('google')}>
            <Image
              height={32}
              quality={100}
              src={googleLogo}
              alt="Imagem ilustrando a letra G do google"
            />
            <span>Entrar com Google</span>
          </ConnectType>
          <ConnectType onClick={() => handleConnectWithAccount('github')}>
            <Image
              height={32}
              quality={100}
              src={gitHubLogo}
              alt="Imagem ilustrando o icone do github"
            />
            <span>Entrar com GitHub</span>
          </ConnectType>
          <ConnectType onClick={() => handleConnectWithAccount('visitant')}>
            <Image
              height={32}
              quality={100}
              src={rocketLogo}
              alt="Imagem ilustrando um icone de um foguete"
            />
            <span>Acessar como visitante</span>
          </ConnectType>
        </div>
      </ContentRight>
    </Container>
  )
}
