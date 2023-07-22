import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between">
        <h1 className="text-3xl">
            <Link href="/">
                WikiRocket!
            </Link>
        </h1>
    </nav>
  )
}
