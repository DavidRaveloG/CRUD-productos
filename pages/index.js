import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Header from '../components/header'
import 'animate.css'
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Layout></Layout>
      <div class="animate__bounceIn">
        <h1>Bienvenido</h1>
      </div>
    </div>
  )
}
