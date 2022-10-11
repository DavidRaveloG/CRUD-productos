import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/header'
import 'animate.css'
import factory from '../abstract_factory/Factories/ProductsFactory'
import CardCommon from '../abstract_factory/ConcreteProducts/CardCommon'
import CardGold from '../abstract_factory/ConcreteProducts/CardGold'
export default function Home() {
  const c = new factory();
  const card = new CardCommon();
  return (
    <div >
      <Header></Header>
      <Layout></Layout>
      <div class="animate__bounceIn">
        <h1>Bienvenido</h1>
      </div>
      <div><p>{card.balance}</p></div>
      
    </div>
  )
}
