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

let index = 0;

function init() {
  function onKeyDownHandler(e) {
    const key = e.key
    console.log(key)
    
    if (key === codes[index]) {
      index++
   
      if (index === codes.length) {
        alert("You have found my secret code")
   
        index = 0
      }
    } else {
      index = 0
    }
  }
  document.body.addEventListener('keydown', onKeyDownHandler)
}

