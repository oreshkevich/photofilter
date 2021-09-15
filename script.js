const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const xxx = document.querySelector('.xxx');
const xxxx = document.querySelector('.xxxx');
const xxxxx = document.querySelector('.xxxxx');
const x = document.querySelector('.x');
const xx = document.querySelector('.xx');
const ss = document.querySelector('.ss');
const yyy = document.querySelector('.yyy');
const yyyy = document.querySelector('.yyyy');
const yyyyy = document.querySelector('.yyyyy');
const y = document.querySelector('.y');
const yy = document.querySelector('.yy');
const cc = document.querySelector('.cc');

xxx.oninput = () => yyy.value = xxx.value;
x.oninput = () => y.value = x.value;
xx.oninput = () => yy.value = xx.value;
xxxx.oninput = () => yyyy.value = xxxx.value;
xxxxx.oninput = () => yyyyy.value = xxxxx.value;
ss.oninput = () => cc.value = ss.value;

const photo = document.querySelector('.photo');
let btn = document.getElementById("btn");
let btnNorm = document.getElementById("btn-n");
let btnTwo = document.getElementById("btn-2");
let btnThree = document.getElementById("btn-3");
let btnFour = document.getElementById("btn-4");

function btnclk() {
  document.documentElement.style.setProperty(`--saturate`, 200 + `%`);
  document.documentElement.style.setProperty(`--invert`, 0 + `%`);
  document.documentElement.style.setProperty(`--sepia`, 0 + `%`);
  document.documentElement.style.setProperty(`--hue`, 0 + `deg`);
  
};
btn.onclick = btnclk;

function btnclkN() {
  document.documentElement.style.setProperty(`--saturate`, 0 + `%`);
  document.documentElement.style.setProperty(`--invert`, 0 + `%`);
  document.documentElement.style.setProperty(`--sepia`, 0 + `%`);
  document.documentElement.style.setProperty(`--hue`, 0 + `deg`);
  document.documentElement.style.setProperty(`--blur`, 0 + `px`);
};

btnNorm.onclick = btnclkN;

function btnclik() {
  document.documentElement.style.setProperty(`--invert`, 100 + `%`);
  document.documentElement.style.setProperty(`--saturate`, 0 + `%`);
  document.documentElement.style.setProperty(`--sepia`, 0 + `%`);
  document.documentElement.style.setProperty(`--hue`, 0 + `deg`);
};

btnTwo.onclick = btnclik;
function btnclkThree() {
  document.documentElement.style.setProperty(`--sepia`, 100 + `%`);
  document.documentElement.style.setProperty(`--invert`, 0 + `%`);
  document.documentElement.style.setProperty(`--saturate`, 0 + `%`);
  document.documentElement.style.setProperty(`--hue`, 0 + `deg`);
};

btnThree.onclick = btnclkThree;

function btncliсFour() {
  document.documentElement.style.setProperty(`--hue`, 170 + `deg`);
  document.documentElement.style.setProperty(`--sepia`, 0 + `%`);
  document.documentElement.style.setProperty(`--invert`, 0 + `%`);
  document.documentElement.style.setProperty(`--saturate`, 200 + `%`);
};

btnFour.onclick = btncliсFour;


// кнопка Next picture

const baseMorning = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/';
const baseDay = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/';
const baseEvening = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/';
const baseNight = 'https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/';
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
let i = 0;

const bt = document.querySelector('.btn-next');

function browsePicture(src) {
  const img = new Image();
  img.src = src;
  document.querySelector("img").src = `${src}`;
}

function getPicture() {
  const index = i % images.length;

  let date = new Date();
  let j = date.getHours();
  let imageSrc;
  if (j >= 0 && j < 6) imageSrc = baseNight + images[index];
  if (j >= 6 && j < 12) imageSrc = baseMorning + images[index];
  if (j >= 12 && j < 18) imageSrc = baseDay + images[index];
  if (j >= 18 && j <= 23) imageSrc = baseEvening + images[index];


  browsePicture(imageSrc);
  i++;
  bt.disabled = true;
  setTimeout(function () {
    bt.disabled = false
  }, 1000);
}
bt.addEventListener('click', getPicture);

// кнопка Load picture для загрузки изображения с компьютера
const fileInput = document.querySelector('input[type="file"]');
const imagePackage = document.querySelector('.image-container');

fileInput.addEventListener('change', function (e) {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.src = reader.result;
    imagePackage.innerHTML = "";
    imagePackage.append(img);
  }
  reader.readAsDataURL(file);
});

let res = document.querySelector('.btn-reset');

res.addEventListener('click', function () {
  parent.location.reload();

})