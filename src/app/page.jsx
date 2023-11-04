import LoginForms from "@/components/LoginForms"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route"
const Page = async()=>{
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashbord");

  return( 
    <div>
    <LoginForms/>
  </div>
)
}

export default Page