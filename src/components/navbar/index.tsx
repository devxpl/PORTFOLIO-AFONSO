import Link from './components-interno/link'

const Navbar = (): JSX.Element => {
  return (
      <nav className="w-screen h-full flex text-white font-mono flex-row-reverse xsm:pr-6 sm:pr-8">
        <ul>
          <li>
            <Link href="/" label="Iníco" />
            <Link href="/contato" label="Contato" />
            <Link href="/sobre" label="Sobre" />
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
