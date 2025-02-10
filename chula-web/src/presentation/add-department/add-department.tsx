"use client"
import { useState } from "react"
import axios from "axios"

export const AddDepartment = () => {
  const [name, setName] = useState("")


  const createDepartment = async () => {
    const url = "http://localhost:1337"
    try {
      const res = await axios.post(
        `${url}/api/departments`,
        {
          data: { "name": name },
        }
      )
      console.log(res.data)
    } catch (error) {
      console.error("Error creating department:", error)
    }
  }
  

  return (
    <div className="px-[30px] pt-[80px] h-full">
      <div className="grid grid-cols-2 gap-[10px]">
        <div className="col-span-1">
          <label htmlFor="department-name">ชื่อแผนก</label>
          <input
            id="department-name"
            type="text"
            className="w-full border border-slate-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={createDepartment}
        >
          Add Department
        </button>
      </div>
    </div>
  )
}
