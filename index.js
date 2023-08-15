let isScrolling
const website = document.getElementById("website")
const scrollbar = document.getElementById("scrollbar-tab")

window.onload = function(){
    let icons = document.getElementsByClassName("skills-icon")

    for (let i=0; i < icons.length; i++){
        icons[i].addEventListener("click", () => {
            if (icons[i].querySelector(".skills-icon-wrapper").style.transform == "rotateY(180deg)"){
                icons[i].querySelector(".skills-icon-wrapper").style.transform = "rotateY(0deg)"
            }
            else{
                icons[i].querySelector(".skills-icon-wrapper").style.transform = "rotateY(180deg)"
            }
        })
    }
}

document.getElementById("contact-form").addEventListener("submit", submitForm)

function submitForm(event){
    event.preventDefault()
    let url = "mailto:212whiteh@gmail.com?subject="+document.getElementById("contact-name").value + "&body="+document.getElementById("contact-message").value
    console.log(url)
    window.open(url)
}