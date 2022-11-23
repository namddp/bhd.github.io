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
      Location:'430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai'
    },
    {
      Name : 'BHD STAR THE GARDEN',
      Id: 'bhd-star-long-khanh',
      Background:'https://www.bhdstar.vn/wp-content/uploads/2019/12/GARDEN',
      Like:'258.710 Thích',
      Location:'230 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai'
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

function renterHTR2(index){
   let a =  document.getElementById('ule');
   a.innerHTML = `<li class="left">
   <strong>Địa điểm:</strong>;<span class=""
     >${hTr[index].Location}</span
   >
 </li>
 <li class="left"><strong>Số điện thoại:</strong> 02512860696</li>
 <li class="left"><strong>Email:</strong>&nbsp;cskh@bhdstar.vn</li>
 <li class="left"><strong>Phòng chiếu:</strong> 4 Phòng chiếu 2D</li>`
}
renterHTR2(uRl)
  