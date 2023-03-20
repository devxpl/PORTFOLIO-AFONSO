import Layout from "../components/layout/default"
import { Tittle, ListaSobre, Subtitle, Paragraphe } from "../components/components-sobre/sobreStyles"

const AboutPage = (): JSX.Element => {
  return (
<Layout>
  <main className="flex justify-center items-center bg-zinc-800 sm:mt-0 md:mt-20">
    <section className="border-solid border-2 border-violet-900 p-2 rounded-lg shadow-lg text-center">
         <Tittle
          apresentacao="APRESENTAÇÃO"/>
         <ListaSobre
          nome="Afonso"
          cidade="Paulinia-SP"
          idade={26}/>
      <section>
        <Subtitle biografia="BIOGRAFIA" />
         <Paragraphe text="Durante 8 anos,"/>
         <Paragraphe text="atuei no ramo de móveis desempenhando"/>
         <Paragraphe text="diversas funções."/>
         <Paragraphe text="Sempre conectado à internet,percebi"/>
         <Paragraphe text="a oportunidade no marketing digital"/>
         <Paragraphe text="comecei a prestar serviços para"/>
         <Paragraphe text="empreendedores próximos."/>
         <Paragraphe text="Com essas habilidades, consegui resultados"/>
         <Paragraphe text="e estudo para agregar mais valor às pessoas."/>
         <Paragraphe text="Meu sonho agora é ser desenvolvedor full-stack."/>
      </section>
    </section>
  </main>
{/* Container Paragrafo final fixado no centro */}
    <section className="flex justify-center items-center pt-10 sm:pt-0 md:pt-10">
      <div className="text-violet-900 font-mono tex-sm">
         <Paragraphe text="A única maneira de fazer um excelente trabalho é amar o que você faz."/>
         <Paragraphe text="Se você ainda não encontrou, continue procurando."/>
         <Paragraphe text="Não se acomode."/>
         <Paragraphe text="Como em todos os assuntos do coração, você saberá quando encontrar."/>
         <Paragraphe text="Durante 8 anos,"/>
      </div>
    </section>
  <span className="flex justify-center items-center text-violet-900">- Steve Jobs</span>
</Layout>
  )
}

export default AboutPage
