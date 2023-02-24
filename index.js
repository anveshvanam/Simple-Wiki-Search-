let searchInputEl = document.getElementById('searchInput');
let searchResultsEl = document.getElementById('searchResults');
let spinnerEl = document.getElementById('spinner');

function displayResults(search_results) {
    for (let item of search_results) {
        let resultContainer = document.createElement('div');
        resultContainer.classList.add('result-item');
        let titleEl = document.createElement('a');
        titleEl.textContent = item.title;
        titleEl.href = item.link;
        titleEl.classList.add('result-title');
        resultContainer.appendChild(titleEl);

        let breakEl = document.createElement('br');
        resultContainer.appendChild(breakEl);

        let linkEl = document.createElement('a');
        linkEl.href = item.link;
        linkEl.textContent = item.link;
        linkEl.classList.add('result-url');
        resultContainer.appendChild(linkEl);

        let descriptionEl = document.createElement('p');
        descriptionEl.textContent = item.description;
        descriptionEl.classList.add('link-description');

        resultContainer.appendChild(descriptionEl);
        spinnerEl.classList.add('d-none');
        searchResultsEl.classList.remove('d-none');
        searchResultsEl.appendChild(resultContainer);



    }
}






function wikipediaSearch(event) {
    let url = "https://apis.ccbp.in/wiki-search?search=";
    let options = {
        Method: "GET"
    };
    if (event.key === 'Enter') {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.classList.add("d-none");
        searchResultsEl.textContent = "";
        fetch(url + searchInputEl.value, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);

            });
    }
}
searchInputEl.addEventListener('keydown', wikipediaSearch);
