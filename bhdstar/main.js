const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
let listFilm = [];
function getFilm(){
    fetch(`https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      return data.items;
    })
    .then(function(item){
      console.log(item)
        let domEle = document.getElementById("movie");
        for(let i = 0; i < item.length; i++){
            let ele = getPerFilm(item[i],i);
            domEle.innerHTML += ele;
        }
        var x = document.getElementsByClassName("item-film");
        for (i = 5; i < x.length; i++) {
            x[i].style.display = "none";
            console.log(x[i]);
          }
    }).catch()
}
getFilm();
function getPerFilm(obj,index){
    
    let ele = "";
        ele = `<div class="now-showing-item item-film fade">
        <a href="/bhdstar/datve.html?${index}">
            <img class="item-thumb" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${obj.poster_path}" alt="">
        </a>
        <a href="">
            <h4 class="item-title">${obj.original_title}</h4>
        </a>
        <a href="">
            <h5 class="item-ticket">Mua Vé</h5>
        </a>
        `
        return ele;
}

var slideIndex = 1;
function plusDivs(n){
  showDivs(slideIndex += n);
}

function showDivs(n){
  var i;
  var x = document.getElementsByClassName("item-film");
  if (n > x.length - 4) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length - 4} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1 ].style.display = "block";
  x[slideIndex].style.display = "block";
  x[slideIndex + 1 ].style.display = "block";
  x[slideIndex + 2 ].style.display = "block";
  x[slideIndex + 3 ].style.display = "block";
}




  function getInfo() {
    var info = 'hash: ' + window.location.hash + '<br>';
    info += 'host: ' + window.location.host + '<br>';
    info += 'hostname: ' + window.location.hostname + '<br>';
    info += 'href: ' + window.location.href + '<br>';
    info += 'origin: ' + window.location.origin + '<br>';
    info += 'pathname: ' + window.location.pathname + '<br>';
    info += 'port: ' + window.location.port + '<br>';
    info += 'search: ' + window.location.search + '<br>';
    console.log(info);
  }
