function ValidarCampos(){
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");


    if(nome.value == ""){
        alert("Digite o nome!");
        nome.focus();
        return;
}
else{
    if(nome.value.length > 20){
        alert("Limite de caracteres 20 caracteres ultrapassado.");
        nome.value = "";
        nome.focus();
        return;
    }
}
    if(email.value ==""){
        alert("Digite o email!");
        email.focus();
        return;
    }
    else
    {
        if(!ValidaEmail(email.value.trim())){
            alert("Email Incorreto!");
            email.value = "";
            email.focus();
            return;
        }    
        else
        {

            //let parteEmail = email.value.substring(0,5);
            //alert(parteEmail);

            let antesDoArroba = email.value.substring(0, email.value.indexOf("@"));
            alert(antesDoArroba);
        }
    }
}

function ValidaEmail(email){
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}