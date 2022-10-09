import React, {useState} from 'react'
import Header from '../components/header'
import styles from '../styles/Login.module.css'
function Login() {
  const [user, setUser] = useState("asdasdsadsadsadsadsad");
  const [password,  setPassword] = useState("");
  /*const [cliente, setCliente] = useState({});
  const [clientes, setClientes] = useState([]);*/
  const handleD =(e)=>{
    e.preventDefault();
    console.log("Hola")
  }
  return (
    <>
      <Header></Header>
      <div className={styles.Login_box}>
       {/*<Image src="/icons8-login-67.png" className={styles.image} alt="logo"></Image>*/}
        <h2>Login</h2>
        <form className={styles.Login} onSubmit={handleD}>
          <div className="Usuario">
            <h3>Usuario </h3>
            <input id="Nombre" type="text" className="inp"  value={user} onChange={ (e) => setUser(e.target.value)} placeholder="Usuario"/>
          </div>
          <div className="contraseña">
            <h3>Contraseña</h3>
            <input id="Contraseña" type="password" className="inpt" value={password} onChange={ (e) => setPassword(e.target.value)} placeholder="contraseña"/>    
          </div>
          <div className={styles.sumbit}>
            <button type="submit" className={styles.btn}>Acceder</button>
            <button type="submit" className={styles.btn}>Registrarse</button>
          </div>
        </form>
          
      </div>
      
    </>
  )
}

export default Login