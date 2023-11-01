document.title = "Modifying the DOM"
console.log(document.title)


// function RGBcolor() {
//     let R = Math.floor(Math.random() * 256);
//     let G = Math.floor(Math.random() * 256);
//     let B = Math.floor(Math.random() * 256);
//     let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
//     console.log(randomcolor);
//     return randomcolor;
//   }
  
 
//   document.body.style.backgroundColor = RGBcolor();

// // Get a reference to the <body> element
// let body = document.body;

// // Get all the children elements of the <body>
// let children = body.children;

// // Convert the children collection to an array for easier manipulation
// let childrenArray = Array.from(children);

// // Loop through the children and display them
// childrenArray.forOf(childOfBody => {
//   console.log(childOfBody);

// });
for (const child of document.body.children) {
    console.log(child)
}