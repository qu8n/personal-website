import Link from 'next/link'
import clsx from 'clsx'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-sky-600 dark:text-zinc-200 dark:hover:text-sky-400"
      >
        <Icon className="h-6 w-6 fill-zinc-400 transition group-hover:fill-sky-600" />
        <span className="ml-2">{children}</span>
      </Link>
    </li>
  )
}
