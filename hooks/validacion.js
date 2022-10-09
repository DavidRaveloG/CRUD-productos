import React, {useState,useEffect} from 'react'

export default function Validacion(stateInicial, validar, fn) {
    const[valores,setvalores]= useState(stateInicial);
    const[errores,setErrores]= useState({})
    const[sumbit,setSumbit] = useState(false);
    useEffect(()=>{
        if(sumbit){
            const noErrores= Object.keys(errores).length === 0;
            if(noErrores){
                fn();
            }
            setSumbit(false);
        }
    },[])
    const handleChange = e =>{
        setvalores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    const handleSumbit = e =>{
        e.preventDefault();
        const erroresValidacion= validar(valores);
        setErrores(erroresValidacion);
        setSumbit(true);
    }
   
    return (
        valores,
        errores,
        sumbit,
        handleSumbit,
        handleChange
    )
}
