// script.js

// const searchForm = document.getElementById('searchForm');
// const searchInput = document.getElementById('searchInput');
// const outputContainer = document.getElementById('outputContainer');
// const searchBar = document.querySelector('.search-bar');
const searchForm = document.getElementById('searchForm');
const outputContainer = document.getElementById('outputContainer');
const inputOutputBox = document.getElementById('inputOutputBox');
const cards = document.querySelectorAll('.card');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const query = searchInput.value.trim();
    if (query !== '') {
        // Simulate backend response
        const responseData = {
            message: 'This is a sample response from the backend.'
        };

        // Display input query and output
        inputOutputBox.innerHTML = `
            <div class="input">
                <h3>Input:</h3>
                <p>${query}</p>
            </div>
            <div class="output">
                <h3>Output:</h3>
                <p>${responseData.message}</p>
            </div>
        `;
        inputOutputBox.style.display = 'block';

        // Hide cards
        cards.forEach(card => {
            card.style.display = 'none';
        });
    }
});

// Inside the form submission event listener
inputOutputBox.classList.add('show');

// Add event listener for Enter key press in the input field
searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent default Enter key behavior (form submission)
        searchForm.dispatchEvent(new Event('submit'));
    }
});

// searchInput.addEventListener('focus', function () {
//     searchBar.classList.add('expanded');
// });

// searchInput.addEventListener('blur', function () {
//     if (searchInput.value.trim() === '') {
//         searchBar.classList.remove('expanded');
//     }
// });
