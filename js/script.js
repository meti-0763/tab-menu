let bnts = document.querySelectorAll(".tab-button")
let con = document.querySelectorAll(".content")


function datamatch(dt){
    con.forEach(element => {
       element.classList.remove("active")
    });

document.querySelector(`#${dt}`).classList.add("active")
    
}

bnts.forEach (btn=> btn.onclick = (e)=>{
    datamatch(btn.dataset.id)
    
    
})