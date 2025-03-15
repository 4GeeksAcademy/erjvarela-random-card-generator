window.onload = function() {
  generateCard();
  setTimeout(generateCard, 10000);
}
function generateCard() {
  const card = document.querySelector("#card");
  const width = `${document.querySelector("#width").value}px`;
  const height = `${document.querySelector("#height").value}px`;
  if (card) {
    card.style.width = width;
    card.style.height = height;
    card.classList.add("bg-white", "mx-auto", "my-3", "shadow-lg", "p-3", "position-relative", "d-flex", "flex-column", "justify-content-between");
    card.style.borderRadius = "3%";
    card.innerHTML = ""
    generateCardContent(card);
  } else {
    console.log("There is no card to query.");
  }
}

function generateCardContent(card) {
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let cardTypes = ["spade", "club", "heart", "diamond"];
  const randomCardNumber = Math.floor(Math.random() * cardNumber.length);
  const randomCardType = Math.floor(Math.random() * cardTypes.length);
  const cardType = cardTypes[randomCardType];

  let cardHeader = document.createElement("div");
  setElementProperties(card, cardHeader, 7, "flex-start", "card-header");
  setSymbol(cardHeader, cardType);
  card.appendChild(cardHeader);

  let cardNumberDiv = document.createElement("div");
  setElementProperties(card, cardNumberDiv, 5, "center");
  cardNumberDiv.innerHTML = cardNumber[randomCardNumber];
  card.appendChild(cardNumberDiv);

  let cardFooter = document.createElement("div");
  setElementProperties(card, cardFooter, 7, "flex-end");
  setSymbol(cardFooter, cardType);
  cardFooter.style.transform = "rotate(180deg)";
  card.appendChild(cardFooter);
}

function setElementProperties(card, element, eFont, position, id) {
  element.style.fontSize = `${parseInt(card.style.height, 10) / eFont}px`;
  element.style.alignSelf = `${position}`;
  element.id = id
}

function setSymbol(element, type) {
  if (type === "heart") {
    element.innerHTML = "♥";
    element.style.color = "red";
  } else if (type === "diamond") {
    element.innerHTML = "♦";
    element.style.color = "red";
  } else if (type === "spade") {
    element.innerHTML = "♠";
    element.style.color = "black";
  } else if (type === "club") {
    element.innerHTML = "♣";
    element.style.color = "black";
  }
}