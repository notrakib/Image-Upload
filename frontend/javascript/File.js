function handleSubmit(event) {
  event.preventDefault();
  const formData = new FormData();
  var input = document.getElementById("file");
  formData.append("image", input.files[0]);

  fetch("http://localhost:8000/image/upload-image", {
    method: "post",
    body: formData,
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      document
        .getElementById("alert")
        .appendChild(
          document.createTextNode(data.message.replace("Error: ", ""))
        );

      setTimeout(() => {
        document.getElementById("alert").remove();
      }, 1500);
    })
    .catch((err) => console.log(err));
}
