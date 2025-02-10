"use client"
import React from "react"

export const Circulum = ({ selectedMenu }: any) => {

  const styledHtml = selectedMenu.content?.[0]?.html
    ? selectedMenu.content[0].html.replace(
        "<table>",
        `<table style="border-collapse: collapse; border: 1px solid black;">`
      )
    : "";

  return (
    <div className="pt-[20px]">
      <p>{selectedMenu.content?.[0]?.name}</p>
      <div dangerouslySetInnerHTML={{ __html: styledHtml }} />
    </div>
  );
};