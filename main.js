const works = document.getElementById("works");
const selfIntroduction = document.getElementById("self-introduction");
const contact = document.getElementById("contact");
const showDisplay_ja = document.getElementById("ja");
const showDisplay_en = document.getElementById("en");
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const photo = document.getElementById("photo");

let number = 0;

nextButton.onclick = function () {
  number += 1;
  console.log(number);
  if (number === 1) {
    photo.src = "63695152.1c42b3eae39a05a87bca0ba4989a3a58.21101416.JPG";
  } else if (number === 2) {
    photo.src = "67297867.4e0784562cc5092999ed5067b4ee5dc5.22010110.JPG";
  } else if (number === 3) {
    photo.src = "IMG_9353.jpg";
  } else if (number === 4) {
    photo.src = "スクリーンショット 2022-02-05 21.36.36.png";
  } else if (number === 5) {
    number = 0;
    photo.src = "46248923.fc82ba76042cffa16bfa5c61706a49da.21102002.jpg";
  }
};

backButton.onclick = function () {
  number -= 1;
  console.log(number);
  if (number === -1) {
    number = 5;
    photo.src = "46248923.fc82ba76042cffa16bfa5c61706a49da.21102002.jpg";
  } else if (number === 1) {
    photo.src = "63695152.1c42b3eae39a05a87bca0ba4989a3a58.21101416.JPG";
  } else if (number === 2) {
    photo.src = "67297867.4e0784562cc5092999ed5067b4ee5dc5.22010110.JPG";
  } else if (number === 3) {
    photo.src = "IMG_9353.jpg";
  } else if (number === 4) {
    photo.src = "スクリーンショット 2022-02-05 21.36.36.png";
  } else if (number === 5) {
    photo.src = "46248923.fc82ba76042cffa16bfa5c61706a49da.21102002.jpg";
  }
};

works.onclick = function () {
  // showDisplay_ja.textContent = "作品一覧"
  showDisplay_en.textContent = "Works";
};

selfIntroduction.onclick = function () {
  // showDisplay_ja.textContent = "自己紹介"
  showDisplay_en.textContent = "About me";
};

contact.onclick = function () {
  // showDisplay_ja.textContent = "お問い合わせ"
  showDisplay_en.textContent = "Contact";
};
