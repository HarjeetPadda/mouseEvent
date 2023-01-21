function alertMessage() {
  addEventListener("click", function (e) {
    console.log(e.clientX, e.clientY);
    const mainDiv = document.getElementById("mainDiv");
    const magicDiv = document.createElement("div");
    magicDiv.classList.add("magicDiv");
    magicDiv.style.top = e.clientY - 25 + "px";
    magicDiv.style.left = e.clientX - 25 + "px";

    mainDiv.appendChild(magicDiv);
    setTimeout(() => {
      magicDiv.style.transform = "scale(1)";
    }, 100);
    setTimeout(() => {
      mainDiv.removeChild(magicDiv);
    }, 1000);
  });
}
