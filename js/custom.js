alert("I AM ALIVE!!");
message = "Hello World";
lucky_number = 7;
console.log(message + " your lucky number is: " + String(lucky_number));
for (i=0; i<lucky_number; i++) 
{ // a block of code in c type languages needs a curly braces.
    console.log(i); 
    if (i == 3) // True or False
    {
        console.log("3 is awesome");
    }
}

//DOCUMENT OBJECT MODEL - ALL ELEMENTS ARE TREATED AT OBJECTS!!!

clickme.onclick = showfuture;
function showfuture()
{
    futurelist = ['Yes, you should ask her out','No, dont leave study until later','Yes, work your assignment','Yes, get up now!','No dont share your music taste!'];
    
    let randomIndex = Math.floor(Math.random() * futurelist.length); 
    console.log(randomIndex);

    let randomItem = futurelist[randomIndex];
    
    document.getElementById('answer').textContent = randomItem;
}




