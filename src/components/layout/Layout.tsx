import { ReactNode } from "react"

export const CardLayout = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <ul className='flex flex-wrap gap-4 justify-center md:justify-start'>
      { children }
    </ul>
  )
}