import Link from 'next/link'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { ContainerMenu, ContentListMenu, ContentListMenuList } from './styles'

import logoBoolWise from '@/assets/Logo.png'
import Image from 'next/image'
import { Avatar } from '../Avatar'

export function MenuSide() {
  return (
    <ContainerMenu>
      <Image src={logoBoolWise} quality={100} height={32} alt="" />
      <ContentListMenu>
        <ContentListMenuList onSelect={true}>
          <Link href="#">
            <ChartLineUp size={24} />
            inicio
          </Link>
        </ContentListMenuList>
        <ContentListMenuList onSelect={false}>
          <Link href="#">
            <Binoculars size={24} />
            Explorar
          </Link>
        </ContentListMenuList>
        <ContentListMenuList onSelect={false}>
          <Link href="#">
            {' '}
            <User size={24} />
            Perfil
          </Link>
        </ContentListMenuList>
      </ContentListMenu>
      <button>
        <Avatar />
        Fazer login <SignIn size={20} />
      </button>
    </ContainerMenu>
  )
}
