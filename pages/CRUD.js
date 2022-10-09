import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Header from "../components/header";
import styles from "../styles/CRUD.module.css";
import firebase, { db } from "../firebase/config";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import "animate.css";
export default function Home() {
  const [showModal, setShowModal] = useState(false); //abrir modal
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const hoy = Date.now();
  const fecha = new Date(hoy);
 
  const [productos, setProductos] = useState([]);
  const handleDescription = () => {
    switch (nombre) {
      case "Tarjeta de credito":
        descripcion =
          "Tarjeta de credito para su uso diario con firma de nuestra empresa";
        break;
      case "Paquete de acciones":
        descripcion =
          "Paquete de acciones para su uso diario con firma de nuestra empresa";
        break;
      case "Acciones directas":
        descripcion =
          "Acciones directas para su uso diario con firma de nuestra empresa";
        break;
    }
  };
  /*Subir a la base*/
  const handleBase = (e) => {
    e.preventDefault();
    handleDescription();
    //handleFecha()
    const saveproducts = addDoc(collection(db, "Productos"), {
      nombre,
      descripcion,
      fecha,
    });
  };
  /*Obtener productos*/
  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setProductos(docs);
  };
  const deleteProducts = async (id) => {
    if (window.confirm("¿Seguro desea eliminar el registro?")) {
      await deleteDoc(doc(db, "Productos", id));
    }
  };
  const fechaActual = async (fec) => {
    const Nfecha = new Date(fec);
    fec;
  };
  /*const modifyProducts = async (id) =>{
    if(window.confirm("¿Seguro desea eliminar el registro?")){
      await deleteDoc(doc(db, "Productos", id));
    }
      
  }*/
  useEffect(() => {
    getProducts();
  });
  return (
    <>
      <Header></Header>
      <Layout></Layout>
      <div>
        <div className={styles.contenedor}>
          <div class="animate__animated animate__fadeInLeft animate__slow">
            <div className={styles.buttons}>
              <h3>Sus productos</h3>
              <button className="btn" onClick={() => setShowModal(true)}>
                Agregar
              </button>
            </div>
          </div>

          <div class="animate__animated animate__fadeInUp animate__slow">
            <table className={styles.table}>
              <tr className={styles.row}>
                <td>Nombre</td>
                <td>Descripción</td>
                <td>Fecha</td>
                <td>Borrar</td>
                <td>Modificar</td>
              </tr>
              {productos.map((producto) => (
                <tr className={styles.create_row} key={producto.id}>
                  <td>{producto.nombre}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.fecha.toString()}</td>
                  <td>
                    <svg
                      onClick={() => deleteProducts(producto.id)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                      className={styles.trash}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                      className={styles.edit}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      {showModal ? (
        <div className={styles.modal}>
          <div className={styles.background} />
          <div className={styles.window}>
            <svg
              onClick={() => setShowModal(false)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
              className={styles.close}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            {/*<button  className={styles.close} onClick={()=>setShowModal(false)}></button>*/}
            <form className={styles.producto} onSubmit={handleBase}>
              <label>Escoga un producto: </label>
              <select defaultValue={"Tarjeta de credito"}>
                <option value="Tarjeta de credito">Tarjeta de credito</option>
                <option value="Paquete de acciones">Paquete de acciones</option>
                <option value="Acciones directas">Acciones directas</option>
              </select>
              <button
                type="submit"
                className="btn"
                onClick={(e) =>
                  setNombre(e.target.parentElement.children[1].value)
                }
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
