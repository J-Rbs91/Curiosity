"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, LineChart } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Aujourd'hui", icon: BookOpen },
  { href: "/explore", label: "Explorer", icon: Compass },
  { href: "/progress", label: "Progression", icon: LineChart },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="mx-auto flex max-w-md items-stretch justify-around">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href} className="flex-1">
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className="flex flex-col items-center gap-1 py-2.5 text-xs transition-colors"
              >
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2.25 : 1.75}
                  className={isActive ? "text-accent" : "text-ink-soft"}
                />
                <span className={isActive ? "font-medium text-accent" : "text-ink-soft"}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
