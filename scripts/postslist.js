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
function navigateToPostPage() {
    window.location.href = "post.html";
}

