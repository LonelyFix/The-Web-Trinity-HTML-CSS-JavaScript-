function button1(){
    let primer = document.querySelector(".primer")
    primer.textContent = "Кнопка нажата"
    
    

}
let primer = document.querySelector(".primer")
primer.addEventListener("click", button1)
function button2(){
    document.body.classList.toggle('dark-theme');
}
let background = document.querySelector(".change-theme")
background.addEventListener("click", button2)