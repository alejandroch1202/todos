import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth, { AuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '@/lib/db'

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,

  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? '',
      clientSecret: process.env.GITHUB_SECRET ?? ''
    })
    // ...add more providers here
  ],

  session: {
    strategy: 'jwt'
  },

  callbacks: {
    async signIn({ user, account, profile, credentials }) {
      console.log({ user })
      return true
    },

    async jwt({ token, user, account, profile }) {
      console.log({ token })
      return token
    },

    async session({ session, token, user }) {
      console.log({ session })
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
