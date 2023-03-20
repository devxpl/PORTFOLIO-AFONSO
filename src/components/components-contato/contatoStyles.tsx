interface H1Props {
  contato: string;
}
interface ContactInfoProps {
  email: string;
  phone: string;
  discord: string;
}

export const Tittle = (props: H1Props):JSX.Element => {
  return (
    <h1 className="text-3xl font-mono font-bold pb-1 text-white">{props.contato}</h1>
    )
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone, discord }) => {
  return (
    <ul className="flex flex-col gap-4 text-xl text-violet-900">
      <li><span className="font-mono text-white">EMAIL:</span> {email} </li>
      <li><span className="font-mono text-white">Phone:</span> {phone}</li>
      <li><span className="font-mono text-white">Discord:</span> {discord}</li>
    </ul>
  );
};
