//This is to update a post
const updatePost = async (event) => {
  event.preventDefault();

  //this is to find the post id
  const locationSplit = window.location.href.toString().split("/");
  const locationLength = locationSplit.length;
  const id = locationSplit[locationLength - 1];
  console.log(id);

  const inputTitle = document.querySelector("#newTitle").value;
  const inputPost = document.querySelector("#newPost").value;

  if (!inputPost || !inputTitle) {
    alert("You must enter a text in all fields in order to update your Post!");
    return;
  }

  console.log(inputPost);
  console.log(inputTitle);

  await fetch(`/api/post/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      inputTitle,
      inputPost,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/");
};

document
  .querySelector("#update-post-form")
  .addEventListener("submit", updatePost);
