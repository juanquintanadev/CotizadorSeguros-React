
import useCotizador from "../hooks/useCotizador"
import Formulario from "./Formulario"
import Total from "./Total"
import Spinner from "./Spinner"


function AppSeguro() {
    const {cargando} = useCotizador()

    return (
        <>
            <header className="my-10">
                <h1 className="text-white font-black text-center text-4xl">Cotizador de seguros</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 shadow-md rounded-lg p-10 mx-auto">
                <Formulario/>
                {cargando ? (
                    <Spinner/>
                ) : (
                    <Total/>
                )}
            </main>
        </>
    )
}

export default AppSeguro