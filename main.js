function show_password() {
  var tipo = document.getElementById("showPass");
  if (tipo.type == "password") {
    tipo.type = "text";
  } else {
    tipo.type = "password";
  }
}

function nextPage() {
  var elemt = document.forms['myform']['cbo'].checked
  if (elemt == true) {
    return true
  } else {
    alert('Acepta las condiciones')
    return false
  }
}
