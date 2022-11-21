let body = document.querySelector("body")

// MOVEMENT OF THE STYORY SECTION

const nextStory = document.querySelector("#next");
const prevStory = document.querySelector("#back");
const slides = document.querySelector(".story-slides");

        nextStory.addEventListener("click", function () {
            slides.scrollLeft += slides.clientWidth + 10;
        })

        prevStory.addEventListener("click", function () {
            slides.scrollLeft -= slides.clientWidth + 10;
        })
    
    slides.onscroll = function() {
        setTimeout(() => {
    if (slides.scrollLeft <= 0) {
        prevStory.style.cssText= "opacity: 0; cursor: auto;"
    } else {
        prevStory.style.cssText= "opacity: 1; cursor: pointer;"
    } 
    if (slides.scrollLeft >= slides.clientWidth + 10 * 2) {
        nextStory.style.cssText= "opacity: 0; cursor: auto;"
    } else {
        nextStory.style.cssText= "opacity: 1; cursor: pointer;"
    }              
        }, 500);
     
    }


// MOVEMENT OF MULTIPLE POST
const nextPost = document.querySelector("#post-next");
const prevPost = document.querySelector("#post-back");
const postslides = document.querySelector(".multiple-post-body");
    
    nextPost.addEventListener("click", function () {
        postslides.scrollLeft += postslides.clientWidth;
    })
    
    prevPost.addEventListener("click", function () {
        postslides.scrollLeft -= postslides.clientWidth;
    })
        
    postslides.onscroll = function() {
        setTimeout(() => {
    if (postslides.scrollLeft <= 0) {
        prevPost.style.cssText= "opacity: 0; cursor: auto;"
    } else {
        prevPost.style.cssText= "opacity: 1; cursor: pointer;"
    } 
    if (postslides.scrollLeft >= postslides.clientWidth * 7) {
        nextPost.style.cssText= "opacity: 0; cursor: auto;"
    } else {
        nextPost.style.cssText= "opacity: 1; cursor: pointer;"
    }              
        }, 500);
         
    }    


// PROFILE DOWN ARROW DISPLAY
const chevron = document.querySelector(".down-arrow");
var scrollTrigger = 10;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    setTimeout(() => {
      chevron.style.cssText= "display: flex; opacity: 1;"  
    }, 500);
    
  }
}; 
    

// LOGO DROPDOWN
const logoDropdown = document.querySelector(".logo-dropdown")
const logoDown = document.querySelector(".horizonatl-logo-container")
logoDown.addEventListener("click", () =>{
    logoDropdown.classList.toggle("dropdown-visible")
})


// SAVE BTN ACTIVE
const saveBtn = document.querySelectorAll(".save-btn")
saveBtn[0].addEventListener("click", function () {
    saveBtn[0].classList.toggle("saved")
})
saveBtn[1].addEventListener("click", function () {
    saveBtn[1].classList.toggle("saved")
})
saveBtn[2].addEventListener("click", function () {
    saveBtn[2].classList.toggle("saved")
})
saveBtn[3].addEventListener("click", function () {
    saveBtn[3].classList.toggle("saved")
})
saveBtn[4].addEventListener("click", function () {
    saveBtn[4].classList.toggle("saved")
})
saveBtn[5].addEventListener("click", function () {
    saveBtn[5].classList.toggle("saved")
})
saveBtn[6].addEventListener("click", function () {
    saveBtn[6].classList.toggle("saved")
})
saveBtn[7].addEventListener("click", function () {
    saveBtn[7].classList.toggle("saved")
})


// POST FEED THREE DOT(MORE OPTION)
const moreOptionBtn = document.querySelectorAll(".more-option");
const optionModal = document.querySelectorAll(".more-option-modal");
const cancelOptionBtn = document.querySelectorAll(".cancel-more-option");

moreOptionBtn[0].addEventListener("click", function () {
    optionModal[0].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[1].addEventListener("click", function () {
    optionModal[1].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[2].addEventListener("click", function () {
    optionModal[2].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[3].addEventListener("click", function () {
    optionModal[3].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[4].addEventListener("click", function () {
    optionModal[4].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[5].addEventListener("click", function () {
    optionModal[5].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[6].addEventListener("click", function () {
    optionModal[6].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})
moreOptionBtn[7].addEventListener("click", function () {
    optionModal[7].classList.add('visible')
    body.style.cssText= "overflow: hidden;"
})


cancelOptionBtn[0].addEventListener("click", function optioncancelled() {
    optionModal[0].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[1].addEventListener("click", function optioncancelled() {
    optionModal[1].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[2].addEventListener("click", function optioncancelled() {
    optionModal[2].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[3].addEventListener("click", function optioncancelled() {
    optionModal[3].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[4].addEventListener("click", function optioncancelled() {
    optionModal[4].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[5].addEventListener("click", function optioncancelled() {
    optionModal[5].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[6].addEventListener("click", function optioncancelled() {
    optionModal[6].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})
cancelOptionBtn[7].addEventListener("click", function optioncancelled() {
    optionModal[7].classList.remove('visible')
    body.style.cssText= "overflow: auto;"
})


// UNFOLLOW (FEED POST)
const exitUnfollow = document.querySelectorAll(".exit-unfollow");
const unfollowModal = document.querySelectorAll(".unfollow-modal");
const unfollowBtn = document.querySelectorAll(".unfollow-btn");


exitUnfollow[0].addEventListener("click", function closing() {
    unfollowModal[0].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[1].addEventListener("click", function closing() {
    unfollowModal[1].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[2].addEventListener("click", function closing() {
    unfollowModal[2].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[3].addEventListener("click", function closing() {
    unfollowModal[3].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[4].addEventListener("click", function closing() {
    unfollowModal[4].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[5].addEventListener("click", function closing() {
    unfollowModal[5].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[6].addEventListener("click", function closing() {
    unfollowModal[6].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})
exitUnfollow[7].addEventListener("click", function closing() {
    unfollowModal[7].style.cssText= "display: none;"
    body.style.cssText= "overflow: visible;"
})


unfollowBtn[0].addEventListener("click", function () {
    unfollowModal[0].style.cssText= "display: flex;"
    optionModal[0].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[1].addEventListener("click", function () {
    unfollowModal[1].style.cssText= "display: flex;"
    optionModal[1].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[2].addEventListener("click", function () {
    unfollowModal[2].style.cssText= "display: flex;"
    optionModal[2].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[3].addEventListener("click", function () {
    unfollowModal[3].style.cssText= "display: flex;"
    optionModal[3].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[4].addEventListener("click", function () {
    unfollowModal[4].style.cssText= "display: flex;"
    optionModal[4].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[5].addEventListener("click", function () {
    unfollowModal[5].style.cssText= "display: flex;"
    optionModal[5].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[6].addEventListener("click", function () {
    unfollowModal[6].style.cssText= "display: flex;"
    optionModal[6].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})
unfollowBtn[7].addEventListener("click", function () {
    unfollowModal[7].style.cssText= "display: flex;"
    optionModal[7].style.cssText= "display: none;"
    body.style.cssText= "overflow: hidden;"
})

