//* Redirect to respective campaign/character creation
//* Only selects if button exists
if (document.querySelector(".campaign-btn")) {
   document
    .querySelector(".campaign-btn")
    .addEventListener("click", () => {
        document.location.replace("/campaigncreate");
    }); 
}

if (document.querySelector(".character-btn")) {
   document
    .querySelector(".character-btn")
    .addEventListener("click", () => {
        document.location.replace("/charcreate");
    }); 
}
