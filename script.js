//initalize filterTabs that selects elements with selected filters
const filterTabs = document.querySelectorAll(".tabs[data-filter][data-value]");
//initialize patterns that when its called later gets elements with selected class and returns the array
const patterns = document.querySelectorAll(".pattern-card");

//intialize variable currentMedium and currentType to be called later to check data types for filter
let currentMedium = '';
let currentType = '';

//function that highlights filters by toggling the css to have a bar around the <div> class holding that filter
function highlightFilter() {
    filterTabs.forEach(function(tab) {
        //clears any active filter
        tab.classList.remove("active");

        //checks if filter tab is selected and activates it if true for medium and type
        if (tab.dataset.filter === "medium" && tab.dataset.value === currentMedium) {
            tab.classList.add("active");
        }
        if (tab.dataset.filter === "type" && tab.dataset.value === currentType) {
            tab.classList.add("active");
        }
    });
}

//fucntion that applies the filters to the main window
function applyFilters() {
    patterns.forEach(function(card) {
        let showCard = true;

        //checks if the selected medium filter matches each pattern 
        if (currentMedium !== "" && card.dataset.medium !== currentMedium) {
            showCard = false;
        }

        //checks if the selected type filter matches each pattern
        if (currentType !== "" && card.dataset.type !== currentType) {
            showCard = false;
        }

        //toggles wether or not the pattern is shown on the main screen 
        if (showCard) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    highlightFilter();
}

//use event listner to toggle the filters on or off
filterTabs.forEach(function(tab) {
    tab.addEventListener("click", function() {

        //toggles wether or not the medium filter is on
        if (tab.dataset.filter === "medium") {
            if (currentMedium === tab.dataset.value) {
                currentMedium = "";
            } else {
                currentMedium = tab.dataset.value;
            }
        }

        //toggles wether or not the type filter is on 
        if (tab.dataset.filter === "type") {
            if (currentType === tab.dataset.value) {
                currentType = "";
            } else {
                currentType = tab.dataset.value;
            }
        }

        applyFilters();
    });
});

applyFilters();