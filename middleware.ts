import authConfig from "@/auth.config"
import NextAuth from "next-auth"

const { auth } = NextAuth(authConfig);

export default auth((req) => {

    const isLoggedIn = !!req.auth;
    console.log("ROUTE: ", req.nextUrl.pathname)
    console.log('IS LOGGED IN: ', isLoggedIn);
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}