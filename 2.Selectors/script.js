// const allImportantClass = document.querySelectorAll('.important')
// console.log(allImportantClass)

// allImportantClass.forEach(element => {
//     element.setAttribute('title', 'this is an important item.');
//     console.log(element.title)
// });

// const allImages = document.querySelectorAll('img');
// console.log(allImages);

// for (const item of allImages) {
//     if (item.className === 'important'){
//         item.style.display = 'none'
//     }
// }
// const allParagraphs = document.querySelectorAll('p')
// console.log(allParagraphs)

// for (const item of allParagraphs) {
//     if (item.hasAttribute("class")){
//     console.log(item.className);}
// }

const allParagraphs = document.querySelectorAll('p')
console.log(allParagraphs)

function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
    console.log(randomcolor);
    return randomcolor;
  }
  

for (const item of allParagraphs) {
    if (!item.hasAttribute("class")){
        item.style.color = RGBcolor();
    }
}