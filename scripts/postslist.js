/* Script For PostList Page*/

var cardModalId;

/* Click On Trash Icon To Match Specific Card Id To Be Deleted  */
function deleteCardModal(id) {
    cardModalId = id; /* Assign Id to cardModalId To Delete Specific Post Card */
    return id;
}

/* Click On Yes Button Specific Card To Be Deleted */
function deleteCard(postid) {
    for (var cardIndex = 0; cardIndex <= 5; cardIndex++) {
        /* Delete Specific Card  */
        if (cardIndex == deleteCardModal(cardModalId)) {
            cardIndex = "post" + cardIndex;
            var delCardModal = document.getElementById(cardIndex).style.display = 'none';
        }
    }
}

/* Click On Ellipsis Icon Navigate To Post Page */
function navigateToPostPage(id) {
    /* Get Post Author Name Using Post  Author Id*/
    var postAuthor = document.getElementById(`post-author-${id}`).textContent;
    /* Get Post Title Name Using Post Title  Id*/
    var postTitle = document.getElementById(`title-${id}`).textContent;
    /* Get Post Description Using Post Description Id*/
    var postDescription = document.getElementById(`desc-${id}`).textContent;

    /* Set Post Object To Pass Post Information*/
    var postObj = {
        "authorName": postAuthor,
        "titleName": postTitle,
        "description": postDescription
    };

    /* Set Post Details In Session Storage Using 'postInfo' Key */
    sessionStorage.setItem("postInfo", JSON.stringify(postObj));
    /* Send Post Details and Navigate TO Post Page */
    window.location.href = "post.html";
}

