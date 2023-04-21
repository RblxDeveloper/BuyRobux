var isLoading = false;

document.getElementById('amount').addEventListener('change', function() {
    if (isLoading) {
        return;
    }

    var selectedOption = this.options[this.selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    var costElement = document.getElementById('cost');
    costElement.style.fontSize = '18px';
    costElement.style.color = 'green';

    costElement.style.display = 'none';
    document.getElementById('loadingIcon').classList.remove('hidden');

    var duration = Math.floor(Math.random() * (8000 - 3000 + 1)) + 4000;

    isLoading = true;

    setTimeout(function() {

      if (selectedValue === '0') {
          costElement.style.display = 'none';
      } else {
          var discountedPrice;
          var discountAmount = 0;
          if (selectedValue === '50') {
              discountedPrice = selectedValue - 10;
              discountAmount = 10;
          } else if (selectedValue === '170') {
              discountedPrice = selectedValue - 35;
              discountAmount = 35;
          } else if (selectedValue === '300') {
              discountedPrice = selectedValue - 75;
              discountAmount = 75;
          } else if (selectedValue === '399') {
              discountedPrice = selectedValue - 99;
              discountAmount = 99;
          } else if (selectedValue === '75') {
              discountedPrice = selectedValue - 15;
              discountAmount = 15;
          } else {
              discountedPrice = selectedValue;
          }
  
          costElement.innerHTML = `<h6>Cost: $${discountedPrice} <span class="badge bg-secondary">Discounted: $${discountAmount}</span></h6>`;
          costElement.style.display = 'inline-block';
          document.getElementById('loadingIcon').classList.add('hidden');
      }
  
      isLoading = false;
  
  }, duration);  
});

document.getElementById('sendButton').addEventListener('click', function(event) {
    if (isLoading) {
        event.preventDefault();
    }
});

const toastContainer = document.querySelector(".toast-container");
const closeBtn = document.querySelector(".toast-container .close");
const toastLink = document.querySelector(".toast-container a");
const sendButton = document.getElementById("sendButton");

let timeoutId;

sendButton.addEventListener("click", () => {
  toastContainer.classList.add("active");
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    toastContainer.classList.remove("active");
  }, 5000);
});

const stopDisplayingToast = () => {
  localStorage.setItem("displayToast", false);
  toastContainer.classList.remove("active");
  clearTimeout(timeoutId);
};

closeBtn.addEventListener("click", stopDisplayingToast);
toastLink.addEventListener("click", stopDisplayingToast);