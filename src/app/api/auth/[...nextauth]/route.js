import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions ={
    providers:[
        CredentialsProvider({
            name:"credentials",
            Credentials:{},

            async authorize(credentials){
                const {name,password,kelas}= credentials
                try {
                    await connectMongoDB()
                    const user =await User.findOne({name})
                    if(!user){
                        return null
                    }
                    const passwordMatch = await bcrypt.compare(password, user.password)
                    if(!passwordMatch){
                        return null
                    }
                    return user
                } catch (error) {
                    console.log(error)
                }
                return null
            },
        })
    ],
    session: {
      strategy: "jwt",
      
    },
    callbacks: {
        // We can pass in additional information from the user document MongoDB returns
        async jwt({ token, user }) {
          if (user) {
            token.user = {
              _id: user._id,
              kelas: user.kelas,
              name: user.name,
              
            };
          }
          return token;
        },
        // If we want to access our extra user info from sessions we have to pass it the token here to get them in sync:
        session: async ({ session, token}) => {
          if (token) {
            session.user = token.user;
          }
          return session;
        },
      },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/",
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };