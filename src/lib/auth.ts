import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import Github from "next-auth/providers/github"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [Github, Google],
    // callbacks: {
    //     authorized({
    //         auth,
    //         request: { nextUrl }
    //     }) {
    //         const isLoggedIn = !!auth?.user
    //         const protectedRoutes = ["/dashboard", "/users", "/products"]

    //         if (!isLoggedIn && protectedRoutes.includes(nextUrl.pathname)) {
    //             return Response.redirect(new URL("/login", nextUrl))
    //         }

    //         if (!isLoggedIn && protectedRoutes.includes("/login")) {
    //             return Response.redirect(new URL("/dashboard", nextUrl))
    //         }

    //         return true
    //     },

    //     jwt({ token, user }) {
    //         if (user) token.role = user.role
    //         return token
    //     },
    //     session({ session, token }) {
    //         session.user.id = token.sub
    //         session.user.role = token.role
    //         return session
    //     }
    // }
})