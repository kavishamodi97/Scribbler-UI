/* Script For PostList Page*/

window.onload = function () {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    var editButton =`<button type="button" class="edit-btn" id="editPostBtn">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
    document.getElementById('postAuthor').innerHTML = parseObj["authorName"] + editButton ;
    document.getElementById('postTitle').innerHTML = parseObj["titleName"];
    document.getElementById('postDescription').innerHTML = parseObj["description"];
}