import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { parseCookies, destroyCookie } from 'nookies'
import { prisma } from "../prisma";
import { Adapter } from "next-auth/adapters";


export default function PrismaAdapter(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): Adapter {
  return {
    async createUser(user) {
      const { '@bookWise:userId': userIdOnCookies } = parseCookies({ req })

      if (!userIdOnCookies) {
        throw new Error('User ID not found on cookies.')
      }

      const prismaUser = await prisma.user.update({
        where: {
          id: userIdOnCookies
        },

        data: {
          name: user.name,
          avatar_url: user.avatar_url
        }
      })

      destroyCookie({res}, '@bookWise:userId',  { path: '/' } )

      return{
        id: prismaUser.id,
        name: prismaUser.name,
        avatar_url: prismaUser.avatar_url
      }

    }


  }
} 
