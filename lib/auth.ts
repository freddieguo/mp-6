import NextAuth from "next-auth";
import GitHubProvider from "@auth/core/providers/github";
import GoogleProvider from "@auth/core/providers/google";

export const { handlers, auth } = NextAuth({
    providers: [
        //GitHub
        GitHubProvider({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        }),
        //Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    secret: process.env.AUTH_SECRET || "",
});
