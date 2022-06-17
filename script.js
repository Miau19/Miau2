function crear() {

    document.getElementById("btnR").click(); //RESETAR FORMULARIO, EL BOTON ESTA EN visibility: hidden SOLO DEBE HACER CLIC CUANDO CARGE O RECARGE LA PAGINA.

    var N = [1,2,3,4,5,6,7,8];// ["Banana", "Orange", "Apple", "Mango","Banana", "Orange", "Apple", "Mango"];
    var frutas = ["Banana XT", "Orange", "Apple", "Mango","Banana", "Orange", "Apple", "Mango"];
    var nombres = ["Anastacia", "Jhon", "Vladimiro", "Julio","Laura", "Albert", "Vanessa", "will"];
    var props = "";var props1 = "";
    
    for (var i = 0; i < N.length;i++) {//N.length=8;
      props += "<div id='div1C"+N[i]+"' class='dB' >"+"&nbsp"+N[i]+"<input type='checkbox'  id='I"+N[i]+"' class='ch'>"+frutas[i]+"&nbsp</div>";
      props1 += "<div id='div2C"+N[i]+"' class='dB1' >"+"&nbsp"+N[i]+"<input type='radio'  id='ID"+N[i]+"' class='ch1'>"+nombres[i]+"&nbsp</div>";
    }
    document.getElementsByClassName("propDiv")[0].innerHTML = props;
    document.getElementsByClassName("propDiv1")[0].innerHTML = props1;
    var showNextInterval = setInterval(showNext, 500);
}
  
function showNext() {
    document.getElementById("t").value =Number(document.getElementById("t").value)+1;
    var n = document.getElementById("t").value;
    if(n == 9){
      document.getElementById("t").value = 1;
    }
    var x = document.getElementById("t").value;
    document.getElementById("I"+x).click();

    if(document.getElementById("I"+x).checked==true){
      document.getElementById("div1C"+x).style.opacity=0.8;
     }else{document.getElementById("div1C"+x).style.opacity=1;
    }

    for (var i = 1; i < 9; i++){
      if(x==i){document.getElementById("ID"+i).checked=true;document.getElementById("div2C"+i).style.opacity=0.8;
      }else{document.getElementById("ID"+i).checked=false;document.getElementById("div2C"+i).style.opacity=1;
      }
    }
    document.getElementById("t1").value = "id"+x + "    div1C"+x+ "    div2C"+x;
}
