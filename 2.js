// Submit event
const form=document.querySelector(".form")

form.addEventListener('submit',function(e){
    e.preventDefault();     // to stop it from going so that we can record it

    const ht=document.querySelector(".ht");
    const wt= parseInt(document.querySelector(".wt").value);
    let ans;

    console.log(ht,typeof ht.value);
    h=parseInt(ht.value)
    console.log(h,typeof h);

    const res=form.querySelector("#result");
    if (h<0 || wt<0){
        res.innerText="Please give Valid height and Weight"
    }else{
        ans=(wt/(h*h/10000))
        const text=`Your BMI is ${ans.toFixed(3)}`;
        if (ans<18.6){
            res.innerText=`${text}\nUNDER WEIGHT`
        }else if(ans<=24.9){
            res.innerText=`${text}\nNORMAL`
        }else{
            res.innerText=`${text}\nOVERWEIGHT`
        }
    }
    
})

