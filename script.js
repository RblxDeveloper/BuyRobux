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

        costElement.innerHTML = 'Costs: ' + '<i class="fa-solid fa-coins"></i> ' + selectedValue;
        costElement.style.display = 'inline-block';
        document.getElementById('loadingIcon').classList.add('hidden');

        // if (selectedValue === '0') {
        //     costElement.style.display = 'none';
        // } else {
        //     if (selectedValue === '20') {
        //         // Apply 50% discount for value 20
        //         var discountedPrice = selectedValue * 0.5;
        //         var discountElement = document.createElement('span');
        //         discountElement.style.textDecoration = 'line-through';
        //         discountElement.innerHTML = ' £' + discountedPrice;
        //         costElement.appendChild(discountElement);
        //     }
        // }

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