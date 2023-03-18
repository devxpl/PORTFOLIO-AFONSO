import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
//* importa o objeto IconDefinition do módulo @fortawesome/fontawesome-svg-core. IconDefinition é uma interface que define as propriedades de um ícone.*//
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
//*Esta linha importa quatro ícones específicos (Github, Instagram, LinkedIn e WhatsApp) do módulo @fortawesome/free-brands-svg-icons. Este módulo contém ícones de marcas famosas e é gratuito para uso. *//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//*Esta linha importa o componente FontAwesomeIcon do módulo @fortawesome/react-fontawesome. FontAwesomeIcon é um componente React que renderiza um ícone FontAwesome.*//

interface SocialLink {
  link: string;
  icon: IconDefinition;
}
//*Este código define uma interface chamada SocialLink, que define a estrutura de objetos que têm duas propriedades *//

interface Props {
  githubLink: string;
  instagramLink: string;
  linkedinLink: string;
  whatsappLink: string;
}
//*Este código define uma interface chamada Props, que define a estrutura de objetos que têm quatro propriedades *//

export const SocialLinksList = (props: Props): JSX.Element =>  {
//*Este código pode exportar uma constante chamada SocialLinksList, que é uma função componente de React. A função recebe um objeto props como parâmetro e retorna um elemento JSX.
// A declaração export torna o componente SocialLinksList disponível para uso em outros arquivos do projeto que o importam.O props é do tipo Props, que é definido em algum outro lugar do código. Isso é comum em componentes React, onde as props podem ser usadas para passar dados de um componente pai para um componente filho.O JSX.Element é o tipo de dado retornado por um componente React. Ele representa um elemento que será renderizado na página. O componente SocialLinksList pode ter qualquer tipo de estrutura, dependendo de como foi implementado. *//
const socialLinks: SocialLink[] = [
  {
    link: props.githubLink,
    icon: faGithub,
  },
  {
    link: props.instagramLink,
    icon: faInstagram,
  },
  {
    link: props.linkedinLink,
    icon: faLinkedin,
  },
  {
    link: props.whatsappLink,
    icon: faWhatsapp,
  },
];

/* / As propriedades que contêm os links para os perfis sociais são passadas para o componente SocialLinksList como props. Essas props são usadas para preencher o array socialLinks com os links e ícones correspondentes para cada perfil social
Por exemplo, a propriedade githubLink é passada como uma prop para o componente SocialLinksList, e seu valor é usado para preencher o link no objeto correspondente do array socialLinks, enquanto a propriedade faGithub é usada para preencher o ícone correspondente. O mesmo é feito para as outras propriedades que contêm os links e ícones para os perfis sociais / */

const iconClasses = 'w-10 h-10';
/* A constante iconClasses é uma string que contém classes CSS para definir o tamanho dos ícones. */
return (
    /*Este código é uma função componente React que retorna um elemento JSX.*/
<>
  <ul className='flex space-x-10'>
        {socialLinks.map((link) => (
              /* O elemento retornado consiste em uma lista não ordenada <ul> que contém links para perfis sociais. Cada link é representado por um item de lista <li>.*/
              /* O conteúdo da lista é gerado dinamicamente usando o método map() do array socialLinks. */
              /* Para cada objeto do array, um elemento de lista é criado, com o link e o ícone correspondente para o perfil social. */
    <li key={link.icon.iconName}>
      <a href={link.link} target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon
              /* Dentro do elemento <li>, há um elemento de âncora <a> que usa o link do objeto SocialLink correspondente para o perfil social. O atributo target="_blank" faz com que o link seja aberto em uma nova aba ou janela, enquanto o atributo rel="noopener noreferrer" é adicionado por razões de segurança para evitar ataques de phishing. */
              /* Dentro do elemento de âncora, há um elemento <FontAwesomeIcon> que renderiza o ícone correspondente para o perfil social. O ícone é passado como uma propriedade icon do objeto SocialLink.*/
              /* O className do elemento <FontAwesomeIcon> é definido usando interpolação de string e depende do nome do ícone do FontAwesome. Isso permite que o ícone seja estilizado de forma diferente com base em seu nome, usando classes CSS pré-definidas. */
              /* O código inclui também algumas classes CSS para definir o espaçamento e o tamanho dos ícones em diferentes tamanhos de tela. As classes CSS usadas aqui são definidas em algum outro lugar do código.
               */
              icon={link.icon}
              /* Para cada ícone, uma verificação é realizada para ver se o iconName é igual a uma determinada string. Se for, uma classe CSS específica é adicionada à lista de classes CSS para esse ícone. Caso contrário, uma string vazia é adicionada.
              */
              className={`${iconClasses}
              ${link.icon.iconName === 'whatsapp' ? 'text-green-500' : ''}
              ${link.icon.iconName === 'linkedin' ? 'text-cyan-800' : ''}
              ${link.icon.iconName === 'instagram' ? 'text-pink-500' : ''}
              ${link.icon.iconName === 'github' ? 'text-zinc-500' : ''} sm:w-10 sm:h-10 lg:w-10 lg:h-10 sm: mt-3`} />
      </a>
    </li>
   ))}
  </ul>
 </>
  /* Por fim, o elemento JSX completo é encapsulado dentro de um fragmento <>...</> para que possa ser retornado como um único elemento.  */
 );
};
