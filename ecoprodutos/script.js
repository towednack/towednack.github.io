function alertScreenSize(){
    alert("Welcome to the H page. This website is best viewed on a 3:4 monitor.")
}

function blogPostFavorite(postId, postTitle){
    if (document.getElementById("blogPostFavorite" + postId).src.includes("media/blogPostFavorite.png")) {
        document.getElementById("blogPostFavorite" + postId).src = "media/blogPostFavoriteEmpty.png"
        alert("The post [" + postTitle + "] has been removed from your favorites.");
    }
    else {
        document.getElementById("blogPostFavorite" + postId).src = "media/blogPostFavorite.png"
        alert("The post [" + postTitle + "] has been added to your favorites. To find it later, head on to 'Favorites' on your user page.");
    }
}

function notYetSupportedFeature(){
    alert("This feature is not yet supported on the website! Sorry for the inconvenience.")
}