const input_Box1 = document.querySelector('.inputBox') 
const input_Box2 = document.querySelector('.inputBox2') 
const btn_calcular = document.querySelector('.calcular').addEventListener('click', somar)
const show_in_screen = document.querySelector('.screen')
    

function somar() {

    numero1 = input_Box1.value
    numero2 = input_Box2.value

    let resultado

    numeroModificado1 = parseInt(numero1)
    numeroModificado2 = parseInt(numero2)
    resultado =  numeroModificado1 + numeroModificado2

    //console.log(`a soma entre ${numeroModificado1} e ${numeroModificado2} é ${resultado}`)
    show_in_screen.textContent = 'O resultado é: ' + resultado

}

   