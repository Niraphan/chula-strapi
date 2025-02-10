"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
export const Navbar = () => {


  return (
    <div className="fixed w-full h-14 flex justify-between items-center p-4 z-[300]">
      <div className="flex text-2xl font-bold gap-[10px]">
        <Link href="/" className="hover:text-pink-400 cursor-pointer">Chula University</Link>
      </div>
      <div className="flex items-center gap-[10px]"></div>
    </div>
  )
}
