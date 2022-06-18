var f = [""];
var n = [""];

function crear() {
  bR.click(); 
  f = ["Banana", "Orange", "Apple", "Mango","Strawberry", "Lime", "Pineapple", "Watermelon"];
  n = ["Anastacia", "Jhon", "Vladimiro", "Julio","Laura", "Albert", "Vanessa", "will"];
  var p = "";var p1 = "";
  for (var i = 1; i <= f.length;i++) {
    p += "<div id='div1C"+i+"' class='dB' >"+"&nbsp"+i+"<input type='checkbox'  id='I"+i+"' class='ch'>"+f[i-1]+"&nbsp</div>";
    p1 += "<div id='div2C"+i+"' class='dB1' >"+"&nbsp"+i+"<input type='radio'  id='ID"+i+"' class='ch1'>"+n[i-1]+"&nbsp</div>";
  }
  document.getElementById("div0").innerHTML = p;//document.getElementsByClassName("propDiv")[0].innerHTML = p;
  document.getElementById("div1").innerHTML = p1;//document.getElementsByClassName("propDiv1")[0].innerHTML = p1;
  var showNextInterval = setInterval(showNext, 500);
}

function showNext() {
  t.value =Number(t.value)+1;
  if(t.value == 9)t.value = 1;
  var x = t.value;
  document.getElementById("I"+x).click();

  if(document.getElementById("I"+x).checked==true){
    document.getElementById("div1C"+x).style.opacity=0.7;
   }else{document.getElementById("div1C"+x).style.opacity=1;
  }

  for (var i = 1; i <= n.length; i++){
    if(x==i){document.getElementById("ID"+i).checked=true;document.getElementById("div2C"+i).style.opacity=0.7;
    }else{document.getElementById("ID"+i).checked=false;document.getElementById("div2C"+i).style.opacity=1;
    }
  }
  document.getElementById("t1").value = "ID"+x + "    div1C"+x+ "    div2C"+x;
}




