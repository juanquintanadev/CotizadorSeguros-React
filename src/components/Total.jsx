/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useRef, useMemo } from "react"
import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES } from "../constatnts"

function Total() {

    const {total, datos} = useCotizador()
    const {marca, plan, year} = datos


    // hook de react donde nos permite evitar el re render de nuestra app de un state en especial, donde lo pasamos como dependencia y a su vez hacemos un arraydestructuring para extraer ese valor del hook
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [total] )


    // useMemo es lo mismo que useCallback nada mas que devuelve un valor y no un callback como el otro
    const [nombrePlan] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [total])

    // useRef es como una “caja” que puedes mantener en una variable mutable en su propiedad .current.
    const yearRef = useRef(year)



    if(total === 0) return null

    return (
        <div className="bg-gray-100 p-5 shadow-md text-center md:flex-col gap-4">
            <h2 className="text-gray-600 font-black text-3xl">El total a pagar por el seguro: </h2>
            <p>La marca del automovil: <span className="text-2xl">{nombreMarca.nombre}</span></p>
            <p>El plan escogido es: <span className="text-2xl">{nombrePlan.nombre}</span></p>
            <p>El año del vehiculo es: <span className="text-2xl">{yearRef.current}</span></p>
            <p>Y el total a pagar es: {total}</p>
        </div>
    )
}

export default Total