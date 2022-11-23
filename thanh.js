let hTr = [
    {
      Name : 'BHD STAR LONG KHÁNH',
      Id: 'bhd-star-long-khanh',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh',
      Like:'165.204 Thích'
      phim: {
        phim1: {
            lichchieu : {
                13
            }
        }
        
      }
    },
    {
      Name : 'BHD STAR THE GARDEN',
      Id: 'bhd-star-long-khanh',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2019/12/GARDEN',
      Like:'258.710 Thích'
    },
    {
      Name : 'BHD STAR DISCOVERY',
      Id: 'bhd-star-cau-giay',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy',
      Like:'687.395 Thích'
    },
    {
      Name : 'BHD STAR HUẾ',
      Id: 'bhd-star-hue',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy',
      Like:'259.480 Thích'
    },
    {
      Name : 'BHD STAR PHẠM NGỌC THẠCH',
      Id: 'bhd-star-vincom-pham-ngoc-thach',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/07/PNT-CINEMA',
      Like:'1.710.544 Thích'
    },
    {
      Name : 'BHD STAR LÊ VĂN VIỆT',
      Id: 'bhd-star-vincom-le-van-viet',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV',
      Like:'1.146.056 Thích'
    },
    {
      Name : 'BHD STAR THẢO ĐIỀN',
      Id: 'bhd-star-vincom-thao-dien',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/02/THAO-DIEN-CINEMA',
      Like:'456.581 Thích'
    },
    {
      Name : 'BHD STAR QUANG TRUNG',
      Id: 'bhd-star-vincom-quang-trung',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2015/01/QUANG-TRUNG',
      Like:'656.416 Thích'
    },
  ];
function getFilmThanh(index){
    
    const api_key = "0a6d26d952bdd58d29ef7b7cb82a59db";
    const API_URL = `https://api.themoviedb.org/3/list/1?api_key=${api_key}&language=en-US`;
    const request = fetch(API_URL);
    request.then(function(res) {
        if (res.ok === true) {
            return res.json();
        }
    })
    .then(function (data) {
        console.log (data.items);
        
        return data.items;
    }).then(function(item){
        item[index].iddd = hTr;
        console.log(item[index]);
        let ticketEle = document.querySelector(".poster-film");
        console.log(ticketEle);
        console.log(item[index]);
        ticketEle.innerHTML = `<div class="total-infor-film px-44 pb-12">
        <span> | ${item[index].title}</span>
        <div class="detail-film">
            <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item[index].poster_path}" alt="#" class="detail-film-poster"/>
            <div class="details">
                <h1 class="text-2xl font-normal">${item[index].title}</h1>
                <p>${item[index].overview}</p>
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
                        <td>${item[index].release_date}</td>
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
                <div class="detail-film-trailer-book">
                    <span><a href="">XEM TRAILER</a></span>
                    <span><a href="">MUA VÉ NGAY</a></span>
                </div>
            </div>
        </div>
    </div>

    `
    })
    .catch();
}

let indexPage = window.location.search;
let PageId = Number(indexPage.charAt(1));
getFilmThanh(PageId);
