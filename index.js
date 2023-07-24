const button = document.querySelectorAll(".tab-btn")
// console.log(button)
const content = document.querySelectorAll(".content")
// console.log(content)
for(let i=0;i<button.length;i++){
    // console.log(button[i])
    button[i].addEventListener("click",(e)=>{
        // console.log(e.target)
        const target = e.target.dataset.id
        for(let i=0;i<content.length;i++){
            if(target===content[i].id){
                content[i].classList.add("active")
                button[i].classList.add("active")
            }
            else{
                content[i].classList.remove("active")
                button[i].classList.remove("active")
            }
        }
    })
}

































const btns = document.querySelectorAll(".btn")
const output = document.querySelectorAll(".content")



for(let i=0;i<btns.length; i++){
    btns[i].addEventListener("click",(e)=>{
        const target = e.target.dataset.id;
        for(let i=0;i<output.length;i++){
            if(target === output[i].id){
                output[i].classList.add("active")
                btns[i].classList.add("active")
            }
            else{
                output[i].classList.remove("active")
                btns[i].classList.remove("active")
                }
        }
    })
}



// for(let i=0;i<button.length;i++){
//     // console.log(button[i].dataset.id);
//     button[i].addEventListener("click",function(e){
//         // alert("hi everyone")
//         // console.log(e)
//         const target=e.target.dataset.id
//         for(let i=0;i<content.length;i++){
//             // console.log(content[i])
//             if(target===content[i].id){
//                 content[i].classList.add("active")
//                 button[i].classList.add("active")

//             }
//             else{
//                 content[i].classList.remove("active")
//                 button[i].classList.remove("active")

//             }

//         }
        
        
//     })
// }
//selecting targeted elements
// const button = document.querySelectorAll(".tab-btn")
// const content = document.querySelectorAll(".content") 

// //using loop to check button condition
// for(let i=0;i<button.length;i++){
//     button[i].classList.remove("active")
    
//     button[i].addEventListener("click",function(e){
//         // console.log(e.target)
//         let id = e.target.dataset.id
//         for(let i=0;i<content.length;i++){
//             // console.log(content[i])
//             content[i].classList.remove("active")
//         }

//         const elements = document.getElementById(id)
//         elements.classList.add("active")
//     })
// }
