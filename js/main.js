function openMenu() {
    document.getElementById("navMenu").classList.toggle("classOpen");
    document.getElementById("burger").classList.toggle("classOpen");
}
const container = document.getElementById("burger")
const x = document.getElementById('burger');
x.onclick = openMenu
container.onclick = openMenu;
