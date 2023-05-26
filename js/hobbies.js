//Create an empry array to store the bookmarked items   
let bookmarkArray = []

//Create a function for when button is clicked
function bookmarkArticle(button) {
    //Get the current information from storage
    let bookmarkArray = JSON.parse(localStorage.getItem('content')) || [];
    //Get the content that the button relates to using parentNode
    let article = button.parentNode;
    //Copy the content from the parentNode
    let newContent = article.innerHTML;
    //push the content to the array
    bookmarkArray.push(newContent);
    //Create an alert for how many items are in the saved folder.
    alert("Your item has been saved. You have " + bookmarkArray.length + " item/s in your Saved Folder.")
    //Store the saved items into local storage
    localStorage.setItem("content", JSON.stringify(bookmarkArray));
}

//Create event listener for the destination page
window.addEventListener('DOMContentLoaded', function () {
    //Get the content from local storage
    let content = JSON.parse(localStorage.getItem('content'));
    //If there is content, get the bookmarked-articles id and add the content to the div
    if (content) {
    let targetElement = document.getElementById('bookmarked-articles');
    targetElement.innerHTML = content.join('<hr>') + '<hr>'
    }
});
