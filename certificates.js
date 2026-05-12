const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const images = document.querySelectorAll(".cert-img");
const close = document.querySelector(".close");

images.forEach(img => {
  img.onclick = () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  };
});

close.onclick = () => modal.style.display = "none";
