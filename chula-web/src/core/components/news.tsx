"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export const News = ({ selectedMenu }: any) => {

  return (
    <div className="flex flex-col gap-[20px]  pt-[20px]">
      <p className=" text-[30px]">ข่าวสาร</p>
      {selectedMenu.content?.map((content: any) => (
        <div key={content.id} className="flex gap-[20px] h-[100px]">
          <Image
            src={`http://localhost:1337` + content?.image?.url}
            width={100}
            height={100}
            alt="news.image"
          />
          <div className="flex flex-col">
            <p className="text-[20px]">{content?.name}</p>
            <p className="text-[16px]">{content?.detail}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
