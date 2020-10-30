let enviar = document.querySelector('#enviar');


//inicia todo o procedimento
function start () {
    //o comando abaixo captura o evento de click sobre o botão enviar
    enviar.addEventListener('click', checarEmail);
}

//coleta os dados do input e executa o comando apropriado para cada situação
function checarEmail () {

    let email= document.querySelector('#email').value;
    
    if (email == "") {
        alert('Por favor, informe o seu EMAIL.');
        esvaziar();
        return false;
    } 
        //realiza um verificação básica de email
    if(email == "" || email.indexOf('@') == -1 || email[0] == '@' || email.indexOf(' ') !== -1 
                   || email.indexOf('.') == -1 || email[0] == '.'  ) {
       alert( "E-MAIL inválido!" );
       esvaziar();
       return false;
       
	} else {
        alert( `O email: ${email} foi enviado.` );
        esvaziar();
        mensagem(email);
    }
}

//esvazia o imput
function esvaziar() {
    document.querySelector('#email').value = "";
}
  
//insere na pàgina uma mensagem de Bem vido seguia do email
function mensagem (event) {
      let mensagem = document.querySelector("#texto");
      mensagem.innerHTML = `<h1> Bem vindo  ${event} </h1>`;
}


//Inicia todo o procedimento
start();




function armazenaDados(nome, sobrenome, email, senha) {

    const teste = {nome: nome, sobrenome: sobrenome, email: email, senha: senha}
    
   dados.push(teste);
}
