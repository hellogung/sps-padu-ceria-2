import {object, string} from "zod"

export const RegisterSchema = object({
    name: string().min(1, "Name must be more than 1 character"),
    email: string().email("Invalid email"),
    password: string().min(8, "Password must be more then 8 character").max(32, "Password must be less then 32 character")
})