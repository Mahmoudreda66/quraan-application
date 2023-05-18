const hadeeths = document.getElementById('hadeeth_content');
const pagination = document.getElementById('pagination');
const hadithsPerPage = 30;
let currentPage = 1;
let totalHadiths = 300;

const buttons = document.querySelectorAll('.books button');
let dataBooksRef = "";
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let dataBooksRef = button.getAttribute('data-books');
        console.log(dataBooksRef);

let getHadiths = (page) => {
    const startIndex = (page - 1) * hadithsPerPage + 1;
    const endIndex = startIndex + hadithsPerPage - 1;
    let url = `https://api.hadith.gading.dev/books/${dataBooksRef}?range=${startIndex}-${endIndex}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            hadeeths.innerHTML = '';

            for (let i = 0; i < data.data.hadiths.length; i++) {
                const div = document.createElement("div");
                div.innerHTML = `
                    <span>${data.data.hadiths[i].arab}</span> <br><br>
                `;
                hadeeths.appendChild(div);
            }

            updatePagination();
        })
        .catch(error => console.log('error', error));
};

let updatePagination = () => {
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalHadiths / hadithsPerPage);
    const previousButton = document.createElement("button");
    previousButton.innerText = "السابق";
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            getHadiths(currentPage);
        }
    });
    pagination.appendChild(previousButton);

    const nextButton = document.createElement("button");
    nextButton.innerText = "التالي";
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener("click", function () {
        if (currentPage < totalPages) {
            currentPage++;
            getHadiths(currentPage);
        }
    });
    pagination.appendChild(nextButton);

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(startPage + 9, totalPages);

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.toggle("active", i === currentPage);
        button.addEventListener("click", function () {
            currentPage = i;
            getHadiths(currentPage);
        });
        pagination.appendChild(button);
    }
};

let initializePagination = () => {
    let url = `https://api.hadith.gading.dev/books/${dataBooksRef}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            totalHadiths = data.data.total;
            updatePagination();
        })
        .catch(error => console.log('error', error));
};

// Initial pagination setup
initializePagination();

// Fetch and display initial page of data
getHadiths(currentPage);
    });
});
