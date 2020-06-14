hide = true;


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  const classNames = ["_3auQ3N", "_1vC4OE", "_1vC4OE _3qQ9m1", "_3auQ3N _1POkHg"];

  if (request.txt == "hidePrices") {
    setInterval(() => {
      classNames.forEach((className) => {
        setPrices(className);
      });
    }, 500);
  } else if (request.txt == "showPrices") {
  }
});

function setPrices(classs) {
  const priceDivs = document.getElementsByClassName(classs);
  for (let item in priceDivs) {
    const priceDiv = priceDivs[item];
    if (
      priceDiv &&
      priceDiv.innerText &&
      priceDiv.innerText.indexOf("₹") > -1
    ) {
      priceDiv.innerText = "";

      //a.style.display = a.style.display == "inline-block" ? "none" : "inline-block";
    }
  }
}
