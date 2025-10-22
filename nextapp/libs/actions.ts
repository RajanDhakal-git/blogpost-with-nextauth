"use server"

import { auth, signOut } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "./prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export const loginData = async () => {

}

export const registerData = async () => {

}

export const logout = async () => {
    await signOut({redirect:false})
    redirect("/api/auth/signin")
}

export const getPostDetails = async (formData: FormData) => {
    const title = formData.get("title") as string
    const details = formData.get("description") as string
    const session = await auth()
    const res = await prisma.post.create({
        data: {
            userID: session?.user?.id as string,
            title: title as string,
            details: details as string,
            name: session?.user.name as string,
            email: session?.user.email as string,
            image: session?.user.image as string
        },
        
    })
    redirect("/")


}