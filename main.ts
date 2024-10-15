//% color=#0fbc11 icon="\uf205"
//% block="LED Marquesine"
namespace ledMarquee {
    let matrizAnchura = 0;
    let matrizAltura = 0;

    //% block="Definir matriz LED con anchura %width y altura %height" 
    export function definirMatriz(width: number, height: number): void {
        matrizAnchura = width;
        matrizAltura = height;
        serial.writeLine(`SET_DIM ${width} ${height}`);
    }

    //% block="Dibujar en la matriz LED con asset %asset" 
    export function dibujarEnMatriz(asset: ScreenImage): void {
        let data = "";
        for (let y = 0; y < matrizAltura; y++) {
            for (let x = 0; x < matrizAnchura; x++) {
                const color = asset.getPixel(x, y);
                let colorHex = convertirAHex(color);
                data += `${colorHex} `;
            }
        }
        serial.writeLine(`DRAW ${data}`);
    }

    function convertirAHex(color: number): string {
        const hex = "0123456789abcdef";
        let resultado = "";
        resultado += hex[(color >> 4) & 0xF];
        resultado += hex[color & 0xF];
        return resultado;
    }


}