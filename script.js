//console.log("hello");


//call back
// const func1=(a)=>{
//     console.log("Job 1");
//     a();//a là hàm, a():cách gọi hàm
//     func3();
// };

// const func2=()=>{
//     console.log("Job 2");
    
// };

// const func3=()=>{
//     console.log("Job 3");
    
// };

// func1(func2);//truyền hàm vào đối số: gọi là call back
// //trong js có khái niệm hàm đồng bộ(hàm bình thường chạy từ trên xuống như func1,func3,..) và bất đồng bộ(settimeout tùy vào số giay setup)



// call back ví dụ 2
// const func1=(a)=>{
//     setTimeout(() => {
//         console.log("job 1");
//         const res=10+20;
//         a(res);//callback
//     }, 3000);
// };

// const func2=(n)=>{
//     console.log("Job 2");
//     const res2=n+20;
//     console.log(res2);
// };
// func1(func2);



//promise
//giả sử mất 3s để get chuỗi json từ BE
// var n=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let jsonArray=`
//             [
//                 {
//                     "fullName" : "lê Văn A",
//                     "age": "18"
//                 },
//                 {
//                     "fullName" : "lê Văn B",
//                     "age": "20"
//                 },
//                 {
//                     "fullName" : "lê Văn C",
//                     "age": "22"
//                 }
//             ]
//         `;
//         let jsArray=JSON.parse(jsonArray);
//         resolve(jsArray);
//     }, 3000);
// });
// //success thì chạy vào then
// n
//  .then((res)=>{
//     console.log(res);
//     for (const iterator of res) {
//         console.log(iterator);
//     }
//  });


// //nếu thất bại
// var n=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let jsonArray=`null`;
//         let jsArray=JSON.parse(jsonArray);
//         if(jsArray)//nếu có data
//             resolve(jsArray);//success
//         else
//             reject(jsArray);//fail
//     }, 3000);
// });
// //thất bại thì chạy vào catch
// n
//  .then((res)=>{
//     console.log(res);
//     for (const iterator of res) {
//         console.log(iterator);
//     }
//  })
//  .catch(()=>{
//     console.log("kg có data");
//  })
//  .finally(()=>{
//     console.log("kg cần biết fail hay success thì lun chạy vao finally");
//  })


//ví dụ promise tiếp theo
//nếu thất bại
// var n=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let jsonArray=`
//             [
//                 {
//                     "fullName" : "lê Văn A",
//                     "age": "18"
//                 },
//                 {
//                     "fullName" : "lê Văn B",
//                     "age": "17"
//                 },
//                 {
//                     "fullName" : "lê Văn C",
//                     "age": "22"
//                 }
//             ]
//         `;
//         let jsArray=JSON.parse(jsonArray);
//         if(jsArray)//nếu có data
//             resolve(jsArray);//success
//         else
//             reject(jsArray);//fail
//     }, 3000);
// });
// //thất bại thì chạy vào catch
// n
//  .then((res)=>{
//     let arr=res.map(item =>{
//         let message= item.age>=18 ? "được lấy chồng" : "Kg được lấy chồng";

//         return {
//             ten: item.fullName,
//             thongBao: message
//         }
//     });

//     return arr;
//  })
//  .then((arr_2)=>{
//     console.log(arr_2); 
//  })
//  .catch(()=>{
//     console.log("kg có data");
//  })
//  .finally(()=>{
//     console.log("kg cần biết fail hay success thì lun chạy vao finally");
//  })


//ví dụ promise tiếp theo
// var n=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let jsonArray=`
//             [
//                 {
//                     "fullName" : "lê Văn A",
//                     "age": "18"
//                 },
//                 {
//                     "fullName" : "lê Văn B",
//                     "age": "17"
//                 },
//                 {
//                     "fullName" : "lê Văn C",
//                     "age": "22"
//                 }
//             ]
//         `;
//         let jsArray=JSON.parse(jsonArray);
//         if(jsArray)//nếu có data
//             resolve(jsArray);//success
//         else
//             reject(jsArray);//fail
//     }, 3000);
// });

// //thất bại thì chạy vào catch
// //sau 3s thì thực hiện tiếp (then or catch)
// console.log(n);
// setTimeout(() => {
//     console.log(n);
// }, 1000);

// setTimeout(() => {
//     console.log(n);
// }, 2000);

// setTimeout(() => {
//     console.log(n);//trả ra array 3 phần tử
// }, 3000);




//fetch api
// fetch("https://dummyjson.com/users")
//  .then((res) => {
//     //console.log(res.json());//trả ra Promise {<pending>} vì sao?
//     //vì trả ra res vẫn chưa đủ thông tin khi gọi res.json() mất time chuyển đổi thành js nên sẽ là pending
 
//     return res.json();// đang lấy data, trong json() tích hợp sẵn jsonparse
// })
//  .then((data) =>{ //đợi lấy xong data thì lụm vô đây
//     //console.log(data);
//     //console.log(data.users);
//     for (const x of data.users) {
//         //console.log(x);
//         console.log(`${x.lastName} - ${x.email}`);
//     }
//  })


// //lấy data fetch đổ ra html: ul li dùng nối chuỗi s
// fetch("https://dummyjson.com/users")
//  .then((res) => {
//     return res.json();
// })
//  .then((data) =>{ 
//     let s="";

//     for (const x of data.users) {
//         s+=`
//             <li>${x.lastName} - ${x.email}</li>
//         `;
//     }

//     console.log(s);

//     const div_ul=document.querySelector("#users_html");
//     div_ul.innerHTML=s;
//  })


////////////////////
//viết sẵn 1 hàm fetch api
const fetch_API=()=>{
      fetch("https://dummyjson.com/users")
   .then((res) => {
      return res.json();
   })
   .then((data) =>{ 
      return data;
   })
};




//////////////////



//lấy data fetch đổ ra html: ul li dùng nmảng mới map(gọn hơn chút so với xài nối chuỗi)
// fetch("https://dummyjson.com/users")
//  .then((res) => {
//     return res.json();
// })
//  .then((data) =>{ 
//     let newArray = data.users.map(x => `<li>${x.lastName} - ${x.email}</li>`);

//     console.log(newArray.join(""));//mảng các tag li,join có dấu "" để huy dấu , ở giữa các item

//     const div_ul=document.querySelector("#users_html");
//     div_ul.innerHTML=newArray.join("");
//  })
 
 
 
 
////////////////////
fetch("https://dummyjson.com/products")
 .then((res) => {
   return res.json();
})
 .then((data) =>{    // data là chuôi json đã được chuyển thành js
   console.log(data.products);
   let newArray = data.products.map(x => 
         `
            <div class="product_item">
            <div class="inner_image">
               <img src="${x.thumbnail}" alt="${x.title}">
            </div>
            <div class="inner_content">
               <h3 class="inner_title">${x.title}</h3>
               <div class="inner_price">${x.price}</div>
               <div class="inner_stock">Còn lại: ${x.stock}</div>
            </div>
            </div>
         `
      );
   const divProductList=document.querySelector("#product_list");
   divProductList.innerHTML=newArray.join("");
 })


