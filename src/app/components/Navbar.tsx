
import Link from "next/link"


export default function Contact (){
    return(
      <div className="h-[70px] w-[1380px] bg-black text-white font-bold flex justify-center items-center gap-20  ">
     <Link href="/">Home</Link>
       <Link href="/about">About</Link>
       <Link href="/services">Services</Link>
       <Link href="/contact">Contact</Link>
       <Link href="/blog">Blog</Link>
       <Link href="/blog/job">Job</Link>
       </div>
    )
  }