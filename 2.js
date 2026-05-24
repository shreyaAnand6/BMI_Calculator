// Submit event
const form=document.querySelector(".form")

form.addEventListener('submit',function(e){
    e.preventDefault();     // to stop it from going so that we can record it

    const ht=document.querySelector(".ht");
    const wt= parseInt(document.querySelector(".wt").value);

    console.log(ht,typeof ht.value);
    h=parseInt(ht.value)
    console.log(h,typeof h);

    const res=form.querySelector("#result");
    if (h<0 || wt<0){
        res.innerText="Please give Valid height and Weight"
    }else{
        res.innerText=`Your BMI is ${wt/(h*h/10000).toFixed(3)}`;
    }
    

})

