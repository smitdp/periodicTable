const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("element_name");

document.getElementById("heading").innerHTML = searchQuery;


window.addEventListener("load", () => {
    fetchData();
})

let dataObject;

function fetchData() {
    let data = axios.get("/data/elements.json");

    data
        .then((res) => {
            dataObject = res.data;

            displayData();

            
        })
        .then((res) => {
        })
}

function displayData() {
    dataObject.forEach(element => {
        if(element.name == searchQuery) {
            // document.getElementById("element-info").innerHTML += ""
        }
    });
}

