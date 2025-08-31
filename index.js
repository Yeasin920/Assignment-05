const heartCounter = document.getElementById("hrt-cnt");
const heartBtns = document.querySelectorAll(".hrt-btn");
for (const btn of heartBtns) {
  btn.addEventListener("click", function(){
    heartCounter.textContent = parseInt(heartCounter.textContent) + 1;
  });
}

