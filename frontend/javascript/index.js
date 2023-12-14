let textInfo;

fetch("http://numbersapi.com/1/30/date?json")
  .then((res) => {
    return res.json();
  })
  .then((data) => main(data))
  .catch();
