"use server";
import { signIn as authSignIn, signOut as authSignOut } from "@/lib/auth";

export async function signInAction(provider: "github" | "google", redirect?: string) {
    await authSignIn(provider, { redirectTo: redirect || "/dashboard" });
}

export async function signOutAction(redirectTo = "/") {
    await authSignOut({ redirectTo });
}