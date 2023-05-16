const input = document.querySelector("input");
const btn = document.querySelector(".btn");
const errorImg = document.querySelector(".errorImg");
const errorMessage = document.querySelector(".errorMessage");

btn.addEventListener("click", function () {
  if (input.value === "") {
    errorMessage.querySelector("p").textContent = "Oops! Please add your email";
    errorMessage.style.visibility = "visible";
    errorImg.style.visibility = "visible";
    input.classList.add("borderError");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    errorMessage.querySelector("p").textContent =
      "Oops! Please check your email";
    errorMessage.style.visibility = "visible";
    errorImg.style.visibility = "visible";
    input.classList.add("borderError");
  } else {
    errorMessage.style.visibility = "hidden";
    errorImg.style.visibility = "hidden";
    input.classList.remove("borderError");
  }
});
