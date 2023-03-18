const ContatoComponents = (): JSX.Element => {
  return (
<>
  <main className="flex justify-center items-center h-full bg-zinc-800 mt-80">
   <section className="border-solid border-2 border-violet-900 p-2 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl font-mono font-bold pb-1 text-white"> CONTATO </h1>
     <li className="flex flex-col justify-center items-center">
      <span className="flex text-white pb-2 font-mono"> Email :
       <span className="text-violet-200 text-md pl-2 font-mono">dev-xpl@hotmail.com
       </span>
      </span>
      <span className="flex text-white pb-2 font-mono"> Telefone :
       <span className="text-violet-200 text-md pl-2 font-mono">(19) 98772-1696
       </span>
      </span>
      <span className="flex text-white pb-2 font-mono"> Discord :
       <span className="text-violet-200 text-md pl-2 font-mono">xpl#2365
       </span>
      </span>
    </li>
   </section>
  </main>




</>
  )
}
export default ContatoComponents
