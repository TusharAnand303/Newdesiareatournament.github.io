//hide preloader//
window.addEventListener('load',function(){
document.querySelector('.preloader').style.display="none"

})

//nav btn

document.querySelector('.navbtn').addEventListener('click',function()
{
	document.querySelector('.navl').classList.toggle('nav_show');
})