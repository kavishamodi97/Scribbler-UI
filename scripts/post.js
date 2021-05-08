/* Script For PostList Page*/

window.onload = function () {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    var editButton = `<button type="button" class="edit-btn" id="editPostBtn" onclick="editPostContent();">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
    document.getElementById('postAuthor').innerHTML = parseObj["authorName"] + editButton;
    document.getElementById('postTitle').innerHTML = parseObj["titleName"];
    document.getElementById('postDescription').innerHTML = parseObj["description"];
}

function editPostContent() {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    document.getElementById('postTitle').contentEditable = "true";
    document.getElementById('postTitle').style.border = "1px solid #d11d53";
    document.getElementById('postDescription').contentEditable = "true";
    document.getElementById('postDescription').style.border = "1px solid #d11d53";
    var postAuthorName = parseObj["authorName"];
    document.getElementById('postAuthor').innerHTML =
        `<h4>${postAuthorName}</h4>` + `<button type="button" class="save-btn" id="saveBtn" onclick="savePostContent();"> Save <i class="fa fa-save"></i></button>`;
}

function savePostContent() {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    var postAuthorName = parseObj["authorName"];
    document.getElementById('postAuthor').innerHTML =
        `<h4>${postAuthorName}</h4>` + `<button type="button" id="edit-btn" class="edit-btn" onclick="editPostContent();">Edit <i class="fa fa-pencil-square-o"></i></button>`;
    document.getElementById('postTitle').contentEditable = "false";
    document.getElementById('postDescription').contentEditable = "false";
    document.getElementById('postDescription').style.border = "none";
    document.getElementById('postTitle').style.border = "none";
}

var likeCount = 0;
function likePost() {
    likeCount++;
    if (likeCount === 1) {
        document.getElementById('like-container').innerHTML =
            `<button type="button" id="likeBtn" class="like-btn" onclick="likePost()"><i class="fa fa-thumbs-up"></i> Liked</button>` +
            `<p id="like-text">${likeCount} person likes this!</p>`;
    } else if (likeCount > 1) {
        document.getElementById('like-container').innerHTML =
            `<button type="button" id="likeBtn" class="like-btn" onclick="likePost()"><i class="fa fa-thumbs-up"></i>  Liked</button>` +
            `<p id="like-text">${likeCount} people like this!</p>`;
    }
}

function postComments() {
    var postComment = document.getElementById('comment-box').value;
    if (postComment !== '') {
        document.getElementById('all-post-comments').innerHTML += `<p class="post-comments">${postComment}</p>`;
        document.getElementById('comment-box').value = '';
    }
}
