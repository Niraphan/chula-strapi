"use client"
import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export const QandA = ({ selectedMenu }: any) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="pt-[20px]">
      <p className="text-[30px] pb-[20px]">{selectedMenu.content?.[0]?.name}</p>
      {selectedMenu.content?.[0]?.QandA.map((QandA: any, index: number) => (
        <motion.div
          key={QandA.id}
          className={`flex flex-col rounded-md mb-4 ${openIndex === index ? 'bg-[#ff9a68]' : 'bg-[#ff9a68]/80'}`}
          onClick={() => toggleDropdown(index)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center py-[10px] px-[20px] cursor-pointer">
            <p className="text-[20px] text-white">Q: {QandA?.Question}</p>
            <span className="ml-2 text-white">{openIndex === index ? "-" : "+"}</span>
          </div>
          {openIndex === index && (
            <motion.div
              className="pt-[10px] pl-[20px] pb-[20px] bg-gray-300 rounded-b-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {QandA?.link ? (
                <Link href={QandA?.link} className="text-[16px] underline">
                  <p className="text-[16px]">A: {QandA?.Answer}</p>
                </Link>
              ) : (
                <p className="text-[16px]">A: {QandA?.Answer}</p>
              )}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
