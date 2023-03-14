import { Section } from "./section";
interface MainProps {

};

const Main = (props: MainProps): JSX.Element => {

  return (
    <main className= 'bg-zinc-800 w-screen flex items-center justify-center h-full'>
      <Section
      classlogo="/src/assets/logo.jpg"
      name="Afonso henrique"
      desenvolvedor="Desenvolvedor - Web"
      />
    </main>
  );
};

export default Main;
