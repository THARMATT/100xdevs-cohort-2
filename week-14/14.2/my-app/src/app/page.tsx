import Image from "next/image";
import axios from 'axios';
import Link from "next/link";
async function getUserDetails(){
  const response= await axios.get("http://localhost:3000/api/user")
  return response.data
}
export default async function Home()
 {
  const userData = await getUserDetails();
  return (
<div className="flex min-h-screen m-12 items-center  justify-around">
<div className="border rounded bg-slate-50 p-4 ">{userData.email}</div>
     <div className="border mt-2 rounded bg-slate-50 p-4 "> {userData.name}</div>
     <Link href="/signup" className="border mt-2 rounded bg-slate-50 p-4 ">Sign up </Link>
</div>
  );
}
