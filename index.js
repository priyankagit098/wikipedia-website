let inputsS = document.getElementById("searchInput");
let searchResultss = document.getElementById("searchResults");
let spinners = document.getElementById("spinner");

function createAllTheResults(result) {

    let {
        title,
        link,
        description
    } = result;

    let divElement = document.createElement("div");

    divElement.classList.add("result-item");
    searchResultss.appendChild(divElement);

    let anchorE1 = document.createElement("a");
    anchorE1.href = link;
    anchorE1.target = "_blank";
    anchorE1.classList.add("result-title");
    anchorE1.textContent = title;
    divElement.appendChild(anchorE1);

    let breakE1 = document.createElement("br");
    divElement.appendChild(breakE1);


    let anchorE2 = document.createElement("a");
    anchorE2.classList.add("result-url");
    anchorE2.href = link;
    anchorE2.target = "_blank";
    anchorE2.textContent = link;
    divElement.appendChild(anchorE2);

    let breakE2 = document.createElement("br");
    divElement.appendChild(breakE2);

    let paragraph = document.createElement("p");
    paragraph.classList.add("link-description");
    paragraph.textContent = description;
    divElement.appendChild(paragraph);


}

function displayResults(searchResults) {
    spinners.classList.toggle("d-none");
    for (let result of searchResults) {
        createAllTheResults(result);
    }
}

function enterkey(event) {
    if (event.key === "Enter") {
        searchResultss.textContent = "";
        spinners.classList.toggle("d-none");
        let enteredKey = inputsS.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + enteredKey;
        let options = {
            method: "GET"
        }

        fetch(url, options)
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



inputsS.addEventListener("keydown", enterkey);