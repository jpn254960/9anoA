if (localStorage.getItem('bit') == null){
    localStorage.setItem('bit',10000)
}
var bit=localStorage.getItem('bit')

var texto=document.getElementById('bit')
texto.innerText='bit: '

texto.innerText+=bit
// sistema para abri os jogos
var link=['jogo_1.html','jogo_2.html','jogo_3.html']
function abrir(s){
    var aposta=document.getElementById('aposta').value
    if(isNaN(aposta)==true || aposta.trim()==''){
        alert('erro de digitação')

    }else{
        if(Number(aposta)>localStorage.getItem('bit')){
            alert('valor da aposta é maior que o saldo')
        }else{
            var b=localStorage.getItem('bit')
            localStorage.setItem('bit',b-aposta)
            localStorage.setItem('aposta',aposta)
            open(link[s],'_self')
        }
    }
   
    
}