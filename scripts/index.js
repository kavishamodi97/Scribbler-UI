/* Scripts for Home page */

function navigateToBlogListPage(){
   window.location.href = "html/bloglist.html";
}

function dissmissCreatePostModal(){
    document.getElementById('create-post-modal').style.display='none';
}

function showCreatePostModal(){
    document.getElementById('create-post-modal').style.display='flex';
}