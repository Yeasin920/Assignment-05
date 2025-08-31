const heartCounter = document.getElementById("hrt-cnt");
const heartBtns = document.querySelectorAll(".hrt-btn");
for (const btn of heartBtns) {
  btn.addEventListener("click", function(){
    heartCounter.textContent = parseInt(heartCounter.textContent) + 1;
  });
}
 

// Select coin counter
let coinCnt = document.getElementById("coin-cnt");
let callBtns = document.querySelectorAll(".call-btn");

let historySection = document.getElementById("right-section");

let clearBtn = historySection.querySelector("button");

// Container for history items (so header + clear stay fixed)
let historyList = document.createElement("div");
historyList.className = "mt-4 w-full";
historySection.appendChild(historyList);

// Loop through all call buttons
for (let callBtn of callBtns) {
  callBtn.addEventListener("click", function (e) {
  
    let card = e.target.closest("section");

    let serviceName = card.querySelector("h2").innerText;
    let serviceNumber = card.querySelector("h2:nth-of-type(2)").innerText;

    
    let currentCoins = parseInt(coinCnt.innerText);
    if (currentCoins < 20) {
      alert("❌ Not enough coins! You need at least 20.");
      return;
    }

    // Reduce coins by 20
    coinCnt.innerText = currentCoins - 20;

    // Show alert with name + number
    alert(`📞 Calling ${serviceName} at ${serviceNumber}`);

     let now = new Date();
    let exactTime = now.toLocaleString();

    // Create new history item
    let historyItem = document.createElement("div");
    historyItem.className = "p-2 bg-gray-100 text-2xl mt-2";
    historyItem.innerText = `${serviceName}
     ${serviceNumber} → ${exactTime}`;
    historyList.appendChild(historyItem);
  });
}

// Clear button event
clearBtn.addEventListener("click", function () {
  historyList.innerHTML = ""; 
});



