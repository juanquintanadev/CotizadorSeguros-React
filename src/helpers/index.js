function descuentoYear(year) {
    return (new Date().getFullYear() - year) * 3
}

function incrementoMarca(marca) {
    if(marca === "1") {
        return 1.15
    } else if(marca === "2") {
        return 1.30
    } else {
        return 1.45
    }
}

function incrementoPlan(plan) {
    let incremento

    switch (plan) {
        case '1':
            incremento = 1.15;
            break;
        case '2':
            incremento = 1.30;
            break;
        case '3':
            incremento = 1.45;
            break;
        default:
            break;
    }
    return incremento
}

function formatearDinero(cantidad) {
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}

export {
    descuentoYear,
    incrementoMarca,
    incrementoPlan,
    formatearDinero,
}