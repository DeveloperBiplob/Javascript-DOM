
// const select = function(ele){return document.querySelector(ele)}
const select = (ele)=> {return document.querySelector(ele)}

// setTimeout(function(){
//     select('#demu').style.color = 'red';
//     select('#demu').style.fontSize = '30px';
// }, 2000)

// function myMove(){

//     const animate = select('#animate');

//     const setTime = setInterval(frame, 5);
    
//     let pos = 0;
//     function frame(){
//         if(pos == 350){
//             clearInterval(setTime);
//         }else{
//             pos++
//             animate.style.top = pos + 'px'
//             animate.style.left = pos + "px"
//         }
//     }
// }


function myMove(){

    const animate = select('#animate');

 
    let closeTime = null;
    // let setTime = null;

    let setTime = setInterval(frame, 5);

    
    let pos = 0;
    function frame(){
        if(pos == 350){
            clearInterval(setTime);
            closeTime = setInterval(closeFarme, 5);
        }else{
            pos++
            animate.style.top = pos + 'px'
            animate.style.left = pos + "px"
        }
    }

    function closeFarme(){
        if(pos == 0){
            clearInterval(closeTime);
            setTime = setInterval(frame, 5);

        }else{
            pos--
            animate.style.top = pos + 'px'
            animate.style.left = pos + "px"
        }
    }
}






