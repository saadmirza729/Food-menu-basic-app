const resturantMenu = [
  {
    title: "Chicken Biryani",
    price: 370,
    description:
      "Indulge in the aromatic blend of fragrant basmati rice and succulent marinated chicken, slow-cooked to perfection with a medley of exotic spices.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1646911676-Chicken-Biryani-min.jpg%3Fq%3D10&w=640&q=75",
    category: "Lunch",
  },
  {
    title: "Chicken Handi",
    price: 1300,
    description:
      "Experience the rich and aromatic flavors of our Chicken Handi, a traditional South Asian dish that combines tender chicken pieces cooked in a luscious blend of spices, yogurt, and tomatoes.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1646911817-Chicken-Handi-min.jpg%3Fq%3D10&w=640&q=75",
    category: "Lunch",
  },
  {
    title: "Mutton Karahi",
    price: 2350,
    description:
      "Savor the bold and robust flavors of our Mutton Karahi, a beloved South Asian dish that features tender mutton pieces cooked in a rich and spicy tomato-based gravy.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1646912190-food-center-thumbnails_0030_FoodCenter_HS_White-34.jpg-min.jpg%3Fq%3D10&w=640&q=75",
    category: "Dinner",
  },
  {
    title: "B.B.Q Wings",
    price: 480,
    description:
      "Indulge in the irresistible flavors of our B.B.Q Wings, a mouthwatering treat that combines tender chicken wings marinated in a smoky and tangy barbecue sauce.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1646911464-BBQ-wings-min.jpg%3Fq%3D10&w=640&q=75",
    category: "Dinner",
  },
  {
    title: "Finger Fish",
    price: 740,
    description:
      "Experience the crispy and flavorful delight of our Finger Fish, a delectable dish that features tender fish fillets coated in a seasoned breadcrumb mixture and fried to golden perfection.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1762326347-istockphoto-1408056770-612x612.jpg%3Fq%3D10&w=640&q=75",
    category: "Snacks",
  },
  {
    title: "Loaded Fries",
    price: 580,
    description:
      "Indulge in the ultimate comfort food experience with our Loaded Fries, a mouthwatering dish that takes crispy golden fries to the next level.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1662117084-loaded%20fries.webp%3Fq%3D10&w=640&q=75",
    category: "Snacks",
  },
  {
    title: "Fries",
    price: 260,
    description:
      "Indulge in the crispy and golden perfection of our Fries, a classic and beloved side dish that never fails to satisfy.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1762246788-13030718-cddd-4ed0-9cbd-9639afef593d_7a966540-e630-4328-851d-347c46f019a3.avif%3Fq%3D10&w=640&q=75",
    category: "Snacks",
  },
  {
    title: "Chicken Corn Soup",
    price: 300,
    description:
      "Experience the comforting warmth of our Chicken Corn Soup, a delicious and hearty dish that combines tender chicken pieces, sweet corn kernels, and a flavorful broth.",
    imgUrl:
      "https://order.foodcentre.pk/_next/image?url=https%3A%2F%2Fassets.indolj.io%2Fupload%2F1762247046-63325af144e5c.jpg%3Fq%3D10&w=640&q=75",
    category: "Snacks",
  },
];

menu();

// function allMenu() { 
//     // It will return always an Array
//   // It will give you exact lenght of the array as the original array

//   const myMenuHTMLForBody = resturantMenu.map(function (menu) {
//     const myMenuHTML = ` <div class="foodItem">
//             <div class="imgDiv">
//                 <img src="${menu.imgUrl}" alt="Eggs Benedict">
//             </div>
//             <div class="titleAndPrice">
//                 <h2>${menu.title}</h2>
//             <h3>₹${menu.price}</h3>
//                 <p>${menu.description}</p>
//             </div>
//         </div>`;

//     return myMenuHTML;
//   });

//   document.querySelector("#foodItems").innerHTML = myMenuHTMLForBody.join("");
// }

// function lunch() {
//   // It will return always an Array
//   // It will give you the filtered (length of data) based on the condition you have given in the function
//   // will only return if the condition is true otherwise it will not return that item in the array

//   const myMenuHTMLForBody = resturantMenu
//     .filter(function (menu) {
//         return menu.category == "Lunch";
//     })
//     .map(function (menu) {
//       const myMenuHTML = ` <div class="foodItem">
//             <div class="imgDiv">
//                 <img src="${menu.imgUrl}" alt="Eggs Benedict">
//             </div>
//             <div class="titleAndPrice">
//                 <h2>${menu.title}</h2>
//             <h3>₹${menu.price}</h3>
//                 <p>${menu.description}</p>
//             </div>
//         </div>`;

//       return myMenuHTML;
//     });

//   document.querySelector("#foodItems").innerHTML = myMenuHTMLForBody.join("");
// }

// function snacks() {
//       // It will return always an Array
//   // It will give you the filtered (length of data) based on the condition you have given in the function
//   // will only return if the condition is true otherwise it will not return that item in the array

//   const myMenuHTMLForBody = resturantMenu
//     .filter(function (menu) {
//         return menu.category == "Snacks";
//     })
//     .map(function (menu) {
//       const myMenuHTML = ` <div class="foodItem">
//             <div class="imgDiv">
//                 <img src="${menu.imgUrl}" alt="Eggs Benedict">
//             </div>
//             <div class="titleAndPrice">
//                 <h2>${menu.title}</h2>
//             <h3>₹${menu.price}</h3>
//                 <p>${menu.description}</p>
//             </div>
//         </div>`;

//       return myMenuHTML;
//     });

//   document.querySelector("#foodItems").innerHTML = myMenuHTMLForBody.join("");
// }
// function dinner() {
//       // It will return always an Array
//   // It will give you the filtered (length of data) based on the condition you have given in the function
//   // will only return if the condition is true otherwise it will not return that item in the array

//   const myMenuHTMLForBody = resturantMenu
//     .filter(function (menu) {
//         return menu.category == "Dinner";
//     })
//     .map(function (menu) {
//       const myMenuHTML = ` <div class="foodItem">
//             <div class="imgDiv">
//                 <img src="${menu.imgUrl}" alt="Eggs Benedict">
//             </div>
//             <div class="titleAndPrice">
//                 <h2>${menu.title}</h2>
//             <h3>₹${menu.price}</h3>
//                 <p>${menu.description}</p>
//             </div>
//         </div>`;

//       return myMenuHTML;
//     });

//   document.querySelector("#foodItems").innerHTML = myMenuHTMLForBody.join("");
// }


function menu(category) {

  // It will return always an Array
  // It will give you the filtered (length of data) based on the condition you have given in the function
  // will only return if the condition is true otherwise it will not return that item in the array

  const myMenuHTMLForBody = resturantMenu
    .filter(function (menu) {
        if (category) {
        return menu.category.toLowerCase() == category.toLowerCase();
        } else {
            return true;
        }
    })
    .map(function (menu) {
      const myMenuHTML = ` <div class="foodItem">
            <div class="imgDiv">
                <img src="${menu.imgUrl}" alt="Eggs Benedict">
            </div>
            <div class="titleAndPrice">
                <h2>${menu.title}</h2>
            <h3>${menu.price}/-</h3>
                <p>${menu.description}</p>
            </div>
        </div>`;

      return myMenuHTML;
    });

  document.querySelector("#foodItems").innerHTML = myMenuHTMLForBody.join("");




//   if (category === 'lunch') {
//     lunch();
//   } else if (category === 'snacks') {
//     snacks();
//   } else if (category === 'dinner') {
//     dinner();
//   } else {
//     allMenu();
//   }
}
