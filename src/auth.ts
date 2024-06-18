import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import { db } from './db';
import Github from 'next-auth/providers/github';

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
  throw new Error('Missing Github OAuth credentials');
}

export const {
  handlers: { GET, POST },
  auth,
  signOut,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    Github({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // nextauth bug fixing
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
});
