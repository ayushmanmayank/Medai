"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell } from 'lucide-react'
import { motion } from 'framer-motion'
import type { Route } from 'next'

const links: Array<{ href: Route; label: string }> = [
  { href: '/' as Route, label: 'Dashboard' },
  { href: '/logs' as Route, label: 'Blockchain Logs' },
  { href: '/forecast' as Route, label: 'Forecast' },
  { href: '/settings' as Route, label: 'Settings' }
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-2xl shadow-lg border border-neutral-700/50"
      >
        <ul className="flex items-center gap-1 px-3 py-2">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-xl text-sm transition-colors duration-200 hover:text-emerald-300 ${
                    active ? 'text-emerald-400 bg-neutral-800' : 'text-neutral-200'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </motion.nav>

      <button
        className="fixed top-4 right-4 z-50 btn-gradient px-3 py-2 rounded-xl flex items-center gap-2"
        aria-label="Alerts"
      >
        <Bell size={18} />
        <span className="text-xs bg-red-500 rounded-full px-2 py-0.5">3</span>
      </button>
    </>
  )
}

