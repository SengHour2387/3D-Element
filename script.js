const x = document.querySelector(".box");
function myfun() {
  const x = document.querySelector(".box");
  if (x.classList.contains("change")) {
    x.classList.remove("change");
    x.classList.remove("drop");
  } else {
    x.classList.add("change");
  }
  console.log(x.classList);
}
function expand() {
  const x = document.querySelector(".box");
  const down = document.querySelector(".seeMore");
  if (x.classList.contains("drop")) {
    x.classList.remove("drop");
    down.classList.remove("down");
  } else {
    x.classList.add("drop");
    down.classList.add("down");
  }
  console.log(x.classList);
}

function change() {
  const theme = document.querySelector(".themeicon");
  const body = document.querySelector(".wholepage");
  if (theme.classList.contains("change")) {
    theme.classList.remove("change");
    body.classList.remove("change");
  } else {
    theme.classList.add("change");
    body.classList.add("change");
  }
}
