const images = document.querySelectorAll(".zoom-img");

const modal = document.getElementById("imgModal");

const modalImg = document.getElementById("modalImg");

const closeBtn = document.querySelector(".close");


// OPEN IMAGE

images.forEach(img => {

  img.addEventListener("click", () => {

    modal.style.display = "block";

    modalImg.src = img.src;

  });

});


// CLOSE BUTTON

closeBtn.addEventListener("click", () => {

  modal.style.display = "none";

});


// CLICK OUTSIDE CLOSE

modal.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.style.display = "none";

  }

});