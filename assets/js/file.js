let navicon = document.querySelector(".navicon");
let drawer = document.querySelector(".nav");
let main = document.querySelector('main');

navicon.addEventListener('click',function (e){
	drawer.classList.toggle("open");
	e.stopPropagation();
});

main.addEventListener('click',function(e){
	drawer.classList.remove("open");
})