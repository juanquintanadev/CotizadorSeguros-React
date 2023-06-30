export const MARCAS = [
    {id: 1, nombre: 'Nissan'},
    {id: 2, nombre: 'Toyota'},
    {id: 3, nombre: 'Suzuki'},
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from(new Array(20), (value, index) => YEARMAX - index)

export const PLANES = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Intermedio'},
    {id: 3, nombre: 'Completo'},
];
