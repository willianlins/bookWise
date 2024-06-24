import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'


export function authOptions(req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res']): NextAuthOptions {

  return {
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
    ],

    callbacks: {
      async signIn({ user}) {
        return `/${user.name}`
      },
    }
  }

}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  return await NextAuth(req, res, authOptions(req, res))
}


