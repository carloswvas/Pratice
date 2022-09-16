function validaFormulario(){
  const tel = document.getElementById('tel')
  const email = document.getElementById('email')

  tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value));
  tel.addEventListener('change', (e) => mascaraTelefone(e.target.value));

  email.addEventListener('keypress', (e) => mascaraTelefone(e.target.value));
  email.addEventListener('change', (e) => mascaraTelefone(e.target.value));

  const mascaraTelefone = (valor) => {
      valor = valor.replace(/\D/g, "")
      valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
      valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
      tel.value = valor
  }

//   const mascaraEmail = (valor) => {
//     valor = valor.replace(/\D/g, "")
//     valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
//     valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
//     tel.value = valor
// }
}

function showMenu(){
  let menu = document.querySelector('.nav-list-reponsiva')
  if(menu.classList.contains('open')){
    menu.classList.remove('open')
  }else{
    menu.classList.add('open')
  }
}

validaFormulario();