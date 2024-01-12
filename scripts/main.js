window.addEventListener("load", () => {
  fetchData();
});

let mydata;
function fetchData() {
  let data = axios.get("/data/elements.json");
  data
    .then((res) => {
      displayTable(res.data);
      searchElements(res.data);
    })
    .catch((err) => {});
}





// ******************************************* Display Data*********************************************
const container = document.getElementById("periodic-table-grid-container");
function displayTable(data) {
  container.innerHTML = "";
  data.forEach((element) => {
  
    const newDiv = document.createElement("div");
    newDiv.classList.add("element");
    newDiv.innerHTML = `
    <a target="_blank" href="/pages/element-details.html?element_name=${
        element.name
      }">
      <div class="element-number">${element.number}</div>
      <div class="element-symbol">${element.symbol}</div>
      <div class="element-name">${element.name}</div>
      <div class="element-mass">${element.atomic_mass}</div>
      </a>`
      newDiv.classList.add(getCategoryClassName(element.category))
      newDiv.style.gridColumn = element.xpos;
      newDiv.style.gridRow = element.ypos;

      container.appendChild(newDiv);
      
      console.log(filteredData);

      
      
     })

      
}






const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.getElementById("nav-bar");

const toggleNavbar = () => {
  navbar.classList.toggle("active");
};









hamburgerIcon.addEventListener("click", () => {
  toggleNavbar();
});

function getCategoryClassName(categoryName) {
  return categoryName.split(" ").join("_");
}

let filteredData = [];


function searchElements(data) {
  const searchInput = document.getElementById("search-bar");
  searchInput.addEventListener("input", (event) => {
    if (event.target.value === "") {
      displayTable(data);
    } else {
      const filteredelements = data.filter((element) => {
        if (
          element.name
            .trim()
            .toLowerCase()
            .includes(searchInput.value.toLowerCase()) &&
          searchInput.value !== ""
        ) {
          return element.name;
        }
      });


      if (filteredelements.length < 1) {
        displayTable(data);
      } else {
        
        displayTable(filteredelements);
        tempfuntion(data);
        
      }
      filteredData = filteredelements;
    }
  });

}





