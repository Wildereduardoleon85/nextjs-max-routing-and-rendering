'use client'

import { classNames } from '@/lib'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = LinkProps & {
  className?: string
  href: string
  children: React.ReactNode
}

export function NavLink({
  href,
  className = '',
  children,
  ...props
}: Readonly<NavLinkProps>) {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={classNames([className, pathname.startsWith(href) && 'active'])}
      {...props}
    >
      {children}
    </Link>
  )
}
