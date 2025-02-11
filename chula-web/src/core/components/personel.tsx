"use client"
import React from "react"

export const Personel = ({ selectedMenu }: any) => {
  const content = selectedMenu.content?.[0];
  const image = content?.image;
  
  return (
    <div className="pt-[20px]">
      <p className="text-[30px]">{content?.name}</p>
      <div className="mt-4">
        {image?.url && (
          image.ext === ".pdf" ? (
            <div className="border border-gray-300 p-2 rounded-md">
              <p className="text-lg font-semibold">{image.name}</p>
              <iframe 
                src={"http://localhost:1337" + image.url} 
                width="100%" 
                height="500px"
                className="border border-gray-200 rounded-md"
              ></iframe>
              <a 
                href={"http://localhost:1337" + image.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-blue-500 mt-2 underline"
              >
                View Full PDF
              </a>
            </div>
          ) : (
            <img src={"http://localhost:1337" + image.url} alt={image.alternativeText || "Image"} className="max-w-full h-auto rounded-md" />
          )
        )}
      </div>
    </div>
  )
}
