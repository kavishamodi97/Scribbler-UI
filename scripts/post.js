/* Script For PostList Page*/

window.onload = function () {
    var sessionObj = sessionStorage.getItem('postInfo');
    var parseObj = JSON.parse(sessionObj);
    var editButton = `<button type="button" class="edit-btn" id="editPostBtn">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
    document.getElementById('postAuthor').innerHTML = parseObj["authorName"] + editButton;
    document.getElementById('postTitle').innerHTML = parseObj["titleName"];
    document.getElementById('postDescription').innerHTML = parseObj["description"];
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
