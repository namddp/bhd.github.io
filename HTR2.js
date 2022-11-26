let htr2URL = window.location.search;
// = ?id=5
const urlParams = new URLSearchParams(htr2URL);
// hiểu id là key, 5 là value
const uRl = urlParams.get('id');
// lấy được value = 5
 console.log(uRl);

 let hTr = [
    {
      Name : 'BHD STAR LONG KHÁNH',
      Id: 'bhd-star-long-khanh',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh',
      Like:'165.204 Thích',
      Location:'430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai',
      Phone:'02512860696',
      Room:'4 Phòng chiếu 2D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR THE GARDEN',
      Id: 'bhd-star-long-khanh',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2019/12/GARDEN',
      Like:'258.710 Thích',
      Location:'Tầng 4, TTTM Garden Shopping Center, Phố Mễ Trì, P.Mỹ Đình 1, Quận Nam Từ Liêm, Hà Nội',
      Phone:'1900 2099 hoặc 024 3206 8678',
      Room:'6 Phòng chiếu 2D & 3D. Ghế First Class',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR DISCOVERY',
      Id: 'bhd-star-cau-giay',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/Cau-giay-copy',
      Like:'687.395 Thích',
      Location:'Tầng 8, TTTM Discovery – 302 Cầu Giấy, P.Dịch Vọng, Quận Cầu Giấy, Hà Nội',
      Phone:'1900 2099 hoặc 024 3206 0202',
      Room:'5 Phòng chiếu 2D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR HUẾ',
      Id: 'bhd-star-hue',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2018/04/HUE-copy',
      Like:'259.480 Thích',
      Location:'Tầng 5, Vincom Plaza Huế, 50A Hùng Vương tổ 10, Phú Nhuận, Thành phố Huế, Thừa Thiên Huế',
      Phone:'1900 2099 hoặc 023 4625 0238',
      Room:'4 Phòng chiếu 2D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR PHẠM NGỌC THẠCH',
      Id: 'bhd-star-vincom-pham-ngoc-thach',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/07/PNT-CINEMA',
      Like:'1.710.544 Thích',
      Location:'Tầng 8, Vincom Center Phạm Ngọc Thạch, 02 Phạm Ngọc Thạch, P.Trung Tự, Quận Đống Đa, Hà Nội',
      Phone:'1900 2099 hoặc 024 3637 3355',
      Room:'7 Phòng chiếu: bao gồm 01 phòng chiếu First Class và 6 phòng chiếu 2D & 3D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR LÊ VĂN VIỆT',
      Id: 'bhd-star-vincom-le-van-viet',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/04/LVV',
      Like:'1.146.056 Thích',
      Location:'Tầng 4, Vincom Plaza Lê Văn Việt, 50 Lê Văn Việt, P.Hiệp Phú, Quận 9, TP.HCM',
      Phone:'1900 2099 hoặc gọi 028 3736 7070',
      Room:'6 Phòng chiếu 2D & 3D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR THẢO ĐIỀN',
      Id: 'bhd-star-vincom-thao-dien',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2016/02/THAO-DIEN-CINEMA',
      Like:'456.581 Thích',
      Location:'Tầng 5, Vincom Mega Mall Thảo Điền, 159 Xa Lộ Hà Nội, P.Thảo Điền, Quận 2, TPHCM',
      Phone:'1900 2099 hoặc gọi 028 3744 6969',
      Room:'6 Phòng chiếu 2D & 3D',
      Email: 'cskh@bhdstar.vn',
    },
    {
      Name : 'BHD STAR QUANG TRUNG',
      Id: 'bhd-star-vincom-quang-trung',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2015/01/QUANG-TRUNG',
      Like:'656.416 Thích',
      Location:'Tầng B2, Vincom Plaza Quang Trung, 190 Quang Trung, P.10, Quận Gò Vấp, Tp.HCM',
      Phone:'1900 2099 hoặc gọi 028 3989 2468',
      Room:'8 Phòng chiếu 2D & 3D',
      Email: 'cskh@bhdstar.vn',
    },
  ];

function renterHTR2(index){
   
  let a =  document.getElementById('ule');
   a.innerHTML = `<li class="left">
   <strong>Địa điểm:</strong>;<span class=""
     >${hTr[index].Location}</span>
      </li>
      <li class="left"><strong>Số điện thoại:</strong> 02512860696</li>
      <li class="left"><strong>Email:</strong>&nbsp;cskh@bhdstar.vn</li>
      <li class="left"><strong>Phòng chiếu:</strong> 4 Phòng chiếu 2D</li>`;

  let b = document.getElementById('list-map');
  for(i = 0; i<hTr.length; i++){
    b.innerHTML += `
      <li>
      <a class="item--cinema" href="./HTR2.html?id=${i}">
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      <span>${hTr[i].Name}</span>
      </a>
      </li>
  ` 

  let c = document.querySelector('#rap-name');
      c.innerText = hTr[index].Name;
      
  }
}


renterHTR2(uRl);
  