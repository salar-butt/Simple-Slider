var slides=document.querySelectorAll(".slide")
var counter=0;
slides.forEach((slide,index)=>{
slide.style.left=`${index*100}%`
})
var goPrev=()=>{
    counter--
    slideImage()
}
var goNext=()=>{
    if(counter>=2){
        counter=0
        slideImage()
        console.log(counter)
    }
    else{
    counter++
    slideImage()
    }
}
var slideImage=()=>{
    slides.forEach((slide)=>{
slide.style.transform=`translateX(-${counter*100}%)`
    })
}