import Footer from "../footer";
import Navbar from "../navbar";

interface Layout {
  /*O componente Layout define um objeto interface para garantir que o parâmetro children passado para o componente seja do tipo React.ReactNode. O parâmetro children é um conjunto de elementos React filhos que serão renderizados dentro do componente Layout. */
  children: React.ReactNode;
   /* React.ReactNode é um tipo de dados no React que representa os possíveis tipos de filhos (children) que um componente pode receber. Esses tipos de filhos incluem elementos React, strings, números, arrays e objetos.
  O tipo React.ReactNode é usado principalmente para garantir que um componente possa receber filhos de tipos diferentes sem que haja erros no processo de renderização. Isso permite que o desenvolvedor possa passar qualquer tipo de conteúdo como filho para um componente, sem ter que se preocupar em verificar ou converter os dados para um tipo específico.
  Em resumo, React.ReactNode é um tipo de dados que permite a flexibilidade na definição de componentes React, pois permite que esses componentes possam receber filhos de qualquer tipo, desde que esses tipos sejam compatíveis com a API do React. */
};

const Layout = (props: Layout): JSX.Element => {
      /* Este trecho de código define um componente React chamado Layout, que é responsável por definir a estrutura da página HTML geral de um aplicativo. O componente Layout recebe um único parâmetro props que é um objeto contendo as propriedades do componente. */
  return (
      /* O componente Layout importa os componentes Footer e Navbar de seus respectivos arquivos para serem usados na página HTML. O componente Navbar é usado para exibir uma barra de navegação no topo da página, enquanto o componente Footer é usado para exibir o rodapé da página. */
  <body className="bg-zinc-800 min-w-min h-full">
    <Navbar />
     {props.children}
    <Footer />
  </body>
      /* O corpo da função do componente Layout retorna uma estrutura HTML que é composta pelos el ementos Navbar, props.children e Footer. O elemento props.children é uma propriedade especial do  React que representa todos os elementos filhos passados para o componente Layout. Isso permite que  o conteúdo da página seja definido em qualquer lugar em que o componente Layout seja usado. */
      );
    };
export default Layout;
      /* Por fim, o componente Layout é exportado usando o comando export. Isso permite que outros componentes usem o componente Layout em suas próprias definições. */
