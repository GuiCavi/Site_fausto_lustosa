$(document).ready(function(){

  /**
   * Cuidado, sua div.board não contém nada, portanto ela pode ser ignorada por alguns navegadores
   * ou seja, o mouseover não acontecerá!
   */
  $(".board").mouseover(function(){
    alert("O cursor foi posicionado sobre a div.");
  });

});
