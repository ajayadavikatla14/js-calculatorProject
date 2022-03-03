let mainInput=document.querySelector('#inputval');

const leftBracket=document.querySelector('#btn_left_bracket');
const rightBracket=document.querySelector('#btn_right_bracket');
const clear=document.querySelector('#btn_clear');
const dot=document.querySelector('#btn_dot');
const equal=document.querySelector('#btn_equal');

const division=document.querySelector('#btn_div');
const mod=document.querySelector('#btn_mod');
const mult=document.querySelector('#btn_mult');
const minus=document.querySelector('#btn_minus');
const plus=document.querySelector('#btn_plus');

const numOne=document.querySelector('#btn_1');
const numTwo=document.querySelector('#btn_2');
const numThree=document.querySelector('#btn_3');
const numFour=document.querySelector('#btn_4');
const numFive=document.querySelector('#btn_5');
const numSix=document.querySelector('#btn_6');
const numSeven=document.querySelector('#btn_7');
const numEight=document.querySelector('#btn_8');
const numNine=document.querySelector('#btn_9');
const numZero=document.querySelector('#btn_0');

let str='';

leftBracket.addEventListener('click',()=>{
    str=str+(leftBracket.innerHTML);
    mainInput.value=str;
    console.log(str);
})

rightBracket.addEventListener('click',()=>{
    str=str+(rightBracket.innerHTML);
    mainInput.value=str;
    console.log(str);
})

division.addEventListener('click',()=>{
    str=str+(division.innerHTML);
    mainInput.value=str;
    console.log(str);
})

mult.addEventListener('click',()=>{
    str=str+(mult.innerHTML);
    mainInput.value=str;
    console.log(str);
})

mod.addEventListener('click',()=>{
    str=str+(mod.innerHTML);
    mainInput.value=str;
    console.log(str);
})

plus.addEventListener('click',()=>{
    str=str+(plus.innerHTML);
    mainInput.value=str;
    console.log(str);
})

minus.addEventListener('click',()=>{
    str=str+(minus.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numOne.addEventListener('click',()=>{
    str=str+(numOne.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numTwo.addEventListener('click',()=>{
    str=str+(numTwo.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numThree.addEventListener('click',()=>{
    str=str+(numThree.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numFour.addEventListener('click',()=>{
    str=str+(numFour.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numFive.addEventListener('click',()=>{
    str=str+(numFive.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numSix.addEventListener('click',()=>{
    str=str+(numSix.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numSeven.addEventListener('click',()=>{
    str=str+(numSeven.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numEight.addEventListener('click',()=>{
    str=str+(numEight.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numNine.addEventListener('click',()=>{
    str=str+(numNine.innerHTML);
    mainInput.value=str;
    console.log(str);
})

numZero.addEventListener('click',()=>{
    str=str+(numZero.innerHTML);
    mainInput.value=str;
    console.log(str);
})

clear.addEventListener('click',()=>{
    mainInput.value=0;
    str='';
})

let operator;
let new_str;
let someArr;

equal.addEventListener('click',()=>{
    new_str=Array.from(str);
    console.log(new_str);

new_str.map(element => {
    if(element=='+' || element=='-' || element=='*' || element=='%' || element=='/'){
        operator=element;
        return operator;
    }
});

updated_str=str.replace(operator,' ');
someArr=updated_str.split(' ');
let popVal=someArr.pop();
let someArrNext=[];
someArrNext.unshift(popVal);

console.log(someArr);
console.log(someArrNext);
console.log(operator);



const sumFunc=(someArr_arg)=>{
    let outputVal=0;
    someArr_arg.map((ele)=>{
        someArrNext.map((ele2)=>{
            ele=parseInt(ele);
            ele2=parseInt(ele2)
            outputVal=ele+ele2;
        })
    })
    mainInput.value=outputVal;
}

const minusFunc=(someArr_arg)=>{
    let outputVal=0;
    someArr_arg.map((ele)=>{
        someArrNext.map((ele2)=>{
            ele=parseInt(ele);
            ele2=parseInt(ele2)
            outputVal=ele-ele2;
        })
    })
    mainInput.value=outputVal;
}

const divideFunc=(someArr_arg)=>{
    let outputVal=0;
    someArr_arg.map((ele)=>{
        someArrNext.map((ele2)=>{
            ele=parseInt(ele);
            ele2=parseInt(ele2)
            outputVal=ele%ele2;
        })
    })
    mainInput.value=outputVal;
}

const modFunc=(someArr_arg)=>{
    let outputVal=0;
    someArr_arg.map((ele)=>{
        someArrNext.map((ele2)=>{
            ele=parseInt(ele);
            ele2=parseInt(ele2)
            outputVal=ele/ele2;
        })
    })
    mainInput.value=outputVal;
}

const multFunc=(someArr_arg)=>{
    let outputVal=0;
    someArr_arg.map((ele)=>{
        someArrNext.map((ele2)=>{
            ele=parseInt(ele);
            ele2=parseInt(ele2)
            outputVal=ele*ele2;
        })
    })
    mainInput.value=outputVal;
}



switch(operator){
    case '+' :sumFunc(someArr);
        break;
    case '-':minusFunc(someArr);
        break;
    case '%':divideFunc(someArr);
        break;
    case '/':modFunc(someArr);
        break;
    case '*':multFunc(someArr);
        break;
}

// console.log(outputVal);


})





