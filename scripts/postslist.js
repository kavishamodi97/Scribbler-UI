/* Script For PostList Page*/

var cardModalId;

/* Click On Trash Icon To Match Specific Card Id To Be Deleted  */
function deleteCardModal(id) {
    cardModalId = id;
    return id;
}

/* Click On Yes Button Specific Card To Be Deleted */
function deleteCard(postid) {
    for (var cardIndex = 0; cardIndex <= 5; cardIndex++) {
        if (cardIndex == deleteCardModal(cardModalId)) {
            cardIndex = "post" + cardIndex;
            var delCardModal = document.getElementById(cardIndex).style.display = 'none';
        }
    }
}

/* Click On Ellipsis Icon Navigate To Post Page */
function navigateToPostPage(id) {
    var postAuthor = document.getElementById(`post-author-${id}`).textContent;
    var postTitle = document.getElementById(`title-${id}`).textContent;
    var postDescription = document.getElementById(`desc-${id}`).textContent;
    console.log(postAuthor);

    var postObj = {
        "authorName": postAuthor,
        "titleName": postTitle,
        "description": postDescription
    };

    sessionStorage.setItem("postInfo", JSON.stringify(postObj));
    window.location.href = "post.html";
}

