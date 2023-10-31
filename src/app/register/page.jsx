import RegisterForms from "@/components/RegisterForms"
import { getServerSession } from "next-auth"
import { Redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

const page = async()=>{
    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");
    return(
        <div>
            <RegisterForms/>
        </div>
    )
}

export default page