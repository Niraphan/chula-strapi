"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"

export const Menu = ({ name, id }: { name: string; id: number }) => {
  const [showInput, setShowInput] = useState(false)
  const [newMenu, setNewMenu] = useState("")

  const toggleInput = () => {
    setShowInput(!showInput)
  }

  const createMenu = async () => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.post(`${url}/api/menus`, {
        data: { name: newMenu, department: id },
      })
      console.log(res.data)
    } catch (error) {
      console.error("Error creating menu:", error)
    }
  }

  return (
    <div>
      <p className="text-[16px]">{name}</p>
    </div>
  )
}
