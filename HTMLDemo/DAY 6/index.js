function validate (){
    const mono=document.getElementById("mobile");
    if(isNaN(mono.value) || mono.value.length !=10){
        alert("mobile number is valid ");
        return false ;
    }
    return true;
}