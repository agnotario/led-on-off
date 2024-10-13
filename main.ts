

//% color=#0fbc11 icon="\uf205"
//% block="LED Marquesine"
namespace ledMarquesine {

    //% block="Set GPIO %pin to %value"
    //% pin.min=0 pin.max=40
    export function setGpioPin(pin: number, value: number): void {
        setPin(pin, value);  // Llama a la función C++
    }

    // Shim para vincular TypeScript con la función C++
    //% shim=setPin
    function setPin(pin: number, value: number): void {
        // Este cuerpo vacío será sustituido por la implementación en C++
    }
}