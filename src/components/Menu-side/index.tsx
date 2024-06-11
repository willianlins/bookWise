import Link from 'next/link'
import {
  Binoculars,
  ChartLineUp,
  SignIn /*, SignOut, */,
  User,
} from 'phosphor-react'
import {
  ButtonLogin,
  ContainerMenu,
  ContentListMenu,
  ContentListMenuList,
} from './styles'

import logoBoolWise from '@/assets/Logo.png'
import Image from 'next/image'
// import { Avatar } from '../Avatar'
// import AvatarUser from '@/assets/avatarUser.jpg'

export function MenuSide() {
  return (
    <ContainerMenu>
      <Image src={logoBoolWise} quality={100} height={32} alt="" />
      <ContentListMenu>
        <ContentListMenuList $selectmenu={true}>
          <Link href="#">
            <ChartLineUp size={24} />
            inicio
          </Link>
        </ContentListMenuList>
        <ContentListMenuList $selectmenu={false}>
          <Link href="#">
            <Binoculars size={24} />
            Explorar
          </Link>
        </ContentListMenuList>
        <ContentListMenuList $selectmenu={false}>
          <Link href="#">
            {' '}
            <User size={24} />
            Perfil
          </Link>
        </ContentListMenuList>
      </ContentListMenu>
      <ButtonLogin $color="green">
        Fazer login <SignIn size={20} />
      </ButtonLogin>
      {/* <ButtonLogin $color="red">
        <Avatar imagesrc={AvatarUser} />
        Fazer login <SignOut size={20} />
      </ButtonLogin> */}
    </ContainerMenu>
  )
}
