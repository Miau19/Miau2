function crear() {
    document.getElementById("btnR").click(); 
    var f = ["Banana XT", "Orange", "Apple", "Mango","Banana", "Orange", "Apple", "Mango"];
    var N = f.length;
    var n = ["Anastacia", "Jhon", "Vladimiro", "Julio","Laura", "Albert", "Vanessa", "will"];
    var p = "";var p1 = "";
    
    for (var i = 1; i <= N;i++) {
      p += "<div id='div1C"+i+"' class='dB' >"+"&nbsp"+i+"<input type='checkbox'  id='I"+i+"' class='ch'>"+f[i-1]+"&nbsp</div>";
      p1 += "<div id='div2C"+i+"' class='dB1' >"+"&nbsp"+i+"<input type='radio'  id='ID"+i+"' class='ch1'>"+n[i-1]+"&nbsp</div>";
    }
    document.getElementsByClassName("propDiv")[0].innerHTML = p;
    document.getElementsByClassName("propDiv1")[0].innerHTML = p1;
    var showNextInterval = setInterval(showNext, 500);
}
var c=0;
function showNext() {
    c++;
    if(c == 9){
        c=1;
    }
    document.getElementById("I"+c).click();

    if(document.getElementById("I"+c).checked==true){
      document.getElementById("div1C"+c).style.opacity=0.8;
     }else{document.getElementById("div1C"+c).style.opacity=1;
    }

    for (var i = 1; i < 9; i++){
      if(c==i){document.getElementById("ID"+i).checked=true;document.getElementById("div2C"+i).style.opacity=0.8;
      }else{document.getElementById("ID"+i).checked=false;document.getElementById("div2C"+i).style.opacity=1;
      }
    }
    document.getElementById("t1").value ="c="+c+ "   id"+c + "    div1C"+c+ "    div2C"+c;
}
