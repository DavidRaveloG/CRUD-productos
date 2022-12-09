import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import styles from '../styles/Registro.module.css'
export default function Registro() {

const [newUser, setNewUser] = useState({
    nombre: "",
    apellido: "",
    password:"",
    email:"",
    genero:"",
    direccion:""
});
  const handleForm = (e)=>{
    setNewUser((prevfrom)=>({
        ...prevfrom,
        [e.target.name]: e.target.value
    }))
    console.log(newUser);
  }
  const handleD = async (e)=>{
    await axios.post('http://localhost/3000/db',
        newUser.nombre,
        newUser.apellido,
        newUser.password,
        newUser.email,
        newUser.genero,
        newUser.direccion
    );
  }

  return (
    <>
      <Header></Header>
      <div className={styles.Login_box}>
        <h2>Registro</h2>
        <form className={styles.Login} onSubmit={handleD}>
          <div className="nombre">
            <h3>Usuario</h3>
            <input id="Nombre" type="text" className="inpt" name="nombre" value={newUser.nombre} onChange={handleForm} placeholder="Usuario" required/>
          </div>
          <div className="apellido">
            <h3>Usuario</h3>
            <input id="apellido" type="text" className="inpt" name="apellido" value={newUser.apellido} onChange={handleForm} placeholder="Usuario" required/>
          </div>
          <div className="contraseña">
            <h3>Contraseña</h3>
            <input id="Contraseña" type="password" className="inpt" name="password" value={newUser.password} onChange={handleForm} placeholder="contraseña" required/>
          </div>
          <div className="email">
            <h3>Email</h3>
            <input id="Email" type="email" className="inpt"  name="email" value={newUser.email} onChange={handleForm} placeholder="email" required/>
          </div>
          <div className="direccion">
            <h3>Dirección</h3>
            <input id="Direccion" type="text" className="inpt" name="direccion" value={newUser.direccion} onChange={handleForm} placeholder="direccion " required/>
          </div>
          <div className="genero" name="genero">
            <h3>Genero</h3>
              <select name="genero" value={newUser.genero} onChange={handleForm} required>
                <option value="">----escoga----</option>
                <option value="no binario">no binario</option>
                <option value="masculino">masculino</option>
                <option value="femenino">femenino</option>
              </select>
          </div>
          
          <div className={styles.sumbit2}>
            <Link href="/">
              <button type="submit" className={styles.btn}>
                Registrarse
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}