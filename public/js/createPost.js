const newPostFormHandler = async (event) => {
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

  document.location.replace("/");
  event.preventDefault();
};

document
  .querySelector("#add-post-form")
  .addEventListener("submit", newPostFormHandler);
