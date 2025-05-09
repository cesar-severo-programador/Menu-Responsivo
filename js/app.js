const dark = document.querySelector('.dark');
const nigth = document.querySelector('.nigth');
const light = document.querySelector('.light');
const sidebar = document.querySelector('.sidebar');
const activeLitem = document.querySelector('.list-item.active');


dark.addEventListener("click", () => {
    sidebar.className = "sidebar";
    activeLitem = "list-item active"
});

nigth.addEventListener("click", () => {
    sidebar.className = "sidebar nigth";
    activeLitem = "list-item active nigth"
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeLitem = "list-item active light"
});


