

var age = prompt('d');
let wrapper = document.getElementById('top_block_wrapper');

if (age <= 16) {
    wrapper.classList.toggle('kids')
} else if (age > 16 && age < 40) {
    wrapper.classList.toggle('man')
} else {
    wrapper.classList.toggle('grand')
}
