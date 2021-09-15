let num =0;
let contador = document.getElementById("contador")

function click(){
    if(num>0){
        document.getElementById('sonrie').style.display='';
        document.getElementById('enojado').style.display='none';
        document.getElementById('caliente').style.display='none';
    }else if(num<0){
        document.getElementById('enojado').style.display='';
        document.getElementById('caliente').style.display='none';
        document.getElementById('sonrie').style.display='none';
    }else{
        document.getElementById('caliente').style.display='';
        document.getElementById('sonrie').style.display='none';
        document.getElementById('enojado').style.display='none';
    }
}


function incrementar(){
    num = num+1
    contador.innerText=num
    click()
}
function resetear(){
    num = 0
    contador.innerText = num
    click()

}
function decrementar(){
    num = num-1
    contador.innerText = num
    click()
}