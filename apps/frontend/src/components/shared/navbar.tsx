import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full px-8 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
            <Image  src={"/nav-img.png"} alt='naviagation image' width={50} height={50}/>
        </div>

        <nav className="flex items-center gap-8 text-playfair-medium-22">
          <Link href="/" >
            Home
          </Link>
          <Link href="/about-us">
            About US
          </Link>
          <Link href="/menu">
            Menu
          </Link>
          <Link href="/gallery">
            Gallery
          </Link>
          <Link href="/contact-us">
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
