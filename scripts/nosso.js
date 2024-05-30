/*Função que realiza a mudança para o modo claro*/
    function lightMode() { 
        var element = document.body;
        var claro = document.getElementById("icone-claro");
        var escuro = document.getElementById("icone-escuro");
        element.classList.add("lightMode");
        claro.style.display="block";
        escuro.style.display="none";
    }

    /*Função que realiza a mudança para o modo escuro*/
    function darkMode(){
      var element = document.body;
      var claro = document.getElementById("icone-claro");
      var escuro = document.getElementById("icone-escuro");
      element.classList.remove("lightMode");
      claro.style.display="none";
      escuro.style.display="block";
    }
  