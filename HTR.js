
let hTr = [
  {
    Name : 'BHD STAR LONG KHÁNH',
    Id: 'bhd-star-long-khanh',
    Background:'https://www.bhdstar.vn/wp-content/uploads/2021/12/long-khanh',
    Like:'165.204 Thích'
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

console.log(hTr);

function renderhTr(arr){
  let ele = document.getElementById('htr');
  for(i=0; i<arr.length; i++){
    ele.innerHTML += `
        <div id="long khanh" class="bg-black text-white flex flex-col justify-center m-2 pb-4 hover:scale-110 ease-in duration-200 hover:text-amber-400">
            <div class=" ">
              <a href="./HTR2.html?id=${i}">
                  <img class="" 
                    width=243 height=330 
                    src="${arr[i].Background}-243x330.jpg" 
                    alt="project1"
                    srcset="
                    ${arr[i].Background}-243x330.jpg  243w,
                    ${arr[i].Background}-245x333.jpg  245w,
                    ${arr[i].Background}-180x245.jpg  180w,
                    ${arr[i].Background}-470x639.jpg  470w,
                    ${arr[i].Background}-76x103.jpg    76w,
                    ${arr[i].Background}-268x364.jpg  268w,
                    ${arr[i].Background}.jpg         1533w
                    "
                    sizes="(max-width: 243px) 100vw, 243px"
                  />
              </a>
            </div>
            <div class="mt-4 flex flex-col " >
              <a class="text-center " href="https://www.bhdstar.vn/cinemas/${arr[i].Id}/">${arr[i].Name} </a>
              <span class="text-center text-red-400">${arr[i].Like}</span>
            </div>
        </div>`
  }
  
}

renderhTr(hTr);
