import Head from "next/head"
import { AddDepartment } from "@/presentation/add-department/add-department"

export default function Page() {
  return (
    <>
      <Head>
        <title>page - Your App Name</title>
        <meta name="description" content="Description of page page." />
        <meta name="keywords" content="page, keyword1, keyword2" />
        <meta name="author" content="Your Name or Company" />
      </Head>
      <AddDepartment />

    </>
  )
}
