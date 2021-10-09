'use strict';

{ 
 const btn=document.getElementById('btn');

 btn.addEventListener('click',()=>{
    const results = ['大好きだよ', '素敵ね', 'お疲れさま', 'very Good!', 'きっといい日になる','頑張ったね'];
    btn.textContent= results[Math.floor(Math.random() * results.length)];
 });



}