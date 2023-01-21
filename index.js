function alertMessage() {
  addEventListener("click", function (e) {
    console.log(e.clientX, e.clientY);
    const mainDiv = document.getElementById("mainDiv");
    const magicDiv = document.createElement("div");
    magicDiv.classList.add("magicDiv");
    // magicDiv.style.position = "absolute";
    magicDiv.style.top = e.clientY - 25 + "px";
    magicDiv.style.left = e.clientX - 25 + "px";
    // magicDiv.style.width = "50px";
    // magicDiv.style.height = "50px";
    // magicDiv.style.backgroundColor = "blue";
    // magicDiv.style.borderRadius = "50%";
    // magicDiv.style.zIndex = "999";
    // magicDiv.style.transition = "all 0.5s ease";
    // magicDiv.style.transform = "scale(0)";
    mainDiv.appendChild(magicDiv);
    setTimeout(() => {
      magicDiv.style.transform = "scale(1)";
    }, 100);
    setTimeout(() => {
      mainDiv.removeChild(magicDiv);
    }, 1000);
  });
}
