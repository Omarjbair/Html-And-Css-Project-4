var btn = document.getElementById('btn');
btn.style.display = 'none'
window.onscroll = function(){
if (window.scrollY <= 400){
    btn.style.display = 'none';

}
else{
    btn.style.display = 'block';
}
}
btn.onclick = function(){
    window.scroll(0,0)
}
