import { Link } from "lucide-react"

const Button = ({ children }) => {
  return (
    <button className="text-zinc-800 border-blue-900 border-[1px] bg-sky-50 right-0 bottom-0 transition-all ease-in-out duration-300 hover:bg-blue-900 hover:text-sky-50 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">
      {children}
    </button>
  )
}

export default Button