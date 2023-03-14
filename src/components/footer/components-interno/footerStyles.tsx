interface nomeDesenvolvedor {
  nomeDesenvolvedor: string;
}

const FooterStyle = (props: nomeDesenvolvedor): JSX.Element => {
  return (
    <footer className="bg-zinc-800 py-3 fixed bottom-0 w-full">
      <div className="container mx-auto px-4 flex justify-center">
        <p className="text-white">Desenvolvedor - {props.nomeDesenvolvedor}</p>
      </div>
    </footer>
  );
}

export default FooterStyle;
