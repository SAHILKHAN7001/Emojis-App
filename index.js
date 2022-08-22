let emojis = ["😅", "😂" ,"🤣","🥲"];


function Render() {
    let emojicontainer = document.getElementById("emoji-container");
     emojicontainer.innerHTML = ""
    for(let i=0; i <emojis.length; i++) {
        let emojisdisplay = "";
       emojisdisplay = `<span> ${emojis[i]} </span>`;
       emojicontainer.innerHTML += emojisdisplay;
    }
}

Render();

// add to end button 

let pushbtn = document.getElementById("push-btn");
pushbtn.addEventListener("click",function() {
    let emojiinput = document.getElementById("emoji-input"); 
 if(emojiinput.value) { 
     emojis.push(emojiinput.value);
    emojiinput.value = "";
    Render()
 }
})

// add to beginning button 

let unshiftbtn = document.getElementById("unshift-btn");
unshiftbtn.addEventListener("click",function() {
    let emojiinput = document.getElementById("emoji-input"); 
 if(emojiinput.value) { 
     emojis.unshift(emojiinput.value);
    emojiinput.value = "";
    Render()
 }
})

// remove to end button 

let popbtn = document.getElementById("pop-btn");
popbtn.addEventListener("click",function() {
  emojis.pop(emojis);
    Render()
})
// remove to beginning button 

let shiftbtn = document.getElementById("shift-btn");
shiftbtn.addEventListener("click",function() {
  emojis.shift(emojis);
    Render()
})