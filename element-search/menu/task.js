const menuItems = Array.from(document.querySelectorAll(".menu__link"));

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].onclick = openMenu;
};

function openMenu () {
  if (this.closest(".menu__item").querySelector(".menu").classList.contains("menu_active")) {
    this.closest(".menu__item").querySelector(".menu").classList.remove("menu_active");
    return false;
  }
  else {
    if (document.querySelector(".menu_active")) {
    document.querySelector(".menu_active").classList.remove("menu_active");
    };
    this.closest(".menu__item").querySelector(".menu").classList.add("menu_active");
    return false;
  }
};