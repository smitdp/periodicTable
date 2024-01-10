const mydata = [
    {
        "name": "Hydrogen",
        "appearance": "colorless gas",
        "atomic_mass": 1.008,
        "boil": 20.271,
        "category": "diatomic nonmetal",
        "density": 0.08988,
        "discovered_by": "Henry Cavendish",
        "melt": 13.99,
        "molar_heat": 28.836,
        "named_by": "Antoine Lavoisier",
        "number": 1,
        "period": 1,
        "group": 1,
        "phase": "Gas",
        "source": "https://en.wikipedia.org/wiki/Hydrogen",
        "bohr_model_image": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen_srp_th.png",
        "bohr_model_3d": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_001_hydrogen/element_001_hydrogen.glb",
        "spectral_img": "https://en.wikipedia.org/wiki/File:Hydrogen_Spectra.jpg",
        "summary": "Hydrogen is a chemical element with chemical symbol H and atomic number 1. With an atomic weight of 1.00794 u, hydrogen is the lightest element on the periodic table. Its monatomic form (H) is the most abundant chemical substance in the Universe, constituting roughly 75% of all baryonic mass.",
        "symbol": "H",
        "xpos": 1,
        "ypos": 1,
        "wxpos": 1,
        "wypos": 1,
        "shells": [
            1
        ],
        "electron_configuration": "1s1",
        "electron_configuration_semantic": "1s1",
        "electron_affinity": 72.769,
        "electronegativity_pauling": 2.2,
        "ionization_energies": [
            1312
        ],
        "cpk-hex": "ffffff",
        "image": {
            "title": "Vial of glowing ultrapure hydrogen, H2. Original size in cm: 1 x 5",
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Hydrogenglow.jpg",
            "attribution": "User:Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/hydrogen.php"
        },
        "block": "s"
    },
    {
        "name": "Helium",
        "appearance": "colorless gas, exhibiting a red-orange glow when placed in a high-voltage electric field",
        "atomic_mass": 4.0026022,
        "boil": 4.222,
        "category": "noble gas",
        "density": 0.1786,
        "discovered_by": "Pierre Janssen",
        "melt": 0.95,
        "molar_heat": null,
        "named_by": "Unknown",
        "number": 2,
        "period": 1,
        "group": 18,
        "phase": "Gas",
        "source": "https://en.wikipedia.org/wiki/Helium",
        "bohr_model_image": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium_srp_th.png",
        "bohr_model_3d": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_002_helium/element_002_helium.glb",
        "spectral_img": "https://en.wikipedia.org/wiki/File:Helium_spectrum.jpg",
        "summary": "Helium is a chemical element with symbol He and atomic number 2. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas that heads the noble gas group in the periodic table. Its boiling and melting points are the lowest among all the elements.",
        "symbol": "He",
        "xpos": 18,
        "ypos": 1,
        "wxpos": 32,
        "wypos": 1,
        "shells": [
            2
        ],
        "electron_configuration": "1s2",
        "electron_configuration_semantic": "1s2",
        "electron_affinity": -48,
        "electronegativity_pauling": null,
        "ionization_energies": [
            2372.3,
            5250.5
        ],
        "cpk-hex": "d9ffff",
        "image": {
            "title": "Vial of glowing ultrapure helium. Original size in cm: 1 x 5",
            "url": "https://upload.wikimedia.org/wikipedia/commons/0/00/Helium-glow.jpg",
            "attribution": "Jurii, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/helium.php"
        },
        "block": "s"
    },
    {
        "name": "Lithium",
        "appearance": "silvery-white",
        "atomic_mass": 6.94,
        "boil": 1603,
        "category": "alkali metal",
        "density": 0.534,
        "discovered_by": "Johan August Arfwedson",
        "melt": 453.65,
        "molar_heat": 24.86,
        "named_by": "Unknown",
        "number": 3,
        "period": 2,
        "group": 1,
        "phase": "Solid",
        "source": "https://en.wikipedia.org/wiki/Lithium",
        "bohr_model_image": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium_srp_th.png",
        "bohr_model_3d": "https://storage.googleapis.com/search-ar-edu/periodic-table/element_003_lithium/element_003_lithium.glb",
        "spectral_img": null,
        "summary": "Lithium (from Greek:λίθος lithos, \"stone\") is a chemical element with the symbol Li and atomic number 3. It is a soft, silver-white metal belonging to the alkali metal group of chemical elements. Under standard conditions it is the lightest metal and the least dense solid element.",
        "symbol": "Li",
        "xpos": 1,
        "ypos": 2,
        "wxpos": 1,
        "wypos": 2,
        "shells": [
            2,
            1
        ],
        "electron_configuration": "1s2 2s1",
        "electron_configuration_semantic": "[He] 2s1",
        "electron_affinity": 59.6326,
        "electronegativity_pauling": 0.98,
        "ionization_energies": [
            520.2,
            7298.1,
            11815
        ],
        "cpk-hex": "cc80ff",
        "image": {
            "title": "0.5 Grams Lithium under Argon. Original size of the largest piece in cm: 0.3 x 4",
            "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/0.5_grams_lithium_under_argon.jpg",
            "attribution": "Hi-Res Images ofChemical Elements, CC BY 3.0 <https://creativecommons.org/licenses/by/3.0>, via Wikimedia Commons, source: https://images-of-elements.com/lithium.php"
        },
        "block": "s"
    }]
window.addEventListener("load", () => {
    fetchData();
})


const hamburgerIcon = document.getElementById("hamburger-icon");
const navbar = document.getElementById("nav-bar")

const toggleNavbar = () => {
    navbar.classList.toggle("active");
}

hamburgerIcon.addEventListener("click", () => {
    toggleNavbar();
})





// searchInput.addEventListener("input", () => {
//     // console.log(searchInput.value);

//     const filteredelements= myData.filter((element) => {
//         if (element.name.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value !== "") { 
//             return element.name;
//         }
//     })


//     console.log(filteredelements);
// })




function fetchData() {
    let data = axios.get("/data/elements.json");
    data
        .then((res) => {
            displayTable(res.data);
            searchElements(res.data);
        })
        .catch((err) => {
        })


}


const container = document.getElementById("periodic-table-grid-container");


function displayTable(data) {
    // console.log(data);
    container.innerHTML = "";
    data.forEach(element => {
        container.innerHTML += `
                    <div class="element ${getCategoryClassName(element.category)} ${element.block}" style='grid-column: ${element.xpos}; grid-row:${element.ypos}'">
                    <a target="_blank" href="/pages/element-details.html?element_name=${element.name}">
                    <div class="element-number">${element.number}</div>
                    <div class="element-symbol">${element.symbol}</div>
                    <div class="element-name">${element.name}</div>
                    <div class="element-mass">${element.atomic_mass}</div>
                    </a>
                    </div>
                    `

    });
}


function getCategoryClassName(categoryName) {
    return categoryName.split(" ").join("_");
}






function searchElements(data) {
    const searchInput = document.getElementById("search-bar");
    searchInput.addEventListener("input", (event) => {

        if(event.target.value === "") {
            displayTable(data)
        } else {
            const filteredelements = data.filter((element) => {
                if (element.name.toLowerCase().startsWith(searchInput.value.toLowerCase()) && searchInput.value !== "") {
                    return element.name;
                }
            })
            displayTable(filteredelements);
        }

    })
}



