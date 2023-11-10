const search=document.getElementsByClassName('nav-icons1')[0];
const searchinput=document.getElementsByClassName('search-data');
const container=document.querySelector('.main-form');
const containbtn=document.querySelector('.main-close');
function searchPop(){
    console.log(containbtn);
    searchinput[0].classList.add('search-data');
    container.classList.add("main-form-data");
    containbtn.style.display='block';
};
function closePop(){
    searchinput[0].classList.remove('search-data');
    container.classList.remove("main-form-data");
    containbtn.style.display='none'; 
}
search.addEventListener("click",searchPop);
containbtn.addEventListener("click",closePop);