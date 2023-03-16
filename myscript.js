





const square = document.querySelector('.square');

const iconButtons = document.querySelectorAll('.top-bun-btn, .bottom-bun-btn, .patty-btn, .ingredient-btn, .sauce-btn');

let clickedItems = [];

iconButtons.forEach(button => {
  button.addEventListener('click', () => {
    const iconImage = button.querySelector('img');
    const clonedImage = iconImage.cloneNode();
    clonedImage.width = '300';
    clickedItems.unshift(clonedImage); // Add the new item to the beginning of the array
    square.innerHTML = ''; // Clear the square
    clickedItems.forEach(item => {
      square.appendChild(item); // Add each item to the square
    });
  });
});

let openPopup = null;
        
function showPopup(imageUrl, message) {
  // Check if there is already an open pop-up
  if (openPopup) {
    openPopup.remove();
  }

  var popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="content">
      <img src="${imageUrl}" />
      <div class="message">${message}</div>
      <a href="#" class="close">&times;</a>
    </div>
  `;
  document.body.appendChild(popup);
  popup.querySelector('.close').addEventListener('click', function(e) {
    e.preventDefault();
    popup.remove();
    openPopup = null;
  });
  openPopup = popup;
}


document.querySelectorAll('.beef img','.product2 img','.products3 img' ,'.product4 img').forEach(function(img) {
  img.addEventListener('click', function() {
    showPopup(this.dataset.image, this.dataset.message);
  });
});

function showSorryMessage(message) {
  alert(message);
}