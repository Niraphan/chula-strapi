"use client"
import React from "react"

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea")
  txt.innerHTML = html
  return txt.value
}

export const Location = ({ selectedMenu }: any) => {
  const renderIframe = (html: string) => {
    const decodedHtml = decodeHtml(html)
    return <div dangerouslySetInnerHTML={{ __html: decodedHtml }} />
  }

  return (
    <div className="pt-[20px]">
      <p className="text-[30px]">{selectedMenu.content?.[2]?.name}</p>
      {selectedMenu.content?.[0]?.html &&
        renderIframe(selectedMenu.content?.[0]?.html)}
    </div>
  )
}
