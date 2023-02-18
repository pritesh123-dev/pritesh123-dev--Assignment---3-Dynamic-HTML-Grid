var clothingHeading = document.createElement("h2");
clothingHeading.classList.add("h2-left")
clothingHeading.textContent = "Clothing for Men and Women";
clothingHeading.style.fontFamily = "montserrat, sans-serif";
document.body.appendChild(clothingHeading);

var section = document.createElement("section");
section.classList.add("flex-layout")
document.body.appendChild(section);
function cards(photo, heading, colorName, price) {
  var carDiv = document.createElement("div");
  carDiv.classList.add("divClass")
  var image = document.createElement("img");
  var cardHeading = document.createElement("h4");
  cardHeading.classList.add("headingInTheCard")
  var details = document.createElement("p");
  details.classList.add("detailsInCard");
  var amount = document.createElement("p");
  amount.classList.add("amountOnCard");
  image.setAttribute("src", photo);
  image.setAttribute("alt", "Image of a product");
  image.classList.add("imgClass");
  cardHeading.textContent = heading;
  details.textContent = colorName;
  amount.textContent = price;
  carDiv.appendChild(image);
  carDiv.appendChild(cardHeading);
  carDiv.appendChild(details);
  carDiv.appendChild(amount);
  section.appendChild(carDiv);
}
var photo1 =
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg";
var photo2 =
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg";
var photo3 =
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg";
var photo4 =
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg";
var photo5 =
  "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg";

var heading1 = "Men Navy Blue Solid Sweatshirt";
var heading2 = "Men Black MAMGP T7 Sweat Sporty Jacket";
var heading3 = "Men Black Action Parkview Lifestyle Shoes";
var heading4 = "Women Black Solid Lightweight Leather Jacket";
var heading5 = "Women Blue Solid Shirt Dress";

var colorName1 = "United Colors of Benetton";
var colorName2 = "Puma";
var colorName3 = "Hush Puppies";
var colorName4 = "BARESKIN";
var colorName5 = "SASSAFRAS";
var price1 = "Rs 2599";
var price2 = "Rs 7999";
var price3 = "Rs 6999";
var price4 = "Rs 9999";
var price5 = "Rs 5200";



cards(photo1, heading1, colorName1, price1);
cards(photo2, heading2, colorName2, price2);
cards(photo3, heading3, colorName3, price3);
cards(photo4, heading4, colorName4, price4);
cards(photo5, heading5, colorName5, price5);




//Second Section
var accessoriesHeading = document.createElement("h2");
accessoriesHeading.classList.add("h2-left")
accessoriesHeading.textContent = "Accessories for Men and Women";
accessoriesHeading.style.fontFamily = "montserrat, sans-serif";
document.body.appendChild(accessoriesHeading);

var sec = document.createElement("section");
sec.classList.add("flex-layout")
document.body.appendChild(sec);

function secCards(aphoto, aheading, acolorName, aprice) {
  var carDiv1 = document.createElement("div");
  carDiv1.classList.add("divClass")
  var image1 = document.createElement("img");
  var cardHeading1 = document.createElement("h4");
  cardHeading1.classList.add("headingInTheCard")
  var details1 = document.createElement("p");
  details1.classList.add("detailsInCard");
  var amount1 = document.createElement("p");
  amount1.classList.add("amountOnCard");
  image1.setAttribute("src", aphoto);
  image1.setAttribute("alt", "Image of a product");
  image1.classList.add("imgClass");
  cardHeading1.textContent = aheading;
  details1.textContent = acolorName;
  amount1.textContent = aprice;
  carDiv1.appendChild(image1);
  carDiv1.appendChild(cardHeading1);
  carDiv1.appendChild(details1);
  carDiv1.appendChild(amount1);
  sec.appendChild(carDiv1);
}

var aphoto1 = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg";
var aphoto2 = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg";
var aphoto3 = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg";
var aphoto4 = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg";
var aphoto5 = "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg";
var aheading1 = "Unisex Silver-Toned Series 3 Smart Watch";
var aheading2 = "Unisex Black & Green Reflex 2.0 Smart Band";
var aheading3 = "Unisex Black Galaxy Fit Fitness Band";
var aheading4 = "Gear IconX Black Cord-free Fitness Earbuds";
var aheading5 = "White 2nd Gen AirPods with Charging Case";
var acolorName1 = "Apple";
var acolorName2 = "Fastrack";
var acolorName3 = "Samsung";
var acolorName4 = "Samsung";
var acolorName5 = "Apple";
var aprice1 = "Rs 31999"
var aprice2 = "Rs 1999"
var aprice3 = "Rs 9990"
var aprice4 = "Rs 13990"
var aprice5 = "Rs 14999"


secCards(aphoto1, aheading1, acolorName1, aprice1);
secCards(aphoto2, aheading2, acolorName2, aprice2);
secCards(aphoto3, aheading3, acolorName3, aprice3);
secCards(aphoto4, aheading4, acolorName4, aprice4);
secCards(aphoto5, aheading5, acolorName5, aprice5);
