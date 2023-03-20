// 2. Write a JavaScript program to print the contents of the current window.

// window.print();

const current_page = document.querySelector('#print_page');

current_page.addEventListener('click', () => {
     window.print()
})