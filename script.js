var isLoading = false; // Flag to track loading status

document.getElementById('amount').addEventListener('change', function() {
    if (isLoading) {
        return; // If already loading, do nothing
    }

    var selectedOption = this.options[this.selectedIndex];
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    var costElement = document.getElementById('cost');
    costElement.style.fontSize = '18px';
    costElement.style.color = 'green';

    // Hide cost and show loading icon
    costElement.style.display = 'none';
    document.getElementById('loadingIcon').classList.remove('hidden');

    // Generate random duration between 4 to 10 seconds
    var duration = Math.floor(Math.random() * (8000 - 3000 + 1)) + 4000;

    isLoading = true; // Set loading status to true

    // Delay for the random duration
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

        isLoading = false; // Set loading status to false

    }, duration);
});

document.getElementById('sendButton').addEventListener('click', function(event) {
    if (isLoading) {
        event.preventDefault(); // Prevent form submission while loading
        // You can also show an error message to the user indicating that the form is still loading
    }
});