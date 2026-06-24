import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Tasks",
}

const layout = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto my-5 h-screen">{children}</div>
}

export default layout
