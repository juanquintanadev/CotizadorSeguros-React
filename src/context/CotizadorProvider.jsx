/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { descuentoYear, incrementoMarca, incrementoPlan, formatearDinero } from "../helpers";
// mandamos a llamar a la funcion que acabamos de importar
// con esto ya tenemos un context creado
// Recomendacion que el provider y el context tengan el mismo nombre al inicio
const CotizadorContext = createContext();

// luego vamos a definir un provider donde vamos a definir los states effects funciones etc, es de donde vienen los datos o la fuente de los datos
// es una funcion normal, que retorna el context, el children actua como lo que sea que le pasemos al componente
const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: '',
    })

    const [error, setError] = useState('')

    const [total, setTotal] = useState(0)

    const [cargando, setCargando] = useState(false)
    
    const handleChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
    }

    const cotizarSeguro = () => {

        // vamos a utilizar helpers para hacer los calculos

        // una base
        let resultado = 2000
        // restar el 3% por año
        resultado -= resultado * (descuentoYear(datos.year) / 100)
        // por marca 15 30 45 % mas
        resultado *= incrementoMarca(datos.marca)
        // por plan: basico 15, intermedio 30, completo 45%
        resultado *= incrementoPlan(datos.plan).toFixed(2)

        // vamos a formatear el dinero
        const totalCotizado = formatearDinero(resultado)

        setCargando(true)

        setTimeout(() => {
            setTotal(totalCotizado)
            setCargando(false)
        }, 3000);
        
    }

    return (
        <CotizadorContext.Provider
            value={{
                handleChangeDatos,
                datos,
                error,
                setError,
                cotizarSeguro, 
                total,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext