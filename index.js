function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
document.getElementsByClassName("hrt-btn").addEventListener("click",function(e){
    const hrt = document.getElementById("hrt-cnt").innerText
    for(let hrts of hrt){
        return hrts+= 1;
    }


})
const heartCounter = document.getElementById("hrt-cnt");
let count = 0;

// get all heart icons
const heartBtns = document.querySelectorAll(".hrt-btn");

// add event listener for each heart
heartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    count++;
    heartCounter.textContent = count;
  });
});