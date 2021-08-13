//#region ==== NAV
// display responsive nav
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
//#endregion

//#region ==== DOM ELEMENTS
const formBtnOpen = document.querySelectorAll(".modal-btn");
const formBg = document.querySelector(".bground");
const formCrossClose = document.querySelectorAll(".close");
const thanksBtnOpen = document.getElementById("btn-goToTks");
const thanksBg = document.querySelector(".bground-tks");
const thanksCrossClose = document.getElementById("close-tks");
const thanksBtnClose = document.getElementById("btn-close-tks");

let firstSmall = document.querySelector("#smallFirst");
let lastSmall = document.querySelector("#smallLast");
let emailSmall = document.querySelector("#smallEmail");
let birthdateSmall = document.querySelector("#smallBirthdate");
let quantitySmall = document.querySelector("#smallQuantity");
let conditionSmall = document.querySelector("#smallCondition");
//#endregion

//#region ==== CLOSE/OPEN MODAL
// open form (btn)
formBtnOpen.forEach((btn) => btn.addEventListener("click", openBtnForm));
function openBtnForm(e) {
  formBg.style.display = "block";
  form.reset();
  form.first.style.border = "none";
  form.last.style.border = "none";
  form.email.style.border = "none";
  form.birthdate.style.border = "none";
  form.quantity.style.border = "none";
  form.checkbox1.style.border = "none";
  history.pushState({}, "", "index.html");
  firstSmall.style.display = "none";
  lastSmall.style.display = "none";
  emailSmall.style.display = "none";
  birthdateSmall.style.display = "none";
  quantitySmall.style.display = "none";
  conditionSmall.style.display = "none";
}
// close form (cross)
formCrossClose.forEach((btn) => btn.addEventListener("click", closeBtnForm));
function closeBtnForm() {
  formBg.style.display = "none";
}
// close THANKS (cross)
thanksCrossClose.addEventListener("click", function () {
  thanksBg.style.display = "none";
});
// close THANKS (btn)
thanksBtnClose.addEventListener("click", function () {
  thanksBg.style.display = "none";
  form.submit();

});
//#endregion

//#region ==== CONDITION RULES
let form = document.querySelector("#recordingForm");

// ========================================== FIRSTNAME
form.first.addEventListener("change", function () { validFirst(this); });

const validFirst = function (inputFirst) {
  let firstRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

  let testFirst = firstRegExp.test(inputFirst.value);

  let small = inputFirst.nextElementSibling;

  if (testFirst) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    inputFirst.style.border = "green solid 2px";
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    inputFirst.style.border = "red solid 2px";
    return false;
  }
};

// ========================================== LASTNAME
form.last.addEventListener("change", function () { validLast(this); });

const validLast = function (inputLast) {
  let lastRegExp = new RegExp("^[a-zA-Z]{2,20}$", "g");

  let testLast = lastRegExp.test(inputLast.value);

  let small = inputLast.nextElementSibling;

  if (testLast) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    inputLast.style.border = "green solid 2px";
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer 2 caractères ou plus.";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    inputLast.style.border = "red solid 2px";
    return false;
  }
};

// ========================================== EMAIL
form.email.addEventListener("change", function () { validEmail(this); });

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp( "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$", "g" );

  let testEmail = emailRegExp.test(inputEmail.value);

  let small = inputEmail.nextElementSibling;

  if (testEmail) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    inputEmail.style.border = "green solid 2px";
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez entrer une adresse email valide.";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    inputEmail.style.border = "red solid 2px";
    return false;
  }
};

// ========================================== BIRTHDATE
form.birthdate.addEventListener("change", function () { validBirthdate(this); });

const validBirthdate = function (inputBirthdate) {
  let date = new Date();
  let embryo  = date.getFullYear()    + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);
  let younger = date.getFullYear()-18 + "-" + ("0" + (date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2);

  let msg;
  let valid = false;

  if (inputBirthdate.value > embryo) {
    msg = "!impossible.";
  } else if (inputBirthdate.value > younger) {
    msg = "Vous devez être majeur.";
  } else {
    msg = "";
    valid = true;
  }

  let small = inputBirthdate.nextElementSibling;

  if (valid) {
    // small.innerHTML = msg;
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    inputBirthdate.style.border = "green solid 2px";
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = msg;
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    inputBirthdate.style.border = "red solid 2px";
    return false;
  }
};

// ========================================== NB UNREAL TOURNAMENT
form.quantity.addEventListener("change", function () { validQuantity(this); });

const validQuantity = function (inputQuantity) {
  let quantityRegExp = new RegExp("^[0-9]{1,2}$");

  let testQuantity = quantityRegExp.test(inputQuantity.value);

  let small = inputQuantity.nextElementSibling;

  if (testQuantity) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    inputQuantity.style.border = "green solid 2px";
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Veuillez saisir une valeur numérique entre 0 et 99.";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    inputQuantity.style.border = "red solid 2px";
    return false;
  }
};

// ========================================== CONDITION
form.checkbox1.addEventListener("change", function () { validCondition(this); });

const validCondition = function () {
  let labelCondition = document.getElementById("checkbox-label-condition");

  let condition = form.checkbox1.checked;

  let small = labelCondition.nextElementSibling;

  if (condition) {
    small.style.display = "none";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.style.display = "inline-block";
    small.innerHTML = "Vous devez accepter les conditions d'utilisation.";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// ========================================== VALIDATION BTN FORM
// Listen form & close form & open THANKS (btn)
form.addEventListener("submit", function (e) {
  if (
    validFirst(form.first) &&
    validLast(form.last) &&
    validEmail(form.email) &&
    validBirthdate(form.birthdate) &&
    validQuantity(form.quantity) &&
    validCondition(form.checkbox1)
  ) {
    formBg.style.display = "none";
    thanksBg.style.display = "block";
    e.preventDefault();
  } else {
    formBg.style.display = "block";
    e.preventDefault();
  }
});
//#endregion