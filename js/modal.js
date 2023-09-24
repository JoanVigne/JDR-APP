let closeButtons = document.querySelectorAll(".close");
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", closeModals);
});

function closeModals() {
  console.log("close Modals function");
  let modals = document.querySelectorAll(".modal");
  console.log("modals : ", modals);
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
}
