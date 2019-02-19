const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init() {

  let index = 0;

  // This is the function that would be invoked by the event listener.
  function onKeyDownHandler(event) {
    const key = event.key;

    if (key === codes[index]) {
      index++;

      if (index === codes.length) {
        alert("Congratulation!");

        index = 0;
      }
    } else {
      index = 0;
    }
  }

    document.body.addEventListener('keydown',onKeyDownHandler);
}
