let div=document.getElementById("conteneur");
let paragraphe=document.getElementById("monparagraphe");
paragraphe.innerText="le paragraphe a été modifié";
paragraphe.style.backgroundColor="lightblue";
paragraphe.style.textAlign="center";
paragraphe.style.padding="10px";
div.addEventListener("click",function(){
    paragraphe.innerText="Un click a été détecté";
});