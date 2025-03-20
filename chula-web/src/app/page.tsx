"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"
import { News } from "@/core/components/news"
import { Circulum } from "@/core/components/circulum"
import { QandA } from "@/core/components/QandA"
import { Location } from "@/core/components/location"
import { Personel } from "@/core/components/personel"

export default function Home() {
  interface Department {
    id: number
    name: string
  }

  interface Menu {
    id: number
    documentId: string
    name: string
    content: Content[]
  }

  interface Content {
    id: number
    name: string
    detail: string
    image: string
  }

  const [departments, setDepartments] = useState<Department[]>([])
  const [menu, setMenu] = useState<Menu[]>([])
  const [selectedDepartmentsDetail, setSelectedDepartmentsDetail] = useState<any>()
  const [selectedMenu, setSelectedMenu] = useState<Menu>()
  const [selectedDepartmentsName, setSelectedDepartmentsName] = useState<any>()
  const [menu2, setMenu2] = useState<any>()

  const getDepartments = async () => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.get(`${url}/api/departments`)
      setDepartments(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.error("Error getting number of departments:", error)
    }
  }

  // const getDepartmentDetail = async (id: string) => {
  //   const url = "http://localhost:1337"
  //   try {
  //     const res = await axios.get(`${url}/api/departments/${id}/?populate[menu][populate][submenu][populate]=image`)
  //     setSelectedDepartmentsDetail(res.data.data)
  //     console.log(res.data.data)
  //     setMenu2(res.data.data.menu)
  //     console.log(res.data.data.menu)
  //   } catch (error) {
  //     console.error("Error getting number of departments:", error)
  //   }

  // }

  const getMenu = async (id: string) => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.get(`${url}/api/departments/${id}/?populate=*`)
      setMenu(res.data.data.menus)
    } catch (error) {
      console.error("Error getting number of departments:", error)
    }
  }

  const getMenuContent = async (id: string) => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.get(`${url}/api/menus/${id}?populate[content][populate]=image&populate[content][populate]=QandA`)
      setSelectedMenu(res.data.data)
      console.log(res.data.data)
    } catch (error) {
      console.error("Error getting number of departments:", error)
    }
  }

  const handleSelectDepartment = (id: string, name: string) => {
    // getDepartmentDetail(id)
    getMenu(id)
    setSelectedDepartmentsName(name)
  }

  const handleSelectMenu = (id: string) => {
    getMenuContent(id)
  }

  const handleSetSubmenu = (submenu: any) => {
    setSelectedMenu(submenu)
    console.log(submenu)
  }

  useEffect(() => {
    getDepartments()
  }, [])

  return (
    <div className=" pt-[120px] px-[70px]">
      <div className="flex col-span-1 gap-[10px] w-full">
        {departments.map((department: any) => (
          <div
            key={department.id}
            className=" hover:text-pink-400 cursor-pointer"
            onClick={() =>
              handleSelectDepartment(department.documentId, department.name)
            }
          >
            {department.name}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 w-full gap-[30px]">
        <div className="col-span-1 w-full">
          {selectedDepartmentsName && (
            <div className="pb-[20px]">
              <p className="text-[30px]">{selectedDepartmentsName}</p>
              <div className="bg-[#ff9a68] h-1 w-[30%]"></div>
            </div>
          )}
          {
            menu2?.map((menu: any) => (
                <div
                  key={menu.id}
                  className={`${
                    selectedMenu?.documentId === menu.documentId
                      ? "bg-pink-400"
                      : ""
                  } w-full bg-gray-200 gap-[10px] flex flex-col p-[10px] `}
                >
                  <div onClick={() => handleSetSubmenu(menu.submenu)}>
                    <p className="text-[16px]">{menu.name}</p>
                  </div>
                </div>
            ))
          }
          {menu?.map((menu: Menu) => (
            <div
              key={menu.id}
              className={`${
                selectedMenu?.documentId === menu.documentId
                  ? "bg-pink-400"
                  : ""
              } w-full bg-gray-200 gap-[10px] flex flex-col p-[10px] `}
            >
              <div onClick={() => handleSelectMenu(menu.documentId)}>
                <p className="text-[16px]">{menu.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-3 w-full">
          {selectedMenu?.name === "หน้าหลัก"  && (
            <News selectedMenu={selectedMenu} />
          )}
          {selectedMenu?.name === "หลักสูตรที่เปิดสอน" && (
            <Circulum selectedMenu={selectedMenu} />
          )}
          {selectedMenu?.name === "Q&A สมัครเข้าศึกษา" && (
            <QandA selectedMenu={selectedMenu} />
          )}
          {selectedMenu?.name === "ตำแหน่ง" && (
            <Location selectedMenu={selectedMenu} />
          )}
          {selectedMenu?.name === "บุคลากร" && <Personel selectedMenu={selectedMenu} />}
          {/* {selectedMenu && <News selectedMenu={selectedMenu} />} */}
        </div>
      </div>
    </div>
  )
}
