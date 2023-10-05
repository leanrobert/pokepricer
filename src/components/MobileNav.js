import { ArrowRight, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const MobileNav = ({ isAuth }) => {
  const [isOpen, setOpen] = useState(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href) => {
    if (pathname === href) toggleOpen()
  }

  return (
    <div className="sm:hidden">
      <Menu
        className="relative z-50 h-5 w-5 text-zinc-800"
        onClick={toggleOpen}
      />

      {isOpen && (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full">
          <ul className="absolute bg-white border-b border-white shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {!isAuth ? (
              <>
                <li>
                  <Link
                    href={'/'}
                    onClick={() => closeOnCurrent('/sign-up')}
                    className="flex items-center w-full font-semibold text-blue-900"
                  >
                    Get started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-zinc-800" />
                <li>
                  <Link
                    href={'/'}
                    onClick={() => closeOnCurrent('/sign-in')}
                    className="flex items-center w-full font-semibold"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-zinc-800" />
                <li>
                  <Link
                    href={'/'}
                    onClick={() => closeOnCurrent('/pricing')}
                    className="flex items-center w-full font-semibold"
                  >
                    Pricing
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href='/'
                    onClick={() => closeOnCurrent('/dashboard')}
                    className="flex items-center w-full font-semibold"
                  >
                    Dashboard
                  </Link>
                  <li className="my-3 h-px w-full bg-zinc-800" />
                  <Link href='/' className="flex items-center w-full font-semibold">
                    Sign out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

export default MobileNav