/*
*/
// Select the last child of the <ol> tag and put it at the beginning of the list
const list = document.querySelector('ol');
console.log(list);

const a = list.lastElementChild;
console.log(a);

list.removeChild(a);

const b = list.firstElementChild;
console.log(b);

list.insertBefore(a, b);
// Move the <h2> of the third section in the second one and vice-versa

const secondSection = document.querySelector('section:nth-of-type(2)');
console.log(secondSection);

const headerOne = secondSection.querySelector('h2');
console.log(headerOne);

const thirdSection = document.querySelector('section:nth-of-type(3)');
console.log(thirdSection);

const headerTwo = thirdSection.querySelector('h2');
console.log(headerTwo);

headerOne.remove;

headerTwo.remove;

secondSection.prepend(headerTwo);
console.log(secondSection);

thirdSection.prepend(headerOne);
console.log(thirdSection);


// Delete the last section from the DOM, we don't need it anyways

thirdSection.remove();
