function getdays() { 
    let pie = document.getElementById("pie");
    let tity = document.getElementById("tity")
    let very = document.getElementById("very");
    let box = document.getElementById("box")
    let two = document.getElementById("two")
    let twer = document.getElementById('twer')
    let boxer= document.getElementById('boxer')

    boxer.addEventListener('click' , ()=>{
        tity.value =twer.innerText
    })
    box.addEventListener('click',()=>{
        tity.value =two.innerText
    })
    pie.addEventListener('click' ,()=>{
        tity.value = very.innerText  
    })
}
getdays();  