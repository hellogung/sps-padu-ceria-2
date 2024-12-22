"use server";
import { signIn as authSignIn, signOut as authSignOut } from "@/lib/auth";
import { Hasher } from "@/lib//utils";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

export async function signInAction(provider: "github" | "google", redirect?: string) {
    await authSignIn(provider, { redirectTo: redirect || "/panel/dashboard" });
}

export async function signOutAction(redirectTo = "/") {
    await authSignOut({ redirectTo });
}

export async function signUpCredentials(data: { name: string, email: string, password: string }) {
    try {
        const passwordHashed = await Hasher(data.password)
        const user = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHashed,
            },
        });

        if (!user) {
            throw new Error("Gagal register");
        }

        return user
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
            return error.message
        }
        return;
    }
}