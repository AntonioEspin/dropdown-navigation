const burgerIcon = document.querySelector('.header__menu');
const closeIcon = document.querySelector('.header__iconClose');
const headerNav = document.querySelector('.header__nav');

const arrowDownFeatures = document.querySelector('.arrow-down-features');
const featuresList = document.querySelector('.features-list');

const arrowDownCompany = document.querySelector('.arrow-down-company');
const companyList = document.querySelector('.company-list');

// Evento para llamar a la funcion toggle de BurguerMenu
burgerIcon.addEventListener('click', ()=>{
  headerNav.classList.toggle('inactive')
})
// ------------------------------------------------------

// Evento para llamar la funcion toggle de closeIcon
closeIcon.addEventListener('click', () => {
  headerNav.classList.toggle('inactive')
})
// ------------------------------------------------------

// Evento para desplegar features-list
arrowDownFeatures.addEventListener('click', () => {
  featuresList.classList.toggle('inactive')
  const getSrc = arrowDownFeatures.getAttribute('src')
  if  (getSrc == '../images/icon-arrow-down.svg') {
    arrowDownFeatures.setAttribute('src', '../images/icon-arrow-up.svg')
  } else {
    arrowDownFeatures.setAttribute('src', '../images/icon-arrow-down.svg')
  }
})

// Evento para desplegar company-list
arrowDownCompany.addEventListener('click', () => {
  companyList.classList.toggle('inactive')
  const getSrc = arrowDownCompany.getAttribute('src')
  if  (getSrc == '../images/icon-arrow-down.svg') {
    arrowDownCompany.setAttribute('src', '../images/icon-arrow-up.svg')
  } else {
    arrowDownCompany.setAttribute('src', '../images/icon-arrow-down.svg')
  }
})
