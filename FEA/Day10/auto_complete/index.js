const searchInput = document.getElementById("searchBox");
const searchResultContainer = document.getElementById("result-container");

searchInput.addEventListener("input", () => {
    const matchedCountry = searchCountries(searchInput.value)
    searchResultContainer.innerHTML = ""
    matchedCountry.forEach(country => {
        const p = document.createElement("p")
        p.textContent = country.name
        searchResultContainer.appendChild(p)
    })
})

function searchCountries(keyword) {
    return countries.filter(country => country.name.toLowerCase().startsWith(keyword.toLowerCase()))
}