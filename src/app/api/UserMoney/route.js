// // pages/api/user/money.js
// import { getSession } from "next-auth/client";
// import { connectToDatabase } from "../../../util/mongodb";

// export default async (req, res) => {
//   const session = await getSession({ req });

//   if (session) {
//     const { db } = await connectToDatabase();

//     const moneyData = await db.collection("money").find({ user: session.user.id }).toArray();

//     res.status(200).json({ moneyData });
//   } else {
//     res.status(403).json({ error: "You must be signed in to view the protected content on this page." });
//   }
// };
