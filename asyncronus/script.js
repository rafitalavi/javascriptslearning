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
const getMyData=(data,getNextData)=>{
    return promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // console.log("data",data);
            // resolve("sucess");
            reject("error");
            if(getNextData){
                getNextData()
            }
        },5000)

    })
  
}
let my = getMyData(1233);
my.then((res)=>{
    console.log("a+b",err);
});
my.catch((err)=>{
    console.log("a-b");
})