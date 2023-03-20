interface TitleProps {
  apresentacao:string;
}
interface ListProps {
  nome:string;
  cidade:string;
  idade:number;
}
interface SubTittleProps {
  biografia:string;
}
interface ParagrapheProps {
  text:string;
}

export const Tittle = (props: TitleProps):JSX.Element => {
  return (
    <h1 className="text-3xl font-mono font-bold pb-1 text-white">{props.apresentacao}</h1>
  )
}

export const ListaSobre: React.FC<ListProps> = ({nome, cidade, idade}):JSX.Element =>{
  return (
    <ul className="flex flex-col justify-center items-center text-violet-900 text-xl">
    <li><span className="flex text-white font-mono">Nome:</span>{nome} </li>
    <li><span className="flex text-white font-mono">Cidade:</span> {cidade}</li>
    <li><span className="flex text-white pr-2 font-mono">Idade:</span> {idade}</li>
  </ul>
  )
}

export const Subtitle = (props: SubTittleProps):JSX.Element => {
  return (
    <h2 className="text-white font-mono text-3xl pb-1">{props.biografia}</h2>
  )

}

export const Paragraphe = (props: ParagrapheProps):JSX.Element => {
   return(
      <p className="text-white font-mono tex-sm">{props.text}</p>
   )
}
