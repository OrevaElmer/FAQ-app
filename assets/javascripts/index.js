//using selectors inside the element
const questions = document.querySelectorAll(".question")

questions.forEach((question)=>{
    const titleDiv = question.querySelector(".title")
    titleDiv.addEventListener("click", ()=>{
        questions.forEach((item)=>{
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })
})


// //tranversing the DOM
// const btns = document.querySelectorAll(".btn")

// btns.forEach((btn)=>{
//     btn.addEventListener("click", (e)=>{
//         let question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle("show-text")
//     })
// })