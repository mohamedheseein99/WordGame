let alerte = document.querySelector("alert");
let ar = document.querySelector(".ar");
let en = document.querySelector(".en");
let check = document.querySelector(".check");
let tit = document.querySelector(".tit");
let numperOfHint = 2;
document.querySelector(".hint span").innerHTML = numperOfHint;
// AR Function
ar.onclick = function () {
  tit.innerHTML = "لعبة تخمين أسماء سورة القرآن الكريم ، بدون (ال) ";
  this.parentElement.style.display = "none";
  generat();
  check.addEventListener("click", handLess);
  hint.addEventListener("click", getHint);
};
// EN Function
en.onclick = function () {
  tit.innerHTML = "words Game Name ";
  // window.alert("الله يسامحك يا راجل , لا كدا طيب");
  this.parentElement.style.display = "none";
  // setTimeout(() => {
  //   window.alert(
  //     "😜😝 وبردوا هتلعب بالعربي يا جاسوس الكلب، وغصب عنك كمان 😜😝 "
  //   );
  // }, 500);
  generat2();
  check.addEventListener("click", handLess2);
  hint.addEventListener("click", getHint2);
};
// الاعدادات
let numperOfTray = 6;
let numperOfLetter = 4;
let numperOfLetter2 = 6;
let current = 1;
let masege = document.querySelector(".masege");
let hint = document.querySelector(".hint");
let wordG = "";
let wordG2 = "";
let words = [
  "بقرة",
  "نساء",
  "بروج",
  "أعلي",
  "رحمن",
  "حديد",
  "توبة",
  "كوثر",
  "همزة",
  "بينة",
  "طارق",
  "مدثر",
  "طلاق",
  "الحج",
  "جمعة",
  "دخان",
  "شوري",
  "زخرف",
  "سجدة",
];
let words2 = [
  "Slsbel",
  "Aymane",
  "Shaema",
  "Gaunat",
  "Yasmen",
  "Maryam",
  "Alzero",
  "mohmed",
  "Shroce",
  "manare",
  "Kapape",
  "Chekin",
  "School",
];
// دالة لعمل رقم عشواءي من القايمة باستخدام الكلمات وعمل كلمة مختلفة كل مره
wordG = words[Math.floor(Math.random() * words.length)].toLowerCase();
wordG2 = words2[Math.floor(Math.random() * words2.length)].toLowerCase();
// أهم فانكشن في اللعبة
function generat() {
  let inputCont = document.querySelector(".inputs");
  for (let i = 1; i <= numperOfTray; i++) {
    let tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>المحاولة ${i} </span>`;
    if (i !== 1) {
      tryDiv.classList.add("hedin");
    }
    for (let j = 1; j <= numperOfLetter; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.id = `try-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      tryDiv.appendChild(input);
    }
    inputCont.appendChild(tryDiv);
  }
  inputCont.children[0].children[1].focus();

  //عشان تخلي المربعات كلها مخفية ولا يمكن التدخول عليها
  let inputDisplay = document.querySelectorAll(".hedin input");
  inputDisplay.forEach((input) => (input.disabled = true));

  let inputs = document.querySelectorAll("input");
  // عشان نخلي الحروف كبيرة ، وعشان نعمل تركيز على الحقل التالي مباشرة
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      let theNext = inputs[index + 1];
      if (theNext) {
        theNext.focus();
      }
    });

    //عشان التحرك يمين وشمال بالزرار
    input.addEventListener("keydown", function (click) {
      let curent = Array.from(inputs).indexOf(this);
      if (click.key === "ArrowRight") {
        let nextInput = curent + 1;
        if (nextInput < inputs.length) {
          inputs[nextInput].focus();
        }
      }
      if (click.key === "ArrowLeft") {
        let preInput = curent - 1;
        if (preInput >= 0) {
          inputs[preInput].focus();
        }
      }
    });
  });
}
function generat2() {
  let inputCont = document.querySelector(".inputs");
  for (let i = 1; i <= numperOfTray; i++) {
    let tryDiv = document.createElement("div");
    tryDiv.classList.add(`try-${i}`);
    tryDiv.innerHTML = `<span>TRY ${i} </span>`;
    if (i !== 1) {
      tryDiv.classList.add("hedin");
    }
    for (let j = 1; j <= numperOfLetter2; j++) {
      let input = document.createElement("input");
      input.type = "text";
      input.id = `try-${i}-letter-${j}`;
      input.setAttribute("maxlength", "1");
      tryDiv.appendChild(input);
    }
    inputCont.appendChild(tryDiv);
  }
  inputCont.children[0].children[1].focus();

  //عشان تخلي المربعات كلها مخفية ولا يمكن التدخول عليها
  let inputDisplay = document.querySelectorAll(".hedin input");
  inputDisplay.forEach((input) => (input.disabled = true));

  let inputs = document.querySelectorAll("input");
  // عشان نخلي الحروف كبيرة ، وعشان نعمل تركيز على الحقل التالي مباشرة
  inputs.forEach((input, index) => {
    input.addEventListener("input", function () {
      this.value = this.value.toUpperCase();
      let theNext = inputs[index + 1];
      if (theNext) {
        theNext.focus();
      }
    });

    //عشان التحرك يمين وشمال بالزرار
    input.addEventListener("keydown", function (click) {
      let curent = Array.from(inputs).indexOf(this);
      if (click.key === "ArrowRight") {
        let nextInput = curent + 1;
        if (nextInput < inputs.length) {
          inputs[nextInput].focus();
        }
      }
      if (click.key === "ArrowLeft") {
        let preInput = curent - 1;
        if (preInput >= 0) {
          inputs[preInput].focus();
        }
      }
    });
  });
}
// هنا عمل فنكشن التحقق والفوز او الخسارة
function handLess() {
  let trueWord = true;
  for (let i = 1; i <= numperOfLetter; i++) {
    // هنا جبنا الحرف المكتوب من المستخدم
    let inputFelid = document.querySelector(`#try-${current}-letter-${i}`);
    let letter = inputFelid.value.toLowerCase();
    // ثم جبنا الحرف الصحيح الأول فى الكلمة العشواءية
    let trueLeteer = wordG[i - 1];
    // هنا هنعمل الشروط التى تشغل اللعبة
    if (letter === trueLeteer) {
      inputFelid.classList.add("green");
    } else if (wordG.includes(letter) && letter != "") {
      inputFelid.classList.add("orange");
      trueWord = false;
    } else {
      inputFelid.classList.add("red");
      trueWord = false;
    }
  }
  // هنا هنحدد لو المستخدم فاز او خسر
  if (trueWord) {
    masege.innerHTML = `ممتاز يا صاحبي السورة هي <span>ال${wordG}</span>`;
    document.querySelector(".win").play();
    let all = document.querySelectorAll(".inputs > div");
    all.forEach((div) => div.classList.add("hedin"));
    check.classList.add("hedin");
    hint.classList.add("hedin");
  } else {
    document.querySelector(`.try-${current}`).classList.add("hedin");
    let curtntry = document.querySelectorAll(`.try-${current} input`);
    curtntry.forEach((input) => (input.disabled = true));
    current++;
    let curtntry2 = document.querySelectorAll(`.try-${current} input`);
    curtntry2.forEach((input) => (input.disabled = false));
    let el = document.querySelector(`.try-${current}`);
    if (el) {
      document.querySelector(`.try-${current}`).classList.remove("hedin");
      el.children[1].focus();
    } else {
      check.classList.add("hedin");
      hint.classList.add("hedin");
      masege.innerHTML = `للأسف  يا صاحبي انت خسرت والكلمة كانت <span>ال${wordG}</span>`;
      document.querySelector(".fil").play();
    }
  }
}
function handLess2() {
  let trueWord = true;
  for (let i = 1; i <= numperOfLetter2; i++) {
    // هنا جبنا الحرف المكتوب من المستخدم
    let inputFelid = document.querySelector(`#try-${current}-letter-${i}`);
    let letter = inputFelid.value.toLowerCase();
    // ثم جبنا الحرف الصحيح الأول فى الكلمة العشواءية
    let trueLeteer = wordG2[i - 1];
    // هنا هنعمل الشروط التى تشغل اللعبة
    if (letter === trueLeteer) {
      inputFelid.classList.add("green");
    } else if (wordG2.includes(letter) && letter != "") {
      inputFelid.classList.add("orange");
      trueWord = false;
    } else {
      inputFelid.classList.add("red");
      trueWord = false;
    }
  }
  // هنا هنحدد لو المستخدم فاز او خسر
  if (trueWord) {
    masege.innerHTML = `Good Game The Word Is<span>${wordG2}</span>`;
    document.querySelector(".win").play();
    let all = document.querySelectorAll(".inputs > div");
    all.forEach((div) => div.classList.add("hedin"));
    check.classList.add("hedin");
    hint.classList.add("hedin");
  } else {
    document.querySelector(`.try-${current}`).classList.add("hedin");
    let curtntry = document.querySelectorAll(`.try-${current} input`);
    curtntry.forEach((input) => (input.disabled = true));
    current++;
    let curtntry2 = document.querySelectorAll(`.try-${current} input`);
    curtntry2.forEach((input) => (input.disabled = false));
    let el = document.querySelector(`.try-${current}`);
    if (el) {
      document.querySelector(`.try-${current}`).classList.remove("hedin");
      el.children[1].focus();
    } else {
      check.classList.add("hedin");
      hint.classList.add("hedin");
      masege.innerHTML = `Game Over The Word Is<span>${wordG2}</span>`;
      document.querySelector(".fil").play();
    }
  }
}
// هنا هنعمل المساعدات والفانكشن الخاصة بها
function getHint() {
  if (numperOfHint > 0) {
    numperOfHint--;
    document.querySelector(".hint span").innerHTML = numperOfHint;
  }
  if (numperOfHint == 0) {
    hint.classList.add("hedin");
  }
  // هنا هنحدد ان المساعدة تكون فى الخانة الفارغة فقط والتى لا تحمل كلاس ديسيبلد
  let all = document.querySelectorAll("input:not([disabled])");
  let emty = Array.from(all).filter((input) => input.value === "");
  if (emty.length > 0) {
    let random = Math.floor(Math.random() * emty.length);
    let inHint = emty[random];
    let indexFil = Array.from(all).indexOf(inHint);
    if (indexFil !== -1) {
      inHint.value = wordG[indexFil].toUpperCase();
    }
  }
}
function getHint2() {
  if (numperOfHint > 0) {
    numperOfHint--;
    document.querySelector(".hint span").innerHTML = numperOfHint;
  }
  if (numperOfHint == 0) {
    hint.classList.add("hedin");
  }
  // هنا هنحدد ان المساعدة تكون فى الخانة الفارغة فقط والتى لا تحمل كلاس ديسيبلد
  let all = document.querySelectorAll("input:not([disabled])");
  let emty = Array.from(all).filter((input) => input.value === "");
  if (emty.length > 0) {
    let random = Math.floor(Math.random() * emty.length);
    let inHint = emty[random];
    let indexFil = Array.from(all).indexOf(inHint);
    if (indexFil !== -1) {
      inHint.value = wordG2[indexFil].toUpperCase();
    }
  }
}
// أخر حاجة هنعمل زرار المسح
document.addEventListener("keydown", function (click) {
  if (click.key === "Backspace") {
    let inputs = document.querySelectorAll("input:not([disabled])");
    let curent = Array.from(inputs).indexOf(document.activeElement);
    if (curent > 0) {
      let incurnt = inputs[curent];
      let inprave = inputs[curent - 1];
      inprave.value = "";
      incurnt.value = "";
    }
  }
});



