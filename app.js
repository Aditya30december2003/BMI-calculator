let gender=document.querySelector('.gender');
let male=document.querySelector('.male')
let female=document.querySelector('.female')
gender.addEventListener('click',(e)=>{
    let id=e.target.id
    if(id){
        if(id=='male'){
        male.classList.add('select')
        female.classList.remove('select')
        }
        if(id=='female'){
            female.classList.add('select')
            male.classList.remove('select')
        }
    }
})

//BMI calculations

let weight=document.getElementById('weight');
let height=document.getElementById('height');
let age=document.getElementById('age');
let bmi=document.querySelector('.bmi');

let calculate=document.querySelector('.button');

calculate.addEventListener('click',()=>{
    bmi.innerHTML=Math.floor(Number(weight.value)/Number(height.value*height.value));
    if(bmi.innerHTML<=16){
        document.querySelector('.status').innerHTML="Severe Thiness!!!"
        document.querySelector('.status').computedStyleMap.color='red';
    }
    if(bmi.innerHTML>16){
        document.querySelector('.status').innerHTML="Moderate Thiness"
        document.querySelector('.status').style.color='red';
    }
    if(bmi.innerHTML>17){
        document.querySelector('.status').innerHTML="Mild Thiness"
        document.querySelector('.status').style.color='yellow';
    }
    if(bmi.innerHTML>18.5){
        document.querySelector('.status').innerHTML="Normal"
        document.querySelector('.status').style.color='rgb(23, 237, 3)';
    }
    if(bmi.innerHTML>25){
        document.querySelector('.status').innerHTML="Overweight";
        document.querySelector('.status').style.color='yellow';
    }
    if(bmi.innerHTML>30 ){
        document.querySelector('.status').innerHTML="Obese Class I"
        document.querySelector('.status').style.color='rgb(23, 237, 3)';
    }
    if(bmi.innerHTML>35){
        document.querySelector('.status').innerHTML="Obese Class II"
        document.querySelector('.status').style.color='red';
    }
    if(bmi.innerHTML>40){
        document.querySelector('.status').innerHTML="Obese Class III"
        document.querySelector('.status').style.color='red';
    }
})

window.addEventListener('DOMContentLoaded',()=>{
    weight.value="";
    height.value="";
    age.value=0
})


