// console.log("one");
// console.log("two");
// console.log("three");
// function hello (){
//     console.log("one");
// }
// setTimeout(hello,2000);
console.log("one");
console.log("two");
setTimeout(()=>{console.log("one");},4000);
console.log("three");
console.log("four");

for(let i= 0; i<5;i++){
    let st= "";
    for(let j= 0;j<5;j++){
        st=st+j
    
    }
    console.log(i,st);
}
function getData(data,getNextData){
    setTimeout(()=>{
        console.log("data",data);
        if(getNextData){
            getNextData()
        }
    },5000)
}
getData(1,()=>{
    console.log("loading data2.....");
    getData(4,()=>{
        console.log("loading data3.....");
        getData(5,()=>{
            console.log("loading data4.....");
            getData(6)
        })
    })
});
// getData(2);
// getData(5);
// let promise = new Promise((resolve,reject)=>{
// console.log("i am a promoise");
// // resolve("sucess");
// reject("some error occured");

// });
// const getMyData=(data)=>{
//     return promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("data",data);
//             resolve("sucess");
//             // reject("error");
//             // if(getNextData){
//             //     getNextData()
//             // }
//         },5000)

//     })
  
// }
// const getMyData2=()=>{
//     return promise = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//              console.log("data2");
//             resolve("sucess");
//             // reject("error");
//             // if(getNextData){
//             //     getNextData()
//             // }
//         },3000)

//     })
  
// }
// // console.log("data 1 fetching...............");
// // let my = getMyData(1233);
// // my.then((res)=>{
// //     console.log("a+b",res);
// //     console.log("data 2 fetching...............");
// // let my1 = getMyData2();
// // my1.then((res)=>{
// //     console.log("feched successfully data 2",res);
// // });
// // my.catch((err)=>{
// //     console.log("a-b");
// // })
// // });
// // my.catch((err)=>{
// //     console.log("a-b");
// // })
// // console.log("data 1 fetching...............");
// // getMyData(1233).then((res)=>{
// //     console.log("a+b",res);
// //     console.log("data 2 fetching...............");
// //  getMyData2().then((res)=>{
// //     console.log("feched successfully data 2",res);
// //     console.log("data 2 fetching...............");
// //     getMyData(222222).then((res)=>{
// //        console.log("feched successfully data 3",res);
       
// //    })
    
// // });
// // getMyData2().catch((err)=>{
// //     console.log("a-b");
// // })
// // });
// // getMyData(1233).catch((err)=>{
// //     console.log("a-b");
// // })
// console.log("data fetching...............");

// getMyData(1222)
//   .then((res) => {
//     return getMyData(3233);
//   })
//   .then((res) => {
//     return getMyData(3553);
//   })
//   .then((res) => {
//     console.log("yes", res);
//   });
function myData(data){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{console.log("my happyness",data)
        resolve("successed");},5000)
        
    })
}
// async function api(){
//     await myData(1);
//     await myData(2);
//     await myData(3);
//     await myData(5);
// } 
//IIFE function called once automatically
(async function (){
    await myData(1);
    await myData(2);
    await myData(3);
    await myData(4);
})() ;