import Link from "next/link"
import Image from "next/image"

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[100px] flex justify-between items-center pt-[30px] px-[70px] z-[50] bg-white">
      <div className="flex text-2xl font-bold gap-[10px]">
        <Link href="/" className="hover:text-pink-400 cursor-pointer">
          <Image
            src="/images/Chula_logo.png"
            alt="logo"
            width={250}
            height={50}
          />
        </Link>
      </div>
    </div>
  )
}