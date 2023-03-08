let botaoFiltrar = document.getElementById("botao-filtro");
let limparFiltro = document.querySelector("#botao-limpar-filtro");


function pegarValores(){
    let categoria = document.getElementsByName("categorias");

    for(var i=0; i<categoria.length; i++){
        if(categoria[i].checked){
            console.log("as categorias são: "+ categoria[i].value)
        }
    }
}

botaoFiltrar.addEventListener("click", pegarValores);

limparFiltro.addEventListener("click", function(){
    location.reload(); 
});









