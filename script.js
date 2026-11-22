/* eslint-disable no-undef */
const projectButtons = document.querySelectorAll(".projects-button");
const bookmarkManagerDiv = document.getElementById("bookmark-manager-div");
const complaintFormDiv = document.getElementById("complaint-form-div");
const forumLeaderboardDiv = document.getElementById("forum-leaderboard-div");
const bookmarkManagerButton = document.getElementById("bookmark-manager-button");
const complaintFormButton = document.getElementById("complaint-form-button");
const forumLeaderboardButton = document.getElementById("forum-leaderboard-button");
const scrollToBookmark = () => {
    bookmarkManagerDiv.scrollIntoView({behavior: "smooth"});
}
const scrollToComplaintForm = () => {
    complaintFormDiv.scrollIntoView({behavior: "smooth"});
}
const scrollToForumLeaderboard = () => {
    forumLeaderboardDiv.scrollIntoView({behavior: "smooth"});
}

projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === 'bookmark-manager-button') {
            if (bookmarkManagerDiv.style.display === 'flex') {
                bookmarkManagerDiv.style.display = 'none';
                bookmarkManagerDiv.ariaHidden === 'true';
                return;
            }
            complaintFormDiv.style.display = 'none';
            forumLeaderboardDiv.style.display = 'none';
            bookmarkManagerDiv.style.display = 'flex';
            complaintFormDiv.ariaHidden === 'true';
            forumLeaderboardDiv.ariaHidden === 'true';
            bookmarkManagerDiv.ariaHidden === 'false';
        } else if (button.id === 'complaint-form-button') {
            if (complaintFormDiv.style.display === 'flex') {
                complaintFormDiv.style.display = 'none';
                complaintFormDiv.ariaHidden === 'true';
                return;
            }
            bookmarkManagerDiv.style.display = 'none';
            forumLeaderboardDiv.style.display = 'none';
            complaintFormDiv.style.display = 'flex';
            complaintFormDiv.ariaHidden === 'false';
            forumLeaderboardDiv.ariaHidden === 'true';
            bookmarkManagerDiv.ariaHidden === 'true';
        } else if (button.id === 'forum-leaderboard-button') {
            if (forumLeaderboardDiv.style.display === 'flex') {
                forumLeaderboardDiv.style.display = 'none';
                forumLeaderboardDiv.ariaHidden === 'true';
                return;
            }
            complaintFormDiv.style.display = 'none';
            bookmarkManagerDiv.style.display = 'none';
            forumLeaderboardDiv.style.display = 'flex';
            complaintFormDiv.ariaHidden === 'true';
            forumLeaderboardDiv.ariaHidden === 'false';
            bookmarkManagerDiv.ariaHidden === 'true';
        }
    });
});

bookmarkManagerButton.addEventListener("click", () => {
    if (bookmarkManagerDiv.style.display === "flex") {
        scrollToBookmark();
    }
});

complaintFormButton.addEventListener("click", () => {
    if (complaintFormDiv.style.display === "flex") {
        scrollToComplaintForm();
    }
});

forumLeaderboardButton.addEventListener("click", () => {
    if (forumLeaderboardDiv.style.display === "flex") {
        scrollToForumLeaderboard();
    }
});
