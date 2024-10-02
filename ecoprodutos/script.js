function alertScreenSize(){
    alert("Bem vindo à EcoProdutos. Este site é melhor visualizado em um monitor 3:4.")
}

function blogPostFavorite(postId, postTitle){
    if (document.getElementById("blogPostFavorite" + postId).src.includes("media/blogPostFavorite.png")) {
        document.getElementById("blogPostFavorite" + postId).src = "media/blogPostFavoriteEmpty.png"
        alert("O post [" + postTitle + "] foi removido dos seus favoritos.");
    }
    else {
        document.getElementById("blogPostFavorite" + postId).src = "media/blogPostFavorite.png"
        alert("O post [" + postTitle + "] foi adicionado aos seus favoritos. Para encontrá-lo mais tarde, vá para ‘Favoritos’ na sua página de usuário.");
    }
}

function notYetSupportedFeature(){
    alert("Este recurso ainda não é compatível com o site! Desculpe pela inconveniência.")
}