/* Script For PostList Page*/

var modal;
function deleteModal(elementId) {
    modal = document.getElementById('delete-modal')
    modal.style.display = 'block';
    document.getElementsByClassName('yes-btn')[0].id = elementId;
}

function deletePost(postid) {
    var finalid = "post" + postid;
    document.getElementById(`${finalid}`).style.display = 'none';
    modal.style.display = 'none';
}

function closeDeleteModal() {
    modal.style.display = 'none';
}

function openPost(id) {
    var title = document.getElementById(`title-${id}`).childNodes;
    title = title[1].innerHTML;
    var description = document.getElementById(`desc-${id}`).innerHTML;
    var author = document.getElementById(`post-author-${id}`).childNodes;
    author = author[1].innerHTML;
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
    localStorage.setItem('author', author);
    window.location.href = 'post.html';
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}