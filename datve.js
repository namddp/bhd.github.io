const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
function datve(index){
  fetch(`https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`)
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      return data.items;
    }).then(function(item){
      let ticketEle = document.getElementById("chonve");
      console.log(ticketEle);
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
let PageId = Number(indexPage.charAt(1));
datve(PageId);


function ticPlus(a,ele,el){
  console.log(ele);
  console.log(el);
  console.log(el.lastElementChild.innerText);
  let y = Number(ele.innerText);
  if(y === 0 && a < 0){
    y = 0;
  }else{
    y += a;
  }
  if(y===0){
    document.getElementById("picSit").style.visibility  = "hidden";
  }else{
    document.getElementById("picSit").style.visibility  = "visible";
  }
ele.innerText = y;
el.lastElementChild.innerText = y * 95000;
}
