let burger_menu = document.getElementById("burger_menu");
let xMenu = document.getElementById("xMenu");
let navList = document.querySelector("header nav ul")
let navListItem = document.querySelectorAll("header nav ul li")

burger_menu.addEventListener("click",()=>{
    navList.classList.add("showList")

});
xMenu.addEventListener("click",()=>{
    navList.classList.remove("showList")

});

// console.log(navListItem)

navListItem.forEach((e)=>{
    e.addEventListener("click",()=>{
        navList.classList.remove("showList")
    
    });


})