function toHome() {
    window.scroll(0, 0)
}
function toAbout() {
    let aboutAnchor = document.getElementById("about")
    aboutAnchor.scrollIntoView()
}
function toPortfolio() {
    let aboutPortfolio = document.getElementById("portfolio")
    aboutPortfolio.scrollIntoView()
}
function toContact() {
    let aboutContact = document.getElementById("contact")
    aboutContact.scrollIntoView()
}

document.addEventListener('DOMContentLoaded', function() {
    let topOfDiv = document.getElementById("header").offsetTop
    window.onscroll = function() {
        let y = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if(y >= topOfDiv) {
            document.getElementById("header").classList.add("sticky")
        } else {
            document.getElementById("header").classList.remove("sticky")
        }
    }

    let portfolioUnits = document.getElementsByClassName("portfolio-unit")
    for(i=0; i < portfolioUnits.length; i++) {
        let image2 = portfolioUnits[i].firstElementChild.nextElementSibling
        let image1 = portfolioUnits[i].firstElementChild
        let unitContent = portfolioUnits[i].lastElementChild
        let classL = unitContent.classList
        portfolioUnits[i].addEventListener("mouseover", (event) => {
            image1.classList.add("hide")
            image2.classList.remove("hide")
        })
        portfolioUnits[i].addEventListener("mouseleave", (event) => {
            image1.classList.remove("hide")
            image2.classList.add("hide")
            if(classL != undefined || !classL.contains("hide")) {
                unitContent.classList.add("hide")
            }
        })
        portfolioUnits[i].addEventListener("click", (event) => {
            if(classL != undefined && classL.contains("hide")) {
                unitContent.classList.remove("hide")
            } else {
                unitContent.classList.add("hide")
            }
        })
    }
    
})
