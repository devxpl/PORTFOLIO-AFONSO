const SobreComponents = (): JSX.Element => {

  return (
<>
    {/* PRINCIPAL POSICIONADO NO CENTRO DA TELA */}
     <main className="flex justify-center items-center h-full bg-zinc-800 sm:mt-0 md:mt-20
     ">
      {/* ESTILOS APLICADOS NA MAIN  */}
      <section className="border-solid border-2 border-violet-900 p-2 rounded-lg shadow-lg text-center">
       {/* Apresentação */}
        <h1 className="text-3xl font-mono font-bold pb-1 text-white">APRESENTAÇÃO</h1>
       {/* lista */}
    <li className="flex flex-col justify-center items-center">
       {/* Nome */}
       <span className="flex text-white pb-2 font-mono"> Nome :
       <span className="text-violet-200 text-md pl-2 font-mono">Afonso henrique
       </span>
      </span>
       {/* Cidade */}
       <span className="text-white flex pb-2 font-mono"> Cidade :
       <span className="text-violet-200 text-md pl-2">Paulinia - SP
       </span>
      </span>
       {/* Idade */}
       <span className="text-white flex font-mono pr-20"> Idade :
       <span className="text-violet-200 md pl-2 pr-6">26
       </span>
      </span>
    </li>
      <section>
             {/* Biografica */}
        <h2 className="text-white font-mono text-3xl pb-1">Biografia</h2>
             {/* Paragrafo  */}
          <p className="text-white font-mono tex-sm">
          Durante 8 anos,
          <br/>
          atuei no ramo de móveis desempenhando
          <br/>
          diversas funções.
          <br/>
          Sempre conectado à internet,percebi
          <br/>
          a oportunidade no marketing digital
          <br/>
          comecei a prestar serviços para
          <br/>
          empreendedores próximos.
          <br/>
          Com essas habilidades, consegui resultados
          <br/>
          e estudo para agregar mais valor às pessoas.
          <br/>
          Meu sonho agora é ser desenvolvedor full-stack.
          </p>
        </section>
      </section>
     </main>
       {/* Container Paragrafo final fixado no centro */}
    <section className="flex justify-center items-center pt-10 sm:pt-0 md:pt-10">
      <div className="">
        <p className="text-violet-900 font-mono tex-sm">
          "A única maneira de fazer um excelente trabalho é amar o que você faz.
          <br/>
          Se você ainda não encontrou, continue procurando.
          <br/>
          Não se acomode.
          <br/>
          Como em todos os assuntos do coração, você saberá quando encontrar."
          <br/>
          <span className="flex justify-center items-center">- Steve Jobs</span>
        </p>
      </div>
    </section>
  </>
  )
}
export default SobreComponents
