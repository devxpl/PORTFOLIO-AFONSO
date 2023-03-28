import React from 'react';
import Layout from "../components/layout/default"
import { Tittle, ContactInfo } from "../components/components-contato/contatoStyles"

const ContatoPage: React.FC = (): JSX.Element => {
  return (
    <Layout>
     <main className="flex justify-center items-center h-full bg-zinc-800 mt-80">
      <section className="border-solid border-2 border-violet-900 p-2 rounded-lg shadow-lg text-center">
        <Tittle contato="CONTATO"/>
          <ContactInfo
            email="dev-xpl@hotmail.com"
            phone="(19) 98772-1696"
            discord="xpl#2365"/>
      </section>
     </main>
    </Layout>
  )
}

export default ContatoPage
