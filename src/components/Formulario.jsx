import { Fragment } from "react";

import Error from "./Error";

import useCotizador from "../hooks/useCotizador";

import { MARCAS, YEARS, PLANES } from "../constatnts"

function Formulario() {

    const {handleChangeDatos, datos, setError, error, cotizarSeguro} = useCotizador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(datos).includes('')) {
            setError('Todos los campos son oblogatorios')
            setTimeout(() => {
                setError('')
            }, 3000);
            return
        }

        cotizarSeguro()
    }
    
    return (
        <>
            {error && (
                <Error/>
            )}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="mb-3 font-bold text-gray-400 uppercase" htmlFor="marce">Marca</label>
                    <select onChange={e => handleChangeDatos(e)} className="block w-full bg-white border border-gray-400 text-center" name="marca" >
                        <option value="">--Selecciona Marca--</option>
                        {MARCAS.map(marca => (
                            <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <label className="mb-3 font-bold text-gray-400 uppercase" htmlFor="marce">Año</label>
                    <select onChange={e => handleChangeDatos(e)} className="block w-full bg-white border border-gray-400 text-center" name="year" >
                        <option value="">--Selecciona Año--</option>
                        {YEARS.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="my-5">
                    <div className="my-5">
                        <div className="flex gap-3 items-center">
                            <label className="w-full mb-3 font-bold text-gray-400 uppercase" htmlFor="marce">Planes</label>
                            {PLANES.map(plan => (
                                <Fragment key={plan.id}>
                                    <label>{plan.nombre}</label>
                                    <input onChange={e => handleChangeDatos(e)} type="radio" name='plan' value={plan.id}/>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <input className="w-full text-white bg-indigo-500 hover:bg-indigo-700 cursor-pointer rounded-md py-2 uppercase font-bold transition-colors" type="submit" name="" id="" value='Cotizar Seguro'/>
            </form>
        </>
    )
}

export default Formulario