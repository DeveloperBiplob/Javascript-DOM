
// const select = function(ele){return document.querySelector(ele)}
const select = (ele)=> {return document.querySelector(ele)}

// setTimeout(function(){
//     select('#demu').style.color = 'red';
//     select('#demu').style.fontSize = '30px';
// }, 2000)



// Single box Animatin-----//

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


// Two box Animatin-----//

// function myMove(){

//     const animate = select('#animate');
//     const animate2 = select('#animate2');

 
//     let closeTime = null;
//     // let setTime = null;

//     let setTime = setInterval(frame, 5);

    
//     let pos = 0;
//     function frame(){
//         if(pos == 350){
//             clearInterval(setTime);
//             closeTime = setInterval(closeFarme, 5);
//         }else{
//             pos++
//             animate.style.top = pos + 'px'
//             animate.style.left = pos + "px"

//             animate2.style.top = pos + 'px'
//             animate2.style.right = pos + "px"
//         }
//     }

//     function closeFarme(){
//         if(pos == 0){
//             clearInterval(closeTime);
//             setTime = setInterval(frame, 5);

//         }else{
//             pos--
//             animate.style.top = pos + 'px'
//             animate.style.left = pos + "px"

//             animate2.style.top = pos + 'px'
//             animate2.style.right = pos + "px"
//         }
//     }
// }

// // Foure box Animatin-----//

function myMove(){

    const animate = select('#animate');
    const animate2 = select('#animate2');
    const animate3 = select('#animate3');
    const animate4 = select('#animate4');

 
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

            animate2.style.top = pos + 'px'
            animate2.style.right = pos + "px"

            animate3.style.bottom = pos + 'px'
            animate3.style.left = pos + "px"

            animate4.style.bottom = pos + 'px'
            animate4.style.right = pos + "px"
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

            animate2.style.top = pos + 'px'
            animate2.style.right = pos + "px"

            animate3.style.bottom = pos + 'px'
            animate3.style.left = pos + "px"

            animate4.style.bottom = pos + 'px'
            animate4.style.right = pos + "px"
        }
    }
}






