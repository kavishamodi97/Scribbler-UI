/* Script For PostList Page*/

var cardModalId;

function deleteCardModal(id) {
    cardModalId = id;
    return id;
}

function deleteCard(postid) {
    for (var cardIndex = 0; cardIndex <= 5; cardIndex++) {
        if (cardIndex == deleteCardModal(cardModalId)) {
            cardIndex = "post" + cardIndex;
            var delCardModal = document.getElementById(cardIndex).style.display = 'none';
        }
    }
}

function navigateToPostPage() {
    window.location.href = "post.html";
}

