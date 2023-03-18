import { Header } from "./header";
import { SocialLinksList } from "./SocialLinksList";

const Main = (): JSX.Element => {
  return (
<>
  <Header
    classlogo="/src/assets/logo.jpg"
    name="Afonso henrique"
    desenvolvedor="Desenvolvedor - Web"
    />
  <main className="
    drop-shadow-md
    bg-zinc-800
    w-screen
    flex
    items-center
    justify-center
    h-full bg-gradient-to-r
    from-zinc-800
    via-zinc-700
    to-zinc-800
    ">
    <SocialLinksList
    instagramLink="https://www.instagram.com/henriquebachelli/"
    linkedinLink="https://www.linkedin.com/in/afonso-henrique-0b6494160/"
    githubLink="https://github.com/devxpl"
    whatsappLink="https://wa.me/19987721696"
    />
  </main>
</>
 );
};

export default Main;
