import React, {useState,useEffect} from 'react'
import Header from '../components/header'
import styles from '../styles/Login.module.css'
import Link from 'next/link'
export default function Login({log,setLog,id,setId}) {

const [LUser, setLUser] = useState({
    user: "",
    password:"",
});

const[users, setUsers] = useState([]);

const handleForm = (e)=>{
  setLUser((prevfrom)=>({
      ...prevfrom,
      [e.target.name]: e.target.value
  }))
  console.log(LUser);
}
  const handleD =(e)=>{
    e.preventDefault();
    let UspF = LUser.user+LUser.password;
    users.forEach((userB) => {
      let Usp = userB.name+userB.password;
      let id= userB.id;
      if(UspF===Usp){
        setLog(true);
        setId(id);
      }
    } 
    )
  }
  useEffect(() => {
    async function getEmployee(){
      const apiEndUrlPoint= 'http://localhost/3000/db2';
      const response = await fetch(apiEndUrlPoint);
      const res = await response.json();
      console.log(res.employee);
      setUsers(res.employee);  
    }
    getEmployee();
  },[]);
  return (
    <>
      <Header></Header>
      <div className={styles.Login_box}>
        <h2>Login</h2>
        <form className={styles.Login} onSubmit={handleD}>
          <div className="Usuario">
            <h3>Usuario</h3>
            <input id="Nombre" type="text" className="inp" name="user" value={LUser.user} onChange={handleForm} placeholder="Usuario" required/>
          </div>
          <div className="contraseña">
            <h3>Contraseña</h3>
            <input id="Contraseña" type="password" className="inpt"  name="password" value={LUser.password} onChange={handleForm} placeholder="contraseña" required/>    
          </div>
          <div className={styles.sumbit}>
            <button type="submit" className={styles.btn}>Acceder</button>
            <Link href="/Registro"><button type="submit" className={styles.btn}>Registrarse</button></Link>
          </div>
        </form>
          
      </div>
      
    </>
  )
}