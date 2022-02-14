/*
 1 - Javascript é caseSensitive
 2 - Temos 3 jeitos de declarar variáveis

    var nome = 'thiago' //variável de escopo global.
    let nome = 'thiago' //variavel de escopo fechado.
    const nome = 'thiago' //escopo fechado e não deve ser alterada.

 3 - Document Selector(como ele reconhece meu HTML)

 por Tag: getElementByName(h1)
 por Id: getElementById('contato')
 por Nome: getElementByName('nome')
 por Classe: getElementByClassName('texto')
 por Selector: querySelector('')
 por Selector: querySelectorAll('')
*/

//Variáveis
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa')

let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"

function valorNome(){
    
    //console.log(nome.value)
    if (nome.value.length>=4){
        nome.style.background = 'yellow';
        TxtNome.innerHTML = 'Nome aceito!';
        nomeOk = true;
    } else {
        nome.style.background = 'white';
        txtNome.innerHTML = 'Nome inválido - Insira 4 caracteres no minimo';
    }

}

// regex de email    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        txtEmail.innerHTML = 'Email Aceito!'
    } else{
        txtEmail.innerHTML = 'Email Incorreto'
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto');
  
      contador.innerHTML = `${assunto.value.length} / 100`
  
  
    if (assunto.value.length >= 100) {
      txtAssunto.innerHTML =
        'Texto é muito grande, digite no máximo 100 caracteres ❌';
      txtAssunto.style.color = '#732626';
      txtAssunto.style.display = 'block';
    } else {
      txtAssunto.style.display = 'none';
      assuntoOk = true;
    }
  }

function enviar (){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!');
    } else {
        alert('Preencha o formulário');
    }
}

function count(){
    let contador = document.querySelector('#contador')
    contador.innerHTML = `${assunto.value.length} / 144`
}

function mapaZoom(){
    mapa.style.width = '40vw'
    mapa.style.height = '50vh'
    mapa.style.zIndex = '15'
}

function mapaNormal(){
    mapa.style.width = '40vw'
    mapa.style.height = '40vh'
}

function subirTela(){
    window.scrollTo(0,0)
}




