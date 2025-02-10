"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu } from "@/presentation/add-department/components/menu"
import axios from "axios"

export default function Home() {
  const [departments, setDepartments] = useState([])
  const [menu, setMenu] = useState([])
  const [id, setId] = useState("")
  const [menuId, setMenuId] = useState("")

  const [showInput, setShowInput] = useState(false)
  const [newMenu, setNewMenu] = useState("")

  const toggleInput = () => {
    setShowInput(!showInput)
  }

  const getDepartments = async () => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.get(`${url}/api/departments`)
      setDepartments(res.data.data)
    } catch (error) {
      console.error("Error getting number of departments:", error)
    }
  }

  const getMenu = async (id: string) => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.get(`${url}/api/departments/${id}/?populate=*`)
      setMenu(res.data.data.menus)
      console.log(res.data.data.menus)
    } catch (error) {
      console.error("Error getting number of departments:", error)
    }
  }

  const createMenu = async (id: string) => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.post(`${url}/api/menus`, {
        data: { name: newMenu, department: id },
      })
      getMenu(id)
    } catch (error) {
      console.error("Error creating menu:", error)
    }
  }

  const handleSelectDepartment = (id: string) => {
    getMenu(id)
    setId(id)
  }

  useEffect(() => {
    getDepartments()
  }, [])

  return (
    <div className=" pt-[80px] px-[30px]">
      <div className=" grid grid-cols-4 gap-[10px]">
        <div className="flex flex-col col-span-1 gap-[10px]">
          <Link
            href="/add-department"
            className=" hover:text-pink-400 cursor-pointer"
          >
            สร้าง department +
          </Link>
          {departments.map((department: any) => (
            <div
              key={department.id}
              className=" hover:text-pink-400 cursor-pointer"
              onClick={() => handleSelectDepartment(department.documentId)}
            >
              {department.name}
            </div>
          ))}
        </div>
        <div className=" col-span-1">
          {menu?.map((menu: any) => (
            <Menu key={menu.id} name={menu.name} id={menu.id} />
          ))}

          {id && (
            <div>
              <button
                className="text-[16px] text-pink-400"
                onClick={toggleInput}
              >
                เพิ่มเมนู
              </button>
              {showInput && (
                <div>
                  <input
                    type="text"
                    className="w-full border border-slate-300"
                    value={newMenu}
                    onChange={(e) => setNewMenu(e.target.value)}
                  />
                  <button onClick={() => createMenu(id)}>Submit</button>
                </div>
              )}
            </div>
          )}
        </div>
        <div className=" col-span-2">
          {menuId && (
            <div className="flex flex-col gap-[10px]">
              <button className="text-[16px] text-pink-400 cursor-pointer bg-blue-400">เพิ่มเนื้อหา</button>
              <div className="flex">
                
              </div>
            </div>
          )}
          <div className="flex flex-col gap-[10px]">
          </div>
        </div>
      </div>
    </div>
  )
}
