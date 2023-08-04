let isScrolling
const website = document.getElementById("website")
const scrollbar = document.getElementById("scrollbar-tab")


function aboutmeButtonHover(event){
    document.getElementById("hand").classList.add("wave");
}

function aboutmeButtonLeave(event){
    document.getElementById("hand").classList.remove("wave");
}

function contactButtonHover(event){
    document.getElementById("envelope-letter").classList.add("envelope-raised")
}

function contactButtonLeave(event){
    document.getElementById("envelope-letter").classList.remove("envelope-raised")
}








scrollbar.style.height = getScrollbarHeight()

website.addEventListener("scroll", (event)=>{
    isScrolling = true;
})



setInterval(handleScroll, 10)


function handleScroll(){
    if (isScrolling){
        isScrolling = false;
        scrollbar.style.height =  getScrollbarHeight()


        //switch (parseInt(scrollbar.style.height) / window.innerHeight){
        switch (getScrollbarRange()){
            case 0.2:
                scrollbar.style.background = "var(--white)"
            case 0.4:
                scrollbar.style.background = "var(--yellow)"
            case 0.6:
                scrollbar.style.background = "var(--green)"
            case 0.8:
                scrollbar.style.background = "var(--red)"
            case 1:
                scrollbar.style.background = "var(--blue)"
        }
        
    }
    
}

function getScrollbarHeight(){
    return ((website.scrollTop+window.innerHeight)/getTotalScreenSize())*window.innerHeight + "px"
}

function getTotalScreenSize(){
    let total = 0
    website.childNodes.forEach((node)=>{
        
        total += node.clientHeight | 0
    })
    return total
}

function getScrollbarRange(){
    
}