/* Script For PostList Page*/

window.onload = function () {
    /* Get Object From Session Storage Using 'postInfo' Key*/
    var sessionObj = sessionStorage.getItem('postInfo');
    /* Parse Session Object Using JSON.parse Method */
    var parseObj = JSON.parse(sessionObj);
    /* Set EditButton UI To Edit Post Content*/
    var editButton = `<button type="button" class="edit-btn" id="editPostBtn" onclick="editPostContent();">Edit <i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>`;
    /* Get Post Author Name Using Session Storage Object*/
    document.getElementById('postAuthor').innerHTML = parseObj["authorName"] + editButton;
    /* Get Post Title Using Session Storage Object */
    document.getElementById('postTitle').innerHTML = parseObj["titleName"];
    /* Get Post Description Using Session Storage Object*/
    document.getElementById('postDescription').innerHTML = parseObj["description"];
}

/* To Edit Post Content */
function editPostContent() {
    /* Get Object From Session Storage Using 'postInfo' Key*/
    var sessionObj = sessionStorage.getItem('postInfo');
    /* Parse Session Object Using JSON.parse Method */
    var parseObj = JSON.parse(sessionObj);
    /* Make Post Title In Editable Mode*/
    document.getElementById('postTitle').contentEditable = "true";
    /* Set Border Around Post Title */
    document.getElementById('postTitle').style.border = "1px solid #d11d53";
    /* Make Post Description In Editable Mode*/
    document.getElementById('postDescription').contentEditable = "true";
    /* Set Border Around Post Description */
    document.getElementById('postDescription').style.border = "1px solid #d11d53";
    /* Get Post Author Name */
    var postAuthorName = parseObj["authorName"];
    /* Set Save Button */
    document.getElementById('postAuthor').innerHTML =
        `<h4>${postAuthorName}</h4>` + `<button type="button" class="save-btn" id="saveBtn" onclick="savePostContent();"> Save <i class="fa fa-save"></i></button>`;
}

/* To Save Post Content */
function savePostContent() {
    /* Get Object From Session Storage Using 'postInfo' Key*/
    var sessionObj = sessionStorage.getItem('postInfo');
    /* Parse Session Object Using JSON.parse Method */
    var parseObj = JSON.parse(sessionObj);
    /* Get Post Author Name */
    var postAuthorName = parseObj["authorName"];
    /* Set Edit Button When Post Content Saved */
    document.getElementById('postAuthor').innerHTML =
        `<h4>${postAuthorName}</h4>` + `<button type="button" id="edit-btn" class="edit-btn" onclick="editPostContent();">Edit <i class="fa fa-pencil-square-o"></i></button>`;
    /* Post Title In NoN-Editable Mode */
    document.getElementById('postTitle').contentEditable = "false";
    /* Post Description In NoN-Editable Mode */
    document.getElementById('postDescription').contentEditable = "false";
    /* Toggle Border Around Post Description When Post Content Saved */
    document.getElementById('postDescription').style.border = "none";
    /* Toggle Border Around Post Title When Post Content Saved */
    document.getElementById('postTitle').style.border = "none";
}

var likeCount = 0;
/* Track Total No. Of LIked Post */
function likePost() {
    likeCount++;
    if (likeCount === 1) {
        /* Set Like Text And Liked Button When Total Like Equal To 1 */
        document.getElementById('like-container').innerHTML =
            `<button type="button" id="likeBtn" class="like-btn" onclick="likePost()"><i class="fa fa-thumbs-up"></i> Liked</button>` +
            `<p id="like-text">${likeCount} person likes this!</p>`;
    } else if (likeCount > 1) {
        /* Set Like Text And Liked Button When Total Like Greater Than To 1 */
        document.getElementById('like-container').innerHTML =
            `<button type="button" id="likeBtn" class="like-btn" onclick="likePost()"><i class="fa fa-thumbs-up"></i>  Liked</button>` +
            `<p id="like-text">${likeCount} people like this!</p>`;
    }
}

/* To Post Comment */
function postComments() {
    /* Get Value From Teatarea*/
    var postComment = document.getElementById('comment-box').value;
    /* Set Textarea Value In Comment Box */
    if (postComment !== '') {
        document.getElementById('all-post-comments').innerHTML += `<p class="post-comments">${postComment}</p>`;
        document.getElementById('comment-box').value = '';
    }
}
