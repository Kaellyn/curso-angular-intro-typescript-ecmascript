/*
    ===== Código de TypeScript =====
*/


function sumar(a: number, b:number): number {
    return a + b;
}

//funcion flecha
const sumarFlecha = (a:number, b:number):number => {
    return a + b;
}

//primeros los olbigatorios, luego los opcionales y finalmente los que tienen un valor por defecto
//obligatorios => opcionales => por defecto
function multiplicar( numero: number, otroNumero?: number, base:number = 2 ): number {
    return numero * base;
}


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar( personaje: PersonajeLOR, curarX:number ): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv );
    }
}

curar( nuevoPersonaje, 20 );

nuevoPersonaje.mostrarHp();


