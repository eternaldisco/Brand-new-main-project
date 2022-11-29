const info = document.getElementById("info");
info.hidden = true;
document.querySelector('.btn__more').addEventListener('click', function() {
    info.hidden = !info.hidden;
    document.getElementsByClassName('btn__more').innerHTML = 'Скрыть'; //показать Мише
})

/*const img = document.getElementById("snowflake");
let rotate = function(img){

}*/

