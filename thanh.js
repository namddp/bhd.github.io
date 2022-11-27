// let hTr = [
//   {
//     Name : 'BHD STAR LONG KHÁNH',
//     Id: 'bhd-star-long-khanh',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh',
//     Like:'165.204 Thích',
//     film : [
//       phim1 = [
//           ngay1 = ["11:13","11:20"],
//           ngay2 = ["12:00","13:20"]
//       ],
//       phim2 = [
//           ngay1 = ["11:13","11:20"],
//           ngay2 = ["12:00","13:20"]
//       ]
//     ]
//   },
//   {
//     Name : 'BHD STAR THE GARDEN',
//     Id: 'bhd-star-long-khanh',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2019/12/GARDEN',
//     Like:'258.710 Thích'
//   },
//   {
//     Name : 'BHD STAR DISCOVERY',
//     Id: 'bhd-star-cau-giay',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy',
//     Like:'687.395 Thích'
//   },
//   {
//     Name : 'BHD STAR HUẾ',
//     Id: 'bhd-star-hue',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy',
//     Like:'259.480 Thích'
//   },
//   {
//     Name : 'BHD STAR PHẠM NGỌC THẠCH',
//     Id: 'bhd-star-vincom-pham-ngoc-thach',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2016/07/PNT-CINEMA',
//     Like:'1.710.544 Thích'
//   },
//   {
//     Name : 'BHD STAR LÊ VĂN VIỆT',
//     Id: 'bhd-star-vincom-le-van-viet',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV',
//     Like:'1.146.056 Thích'
//   },
//   {
//     Name : 'BHD STAR THẢO ĐIỀN',
//     Id: 'bhd-star-vincom-thao-dien',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2016/02/THAO-DIEN-CINEMA',
//     Like:'456.581 Thích'
//   },
//   {
//     Name : 'BHD STAR QUANG TRUNG',
//     Id: 'bhd-star-vincom-quang-trung',
//     Background:'https://www.bhdstar.vn/wp-content/uploads/2015/01/QUANG-TRUNG',
//     Like:'656.416 Thích'
//   },
// ];
// function getFilmThanh(index){

//   const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
//   const API_URL = `https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`;
//   const request = fetch(API_URL);
//   request.then(function(res) {
//       if (res.ok === true) {
//           return res.json();
//       }
//   })
//   .then(function (data) {
//       console.log (data.items);

//       return data.items;
//   }).then(function(item){
//       item[index].cinema = hTr;
//       console.log(item[index]);
//       let ticketEle = document.querySelector(".poster-film");
//       console.log(ticketEle);
//       ticketEle.innerHTML = `
//       <div class="total-infor-film px-44 pb-12">
//           <span> | ${item[index].title}</span>
//           <div class="detail-film">
//               <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item[index].poster_path}" alt="#" class="detail-film-poster"/>
//               <div class="details">
//                   <h1 class="text-2xl font-normal">${item[index].title}</h1>
//                   <p>${item[index].overview}</p>
//                   <table class="detail-table">
//                       <tr>
//                           <th>Phân loại</th>
//                           <td class="text-red-500 font-bold">C13 - PHIM DÀNH CHO KHÁN GIẢ TỪ 13 TUỔI TRỞ LÊN</td>
//                       </tr>
//                       <tr>
//                           <th>Đạo diễn</th>
//                           <td>Bruno Podalydès</td>
//                       </tr>
//                       <tr>
//                           <th>Diễn viên</th>
//                           <td>Denis Podalydès, Sandrine Kiberlain</td>
//                       </tr>
//                       <tr>
//                           <th>Thể loại</th>
//                           <td>Family</td>
//                       </tr>
//                       <tr>
//                           <th>Khởi chiếu</th>
//                           <td>${item[index].release_date}</td>
//                       </tr>
//                       <tr>
//                           <th>Thời lượng</th>
//                           <td>92 phút</td>
//                       </tr>
//                       <tr>
//                           <th>Ngôn ngữ</th>
//                           <td>Phụ đề tiếng Việt</td>
//                       </tr>
//                   </table>
//                   <div class="detail-film-trailer-book">
//                       <span><a href="">XEM TRAILER</a></span>
//                       <span><a href="">MUA VÉ NGAY</a></span>
//                   </div>
//               </div>
//           </div>
//       </div>

