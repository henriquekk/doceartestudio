let botaoFiltrar = document.getElementById("botao-filtro");
let limparFiltro = document.querySelector("#botao-limpar-filtro");
let produtos = document.getElementsByClassName(".caixa-pagina-produtos");

function pegarValores(){
    let categoria = document.getElementsByName("categorias");


    for(var i=0; i<categoria.length; i++){
        if(categoria[i].checked){
            console.log("a categoria selecionada é: "+ categoria[i].value)
        }
         else{
            produtos.classList.add(".filtro-hide")
        }
    }    
}







botaoFiltrar.addEventListener("click", pegarValores);

limparFiltro.addEventListener("click", function(){
    location.reload(); 
});





