var value = "";
var operation = "";
var result = 0;

$(document).on("click","#v1",function(){
  value += "1";
  $("#result").val(value);
});
$(document).on("click","#v2",function(){
  value += "2";
  $("#result").val(value);
});
$(document).on("click","#v3",function(){
  value += "3";
  $("#result").val(value);
});
$(document).on("click","#v4",function(){
  value += "4";
  $("#result").val(value);
});
$(document).on("click","#v5",function(){
  value += "5";
  $("#result").val(value);
});
$(document).on("click","#v6",function(){
  value += "6";
  $("#result").val(value);
});
$(document).on("click","#v7",function(){
  value += "8";
  $("#result").val(value);
});
$(document).on("click","#v9",function(){
  value += "9";
  $("#result").val(value);
});
$(document).on("click","#v0",function(){
  value += "0";
  $("#result").val(value);
});
$(document).on("click","#btnClear",function(){
  value = "";
  $("#result").val(value);
});
//Setting the operation buttons
$(document).on("click","#btnClear",function(){
   clear = "";
  $("#result").val(clear);
});
$(document).on("click","#btnPonto",function(){
   value =  '.';
  $("#result").val(value);
});
$(document).on("click","#btnMais",function(){
  operation = "+";
  res = value;
  value = "";
  $("#result").val(value);
});
$(document).on("click","#btnMenos",function(){
  operation = "-";
  res = value;
  value = "";
  $("#result").val(value);
});
$(document).on("click","#btnMult",function(){
  operation = "*";
  res = value;
  value = "";
  $("#result").val(value);
});
$(document).on("click","#btnDividir",function(){
  operation = "/";
  res = value;
  value = ""; 
  $("#result").val(value);
});

//Doing the operations



$(document).on("click","#btnIgual",function(){
if(operation == "+")
{
  value2 = $("#result").val();
  total = parseFloat(res) + parseFloat(value2);
  $("#result").val(total);
} 
else if(operation == "-"){
  value2 = $("#result").val();
  total = parseFloat(res) - parseFloat(value2);
  $("#result").val(total);
}
else if(operation == "*"){
  value2 = $("#result").val();
  total = parseFloat(res) * parseFloat(value2);
  $("#result").val(total);
}
else if(operation == "/"){
  value2 = $("#result").val();
  total = parseFloat(res) / parseFloat(value2);
  $("#result").val(total);
}

//Zerando as variáveis para que o btnClear funcione automaticamente
total = 0;
value2 = "";
value = "";
res = "";


});