let btn = document.querySelector(".burger_btn");

btn.onclick = () => {
    let menu = document.querySelectorAll(".navbar_list li");
    menu[1].classList.toggle("list_item-active");
    menu[2].classList.toggle("list_item-active");
    menu[3].classList.toggle("list_item-active");
    menu[4].classList.toggle("list_item-active");
   btn.classList.toggle("burger_btn-active");
   
}