const tabList = Array.from(document.querySelectorAll(".tab"));
const contentList = Array.from(document.querySelectorAll(".tab__content"));

tabList.forEach((el) => {
  el.addEventListener("click", () => {
    tabList.forEach((el) => {el.classList.remove("tab_active");});
    contentList.forEach((el) => {el.classList.remove("tab__content_active");});
    const index = tabList.indexOf(el);
    el.classList.add("tab_active");
    contentList[index].classList.add("tab__content_active");
  })
})