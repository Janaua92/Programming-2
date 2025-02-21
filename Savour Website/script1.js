document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded");

    const searchInput = document.getElementById("search-bar");
    const searchResults = document.getElementById("search-results");

    const items = [
        { name: "Spaghetti Carbonara", url: "Spaghrtticarbonara.html" },
        { name: "Margherita Pizza", url: "Margheritapizza.html" },
        { name: "Classic Italian Lasagna", url: "Lasagna.html" },
        { name: "Caprese Salad", url: "Capresesalad.html" },
        { name: "Panzanella Salad", url: "Panzanella.html" },
        { name: "Rustic Salad", url: "Rustic.html" },
        { name: "Tiramisu", url: "Tiramisu.html" },
        { name: "Cannoli", url: "Cannoli.html" },
        { name: "Panna Cotta", url: "Pannacotta.html" },
        { name: "Rudy's Pizza Napoletana", url: "https://www.rudyspizza.co.uk" },
        { name: "Zucco", url: "https://zucco.co.uk" },
        { name: "Buyers Club", url: "https://www.buyers-club.co.uk" }
    ];

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase();
            searchResults.innerHTML = ""; 

            if (query.length > 0) {
                const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));

                if (filteredItems.length > 0) {
                    searchResults.classList.add("show");
                    filteredItems.forEach(item => {
                        const li = document.createElement("li");
                        li.textContent = item.name;
                        li.classList.add("dropdown-item");
                        li.addEventListener("click", function () {
                            window.location.href = item.url;
                        });
                        searchResults.appendChild(li);
                    });
                } else {
                    searchResults.classList.remove("show");
                    searchResults.innerHTML = "<li class='dropdown-item text-muted'>No results found</li>";
                }
            } else {
                searchResults.classList.remove("show");
            }
        });

        document.addEventListener("click", function (e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.remove("show");
            }
        });
    } else {
        console.warn("Search bar not found on this page.");
    }

    // 🌙 DARK MODE FUNCTIONALITY (ENSURES IT CARRIES OVER TO RECIPE PAGES)
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    const darkModeToggle = document.getElementById("dark-mode-toggle");

    if (darkModeToggle) {
        console.log("Dark mode button found");

        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "☀️ Light Mode";
            darkModeToggle.classList.remove("btn-outline-light");
            darkModeToggle.classList.add("btn-outline-dark");
        }

        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
                darkModeToggle.textContent = "☀️ Light Mode";
                darkModeToggle.classList.remove("btn-outline-light");
                darkModeToggle.classList.add("btn-outline-dark");
            } else {
                localStorage.setItem("darkMode", "disabled");
                darkModeToggle.textContent = "🌙 Dark Mode";
                darkModeToggle.classList.remove("btn-outline-dark");
                darkModeToggle.classList.add("btn-outline-light");
            }
        });
    } else {
        console.warn("Dark mode button not found, but dark mode will still persist.");
    }
});
