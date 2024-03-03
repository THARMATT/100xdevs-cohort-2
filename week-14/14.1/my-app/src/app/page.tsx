import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen   flex-row justify-around  mt-2 p-4">
   <Link href="/auth/signup">
    <button className="border-spacing-2 p-4 bg-slate-50 rounded-md text-black">Signup</button>
   </Link>
   <Link href="/auth/signin">
   <button className="border-spacing-2 p-4 bg-slate-50 rounded-md text-black">Signin</button>
   </Link>
    </div>
  );
}
