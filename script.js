let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let qrinput=document.getElementById("qr").Value
    let img=document.querySelector("img")
    img.src=`https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${qrinput}`
})