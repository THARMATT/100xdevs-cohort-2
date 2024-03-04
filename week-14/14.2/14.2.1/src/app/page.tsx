'use client'
import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const userdata=await getUserDetails()
  return (
   <div className="flex flex-col justify-center ">
yeahh...
   </div>
  );
}
async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}