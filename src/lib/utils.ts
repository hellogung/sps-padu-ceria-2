import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { genSalt, hash } from "bcrypt-ts"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function Hasher(text: string): Promise<string> {
  const salt = await genSalt(10)
  return await hash(text, salt)
}