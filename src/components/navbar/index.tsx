import Link from './components-interno/link'

const Navbar = (): JSX.Element => {
  return (
      <nav className="p-5">
        <ul className="">
          <li className='text-white font-mono flex items-center justify-center pl-5 xsm:pl-4 sm:pl-5'>
            <Link href="/" label="Iníco" />
            <Link href="/contato" label="Contato" />
            <Link href="/sobre" label="Sobre" />
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
