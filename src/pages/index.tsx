import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {

  const clientes =[
    new Cliente('Ana', 19, '1'),
    new Cliente('Caique', 12, '2'),
    new Cliente('João', 5, '3'),
    new Cliente('robson', 29, '4'),

  ]

  function clienteSelecionado(cliente: Cliente){
      console.log(cliente.nome)
  }
  function clienteExcluido(cliente: Cliente){
    console.log(cliente.nome)
}


  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-purple-500 via to-blue-600
      text-white
    `}>

       <Layout titulo='Cadastro Simples'>
        <div className="flex justify-end">
          <Botao cor="gray" className='mb-4'>Novo Cliente</Botao>
        </div>
          
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}/>

          <Formulario cliente={clientes[1]}></Formulario>
       </Layout>
    
    </div>
  )
}
