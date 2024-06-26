import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { parseCookies, destroyCookie } from 'nookies'
import { prisma } from "../prisma";

export default function PrismaAdapter(
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
) {
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
          
        }
      })


    }


  }
} 
