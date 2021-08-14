//using selectors inside the element: từ thằng cha chạy vô thằng con
// const questions = document.querySelectorAll('.question')
// questions.forEach(function(question) {
//     const btn = document.querySelector('.question-btn')
//     btn.onclick = function() {
//         questions.forEach(function(item) {
//             if(item !== question) {
//                 item.classList.remove('show-text')
//             }
//             question.classList.toggle('show-text')
//         })
//     }
// })

//tranvesing the DOM: từ thằng con chạy ra thằng cha
const btns = document.querySelectorAll('.question-btn');
btns.forEach(function(btn) {
    btn.onclick = function(e) {
        const question  = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    }
    // btn.onblur = function(e) {
    //     const question  = e.currentTarget.parentElement.parentElement
    //     question.classList.toggle('show-text')
    // }
})