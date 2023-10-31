import LoginForms from "@/components/LoginForms"
import { getServerSession } from "next-auth"
import { Redirect } from "next/navigation"
import { authOptions } from "./api/auth/[...nextauth]/route"
const Page = async()=>{
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");

  return( 
    <div>
    <LoginForms/>
  </div>
)
}

export default Page