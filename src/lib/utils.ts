import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { genSalt, hash } from "bcrypt-ts"
import { auth } from "./auth"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function Hasher(text: string): Promise<string> {
  const salt = await genSalt(10)
  return await hash(text, salt)
}

export async function UserAuth() {
  const session = await auth();

  if (!session?.user) return null;

  const user = {
    name: session?.user.name,
    email: session?.user.email,
    avatar: session?.user.image,
  }

  return user

}