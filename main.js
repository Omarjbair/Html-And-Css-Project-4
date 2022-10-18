var btn = document.getElementById('btn');
window.onscroll = function(){
if (window.scrollY >= 300){
    btn.style.display = 'block';
}
else{
    btn.style.display = 'none';
}
}
btn.onclick = function(){
    window.scroll(0,0)
}
