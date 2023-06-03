// get all the cards
const cards = document.querySelectorAll('.card');

// loop over each card
cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('.card-img-top').src;
    const title = card.querySelector('.card-title').textContent;
    const text = card.querySelector('.card-text').textContent;

    document.getElementById('modalImage').src = img;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalText').textContent = text;

    // show the modal
    const myModal = new bootstrap.Modal(document.getElementById('productModal'), {});
    myModal.show();
  });
});
