/*Função que realiza a mudança para o modo claro*/
function lightMode() { 
  var element = document.body;
  var claro = document.getElementById("icone-claro");
  var escuro = document.getElementById("icone-escuro");
  var claroi = document.getElementById("icone-claro-inferior");
  var escuroi = document.getElementById("icone-escuro-inferior");

  element.classList.add("lightMode");
  claro.style.display="block";
  claroi.style.display="none";

  escuroi.style.display="block";
  escuro.style.display="none";
}

/*Função que realiza a mudança para o modo escuro*/
function darkMode(){
  var element = document.body;
  var claro = document.getElementById("icone-claro");
  var escuro = document.getElementById("icone-escuro");
  var claroi = document.getElementById("icone-claro-inferior");
  var escuroi = document.getElementById("icone-escuro-inferior");

  element.classList.remove("lightMode");
  claro.style.display="none";
  claroi.style.display="block";

  escuroi.style.display="none";
  escuro.style.display="block";
}

function settings(){
  var teste = document.getElementById("troca");
  teste.classList.toggle("ativo");
}