import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">NEOCLARITY</span>
            <span className="text-muted-foreground">report</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Pages
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Log in
          </Link>
          <Button>Get your Report now →</Button>
        </div>
      </div>
    </header>
  )
}

