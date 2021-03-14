 const interests = Array.from(document.querySelectorAll(".interest"));
 interests.forEach((el) => {
   el.querySelector(".interest__check").addEventListener("click", autoChecking);
 })

 function autoChecking () {
   let extraInterests = Array.from(this.closest(".interest").querySelectorAll(".interests_active .interest__check"));
   console.log(extraInterests);
   if (this.checked) {
     extraInterests.forEach((elem) => {elem.checked = true})
   }
   else {extraInterests.forEach((elem) => {elem.checked = false})}
 }