/* Script For PostList Page*/

window.onload = function () {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    document.getElementById('postAuthor').innerHTML = parseObj["authorName"];
    document.getElementById('postTitle').innerHTML = parseObj["titleName"];
    document.getElementById('postDescription').innerHTML = parseObj["description"];
}