//   `
//   })
//   .catch();
// }

// let indexPage = window.location.search;
// let PageId = Number(indexPage.charAt(1));
// getFilmThanh(PageId);
// // let btn = document.querySelector(".choice-btn-data");
// // btn.addEventListener("click", choice);

// // function choice(n) {
// //     const cenlendar = document.querySelector(".total-cenlendars");
// //     cenlendar.innerHTML = `
// //                     <div class="detail-cenlendars">
// //                         <div class="infor-cinema-map">
// //                             <a href="" class="th-cinema inline-block" style="background-color: #1c2936;">
// //                                 <h4>BHD Star Discovery</h4>
// //                                 <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy , Hà Nội</p>
// //                             </a> <br>
// //                             <a href="#" class="th-map inline-block">Địa chỉ</a>
// //                         </div>
// //                         <div class="film-type-time">
// //                             <div class="film-type">
// //                                 <span class="inline-block w-9 bg-green-400 text-center font-bold rounded">2D SUB</span> <br>
// //                                 <span class="inline-block w-9 text-red-500 border-solid border-2 border-red-500 text-center font-bold rounded mt-1.5">C13</span>
// //                             </div>
// //                             <div >
// //                                 <ul class="detail-time grid grid-cols-5 gap-3">
// //                                     <li>18:50</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>
// //                                     <li>18:40</li>

// //                                 </ul>
// //                             </div>
// //                         </div>
// //                     </div>
// //     `
// // }
// // let btn2 = document.querySelector(".choice-btn-data2");
// // btn2.addEventListener("click", choice);

/////// js cua nam viet
const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
let data =  fetch(`https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`);


