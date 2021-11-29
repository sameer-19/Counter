var current = document.querySelector('.first');
var next = document.querySelector('.next');

function startCounter(){
    var dataCount=document.getElementById('inputt').value;
    console.log(dataCount);
    let currentCount = 0;
    var interval = setInterval(function(){
        if(currentCount==dataCount)
        {
            clearInterval(interval);
            return;
        }
        next.classList.add('animate');
        current.innerText = currentCount;
        next.innerText = currentCount+1;
        currentCount++; 
        setTimeout(function(){
            current.innerText=next.innerText;
            next.classList.remove('animate');
        },500);
    },1000);
}
// function animate()
// {
//     next.classList.add('animate');
    
//     setTimeout(function(){
//         next.classList.remove('animate');
//     },500);
// }