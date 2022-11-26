const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
function datve(index){
  fetch(`https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      return data.items;
    }).then(function(item){
      let tenphim = document.querySelector(".ten-phim");
      let ticketEle = document.getElementById("chonve");
      console.log(ticketEle);
      tenphim.innerText = `${item[index].original_title}`
      ticketEle.innerHTML = `<div class="now-showing-item item-film fade">
      <a href="">
          <img class="item-thumb" src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item[index].poster_path}" alt="">
      </a>
      <a href="">
          <h4 style="color:black" class="item-title">${item[index].original_title}</h4>
      </a>
</div>`
    }).catch()
}

let indexPage = window.location.search;
let PageId = new URLSearchParams(indexPage);
let trang = PageId.get("id");
datve(trang);


function ticPlus(a,ele,el){
  console.log(ele);
  console.log(el);
  console.log(el.lastElementChild.innerText);
  let ve1 = document.querySelector(".soluong-ve1");
  let sl1 = document.querySelector(".type1");
  let sl2 = document.querySelector(".type2");
  let sum = document.querySelector(".tongcong");
  let ve2 = document.querySelector(".soluong-ve2");
  console.log(sl1,sl2,ve1,ve2)
  let y = Number(ele.innerText);
  if(y === 0 && a < 0){
    y = 0;
  }else{
    y += a;
  }
  ele.innerText = y;
  if(Number(sl2.innerText) === 0 && Number(sl1.innerText) === 0 ){
    document.getElementById("picSit").style.visibility  = "hidden";
    document.querySelector(".sitting").style.visibility = "hidden";
  }else{
    document.getElementById("picSit").style.visibility  = "visible";
  }


ve1.innerText = sl1.innerText;
ve2.innerText = sl2.innerText;
sum.innerText = (Number(ve1.innerText + ve2.innerText)* 95000) + "vnd";
el.lastElementChild.innerText = (y * 95000) + "vnd";
}

function chonghe(){
  document.querySelector(".sitting").style.visibility = "visible";
}


function muave(){
  alert("mua vé thành công");
}








