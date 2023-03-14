interface LinkProps {
  label: string;
  href: string;
}

const Link = (props: LinkProps): JSX.Element => {
  return (
    <a className=" xsm:mx-2 sm:mx-3 sm:pl-1 lg:mx-10 hover:bg-violet-900 hover:bg-center rounded-md text-2xl font-mono " href={props.href}>
      {props.label}
    </a>
  )
}

export default Link
