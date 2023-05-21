"use strict";
const hadeeths = document.getElementById("hadeeth_content");
const pagination = document.getElementById("pagination");
const hadithsPerPage = 30;
let currentPage = 1;
let totalHadiths = 700;

const buttons = document.querySelectorAll(".books button");
let dataBooksRef = localStorage.getItem("dataBooksRef") || "muslim";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    location.reload()
    dataBooksRef = button.getAttribute("data-books");
    localStorage.setItem("dataBooksRef", dataBooksRef);
    getHadiths(currentPage);
  });
});
console.log(dataBooksRef);
buttons.forEach(rawybutton => {
  if (dataBooksRef === rawybutton.getAttribute("data-books")) {
    rawybutton.style.backgroundColor = "red";
  } else {
    rawybutton.style.backgroundColor = "";
  }
});

function updateActivePageButton() {
  const pageButtons = document.querySelectorAll(
    "#pagination button:not(:first-child):not(:last-child)"
  );

  pageButtons.forEach((button, index) => {
    if (index + 1 === currentPage) {
      button.style.backgroundColor = "red";
    } else {
      button.style.backgroundColor = "";
    }
  });
}

let getHadiths = page => {
  currentPage = page;
  const startIndex = (page - 1) * hadithsPerPage + 1;
  const endIndex = startIndex + hadithsPerPage - 1;
  let url = `https://api.hadith.gading.dev/books/${dataBooksRef}?range=${startIndex}-${endIndex}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      hadeeths.innerHTML = "";

      for (let i = 0; i < data.data.hadiths.length; i++) {
        const div = document.createElement("div");
        div.innerHTML = `
          <span>${data.data.hadiths[i].arab}</span> <br><br>
        `;
        hadeeths.appendChild(div);
      }

      // totalHadiths = data.data.total;
      console.log(totalHadiths);
      updateActivePageButton();
    })
    .catch(error => console.log("error", error));
};

// -=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const previousButton = document.createElement("button");
previousButton.innerText = "السابق";
previousButton.addEventListener("click", () => {
  if (currentPage > 1) {
    getHadiths(currentPage - 1);
  }
});

const nextButton = document.createElement("button");
nextButton.innerText = "التالي";
nextButton.addEventListener("click", () => {
  let lastPage = Math.ceil(totalHadiths / hadithsPerPage);
  console.log(lastPage);
  if (currentPage < lastPage) {
    getHadiths(currentPage + 1);
  }
});

pagination.appendChild(previousButton);
for (let i = 1; i <= Math.ceil(totalHadiths / hadithsPerPage); i++) {
  const pageButton = document.createElement("button");
  pageButton.innerText = i;
  pageButton.addEventListener("click", () => {
    getHadiths(i);
  });

  if (i === currentPage) {
    pageButton.style.backgroundColor = "red";
  }
  pagination.appendChild(pageButton);
}

pagination.appendChild(nextButton);

getHadiths(currentPage);
