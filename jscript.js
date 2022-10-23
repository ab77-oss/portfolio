// let index=0;
// function l_r(v, step){
//     if (v==='left'){
//         index !== 0 ? index-- : 4;
//     }
//     if (v==='right') {
//         index !== 4 ? index++ : 0;
//     }
//     console.log(index);
//     document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(-${step*index}vw)`;
//     document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";
// }

// if (window.matchMedia('(max-width: 480px)').matches){
//     console.log(index);
//     document.getElementsByClassName("button_circle_right")[0].addEventListener("click", l_r('right', 72));
//     document.getElementsByClassName("button_circle_left")[0].addEventListener("click", l_r('left', 72));
// } 
// if (window.matchMedia('(min-width: 481px)').matches){
//     console.log(index);
//     document.getElementsByClassName("button_circle_right")[0].addEventListener("click", l_r('right', 70));
//     document.getElementsByClassName("button_circle_left")[0].addEventListener("click", l_r('left', 70));
// }
// if (window.matchMedia('(min-width:992px)').matches){
//     console.log(index);
//     document.getElementsByClassName("button_circle_right")[0].addEventListener("click", l_r('right', 37.5));
//     document.getElementsByClassName("button_circle_left")[0].addEventListener("click", l_r('left', 37.5));
// }









const mediaQuery = window.matchMedia('(max-width: 480px)')
if ( mediaQuery.matches){
    let index=0;

        const right = () => {
            index !== 4 ? index++ : 0;
            console.log(index);
            document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-72*(index)}vw)`;
            document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";
        }

        const left = () => {
            index !== 0 ? index-- : 4;
            console.log(index);
            document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-72*(index)}vw)`;
            document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";

        }

        document.getElementsByClassName("button_circle_right")[0].addEventListener("click", right)
        document.getElementsByClassName("button_circle_left")[0].addEventListener("click", left)
}

const mediaQuery1 = window.matchMedia('(min-width: 481px)')
if ( mediaQuery1.matches){
    let index=0;

        const right = () => {
            index !== 4 ? index++ : 0;
            console.log(index);
            document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-70*(index)}vw)`;
            document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";
        }

        const left = () => {
            index !== 0 ? index-- : 4;
            console.log(index);
            document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-70*(index)}vw)`;
            document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";

        }

        document.getElementsByClassName("button_circle_right")[0].addEventListener("click", right)
        document.getElementsByClassName("button_circle_left")[0].addEventListener("click", left)
}


const mediaQuery2 = window.matchMedia('(min-width:992px)')
if ( mediaQuery2.matches){
let index=0;

const right = () => {
    index !== 2 ? index++ : 0;
    console.log(index);
    document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-37.5*(index)}vw)`;
    document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";
}

const left = () => {
    index !== 0 ? index-- : 2;
    console.log(index);
    document.getElementsByClassName("caroussel_image")[0].style.transform = `translateX(${-37.5*(index)}vw)`;
    document.getElementsByClassName("caroussel_image")[0].style.transition = "all 0.5s ease-out";

}

document.getElementsByClassName("button_circle_right")[0].addEventListener("click", right)
document.getElementsByClassName("button_circle_left")[0].addEventListener("click", left)
}