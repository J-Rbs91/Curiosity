"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, LineChart } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Aujourd'hui", icon: BookOpen },
  { href: "/explore", label: "Explorer", icon: Compass },
  { href: "/progress", label: "Progression", icon: LineChart },
] as const;

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function BottomNav() {
  const pathname = usePathname();
  const activeIndex = ITEMS.findIndex((item) => isActive(pathname, item.href));

  return (
    <nav
      aria-label="Navigation principale"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative mx-auto max-w-md">
        {/*
         * Le repère de position est porté par une barre fine qui se déplace,
         * pas par un fond coloré : la sobriété se joue sur le traitement, pas
         * sur la présence. Il double la couleur et la graisse de l'entrée
         * active — le mouvement n'est jamais le seul porteur de l'information.
         */}
        <span
          aria-hidden
          className="absolute top-0 h-0.5 rounded-full bg-accent transition-transform motion-ui"
          style={{
            width: `${100 / ITEMS.length}%`,
            transform: `translateX(${Math.max(activeIndex, 0) * 100}%)`,
            opacity: activeIndex < 0 ? 0 : 1,
          }}
        />
        <ul className="flex items-stretch justify-around">
          {ITEMS.map(({ href, label, icon: Icon }, index) => {
            const active = index === activeIndex;
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className="press flex flex-col items-center gap-1 py-2.5 text-xs"
                >
                  <Icon
                    size={22}
                    strokeWidth={active ? 2.25 : 1.75}
                    className={`transition-colors motion-ui ${
                      active ? "text-accent" : "text-ink-faint"
                    }`}
                  />
                  <span
                    className={`transition-colors motion-ui ${
                      active ? "font-medium text-accent" : "text-ink-faint"
                    }`}
                  >
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
