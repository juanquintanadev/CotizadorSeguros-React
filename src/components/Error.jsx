import useCotizador from "../hooks/useCotizador"

function Error() {

    const {error} = useCotizador()

    return (
        <div>
            <p className="bg-red-500 border-blue-300 text-center font-bold uppercase py-2 text-white">{error}</p>
        </div>
    )
}

export default Error