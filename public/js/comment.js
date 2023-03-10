//this is to find the post id
const locationSplit = window.location.href.toString().split("/");
const locationLength = locationSplit.length;
const locationId = locationSplit[locationLength - 1];
console.log(locationId);

//show input box to add commment
function showaddcomment(event) {
  event.preventDefault();
  let showInputs = document.querySelector("#add-comment-form");
  let commentbutton = document.querySelector("#comment");
  commentbutton.style.display = "none";
  showInputs.style.display = "block";
}

//This is to add a new comment
const newCommentFormHandler = async (event) => {
  event.preventDefault();
  console.log("new comment submitted");

  const commentText = document.querySelector("#mycomment").value;

  if (!commentText) {
    alert("OOPS! Looks like you forgot to write a comment.");
    return;
  }

  await fetch("/api/comment", {
    method: "POST",
    body: JSON.stringify({
      commentText,
      locationId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/post/" + locationId);
};

const deletePost = async (event) => {
  event.preventDefault();
  await fetch(`/api/post/${locationId}`, {
    method: "DELETE",
  });
  document.location.replace(`/`);
};

document.querySelector("#delete").addEventListener("click", deletePost);

document
  .querySelector("#add-comment-form")
  .addEventListener("submit", newCommentFormHandler);

document.querySelector("#comment").addEventListener("click", showaddcomment);
