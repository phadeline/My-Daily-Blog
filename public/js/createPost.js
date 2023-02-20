function createPostForm(event) {
  event.preventDefault();
  let showInputs = document.querySelector("#add-post-form");
  let postbutton = document.querySelector("#createPost");
  postbutton.style.display = "none";
  showInputs.style.display = "block";
}

const newPostFormHandler = async (event) => {
  event.preventDefault();
  const title = document.querySelector("#mytitle").value;
  const content = document.querySelector("#mypost").value;

  console.log(title);
  console.log(content);

  if (!title || !content) {
    alert("You must write something for the Title and Post input field");
    return;
  }

  await fetch("api/post", {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  document.location.replace("/dashboard");
};

document
  .querySelector("#add-post-form")
  .addEventListener("submit", newPostFormHandler);

document.querySelector("#createPost").addEventListener("click", createPostForm);