let scheduleMovie = [
  {
    id: "1",
    trailer: "https://www.youtube.com/embed/OB3g37GTALc",
    day: [
      (ngay27 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
        {
          cinema: "BHD STAR HUẾ",
          id: "bhd-star-hue",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy",
          xuatchieu: ["11:00", "14:45", "20:25", "21:00"],
        },
      ]),
      (ngay28 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
      (ngay29 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
    ],
  },
  {
    id: "2",
    trailer: "https://www.youtube.com/embed/DobBbl0_6Lc",
    day: [
      (ngay27 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: ["12:45", "13:25", "15:50", "17:00", "20:00"],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["10:00", "16:00", "18:45", "20:25", "21:00", "22:00"],
        },
        {
          cinema: "BHD STAR HUẾ",
          id: "bhd-star-hue",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy",
          xuatchieu: ["11:00", "14:45"],
        },
      ]),
      (ngay28 = [
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
      (ngay29 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
    ],
  },
  {
    id: "3",
    trailer: "https://www.youtube.com/embed/8YjFbMbfXaQ",
    day: [
      (ngay27 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: ["12:45", "13:25", "15:50", "17:00", "20:00"],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["10:00", "16:00", "18:45", "20:25", "21:00", "22:00"],
        },
        {
          Name: "BHD STAR HUẾ",
          id: "bhd-star-hue",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy",
          xuatchieu: ["11:00", "14:45"],
        },
      ]),
      (ngay28 = [
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
      (ngay29 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
    ],
  },
  {
    id: "4",
    trailer: "https://www.youtube.com/embed/ybji16u608U",
    day: [
      (ngay27 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: ["12:45", "13:25", "15:50", "17:00", "20:00"],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["10:00", "16:00", "18:45", "20:25", "21:00", "22:00"],
        },
        {
          Name: "BHD STAR HUẾ",
          id: "bhd-star-hue",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy",
          xuatchieu: ["11:00", "14:45"],
        },
      ]),
      (ngay28 = [
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
      (ngay29 = [
        {
          cinema: "BHD STAR LONG KHÁNH",
          id: "bhd-star-long-khanh",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh",
          xuatchieu: [
            "10:00",
            "12:45",
            "13:25",
            "15:50",
            "17:00",
            "20:00",
            "21:00",
            "22:00",
          ],
        },
        {
          cinema: "BHD STAR DISCOVERY",
          id: "bhd-star-cau-giay",
          background:
            "https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy",
          xuatchieu: ["16:00", "18:45", "20:25"],
        },
      ]),
    ],
  },
];

// lấy page ID

function inFilm(a) {
  let indexPage = window.location.search;
  let PageId = new URLSearchParams(indexPage);
  let trang = PageId.get("id");
  let b = Number(a);
  infoFilm(trang);
  Layinfo(trang, b);
}
inFilm(0);

function Layinfo(phim, thu) {
  let count = scheduleMovie[phim].day[thu];
  let eleP = document.querySelector(".total-cenlendars");
  eleP.innerHTML = "";
  for (i = 0; i < count.length; i++) {
    eleP.innerHTML += `<div class="detail-cenlendars">
                <div class="infor-cinema-map">
              <a href="" class="th-cinema inline-block" style="background-color: #1c2936;">
               <h4>${count[i].cinema}</h4>
                  <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy , Hà Nội</p>
                 </a> <br>
                 <a href="#" class="th-map inline-block">Địa chỉ</a>
                 </div>
                 <div class="film-type-time">
                    <div class="film-type">
                         <span class="inline-block w-9 bg-green-400 text-center font-bold rounded">2D SUB</span> <br>
                     <span class="inline-block w-9 text-red-500 border-solid border-2 border-red-500 text-center font-bold rounded mt-1.5">C13</span>
                 </div>
                  <div>
                  <ul class="giochieu detail-time grid grid-cols-5 gap-3">`;
    for (let j = 0; j < count[i].xuatchieu.length; j++) {
        let eleG = document.getElementsByClassName("giochieu");
      eleG[i].innerHTML += `<li><a href="./datve.html?id=${phim}">${count[i].xuatchieu[j]}</a></li>`;
    }
    eleP.innerHTML += `</ul>
                      </div>
                     </div>
                    </div>`;
console.log("eleP:" ,eleP);
  }
}


// function lấy thông tin film

function infoFilm(i){
  
  data.then(function(res){
    return res.json();
  })
  .then(function(data){
    return data.items;
  }).then(function(items){
    console.log(items);
    let eleF = document.getElementById("total-infor-film");
    eleF.innerHTML = `
    <span> | ${items[i].title}</span>
    <div class="detail-film">
        <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${items[i].poster_path}" alt="#" class="detail-film-poster"/>
        <div class="details">
            <h1 class="text-2xl font-normal">${items[i].title}</h1>
            <p>${items[i].overview}</p>
            <table class="detail-table">
                <tr>
                    <th>Phân loại</th>
                    <td class="text-red-500 font-bold">C13 - PHIM DÀNH CHO KHÁN GIẢ TỪ 13 TUỔI TRỞ LÊN</td>
                </tr>      
                <tr>
                    <th>Đạo diễn</th>
                    <td>Bruno Podalydès</td>
                </tr>
                <tr>
                    <th>Diễn viên</th>
                    <td>Denis Podalydès, Sandrine Kiberlain</td>
                </tr>  
                <tr>
                    <th>Thể loại</th>
                    <td>Family</td>
                </tr>  
                <tr>
                    <th>Khởi chiếu</th>
                    <td>${items[i].release_date}</td>
                </tr>  
                <tr>
                    <th>Thời lượng</th>
                    <td>92 phút</td>
                </tr>  
                <tr>
                    <th>Ngôn ngữ</th>
                    <td>Phụ đề tiếng Việt</td>
                </tr>                    
            </table>
            <div class="detail-film-trailer-book relative">
                <span>
                <button onclick="playTrailer(${i})" class="checkbox-trailer">XEM TRAILER</button>
                <button onclick="pauseTrailer()" class="checkbox-close-trailer">CLOSE [X]</button>
                <iframe class="trailer-film  top-[-180px] invisible absolute" width="760" height="515" src=""  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></span>
                <span><a href="./datve.html?id=${i}">MUA VÉ NGAY</a></span>
            </div>
        </div>
    </div>`;
  })
.catch();
  

}

function playTrailer(i){
  let closeTrailer = document.querySelector(".checkbox-close-trailer");
  let trailer = document.querySelector(".trailer-film");
    console.dir(trailer);
    trailer.style.visibility = "visible";
    closeTrailer.style.visibility = "visible";
    trailer.src = `${scheduleMovie[i].trailer}`;
}


function pauseTrailer() {
  let closeTrailer = document.querySelector(".checkbox-close-trailer");
  let trailer = document.querySelector(".trailer-film");
    closeTrailer.style.visibility = "hidden";
    trailer.style.visibility = "hidden";
    trailer.src = "";
}