/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

/*Add an image changer*/
var myImage = document.querySelector('img');

myImage.onclick = function(){
    
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/america.svg')
    {
      myImage.setAttribute('src','images/hulk.svg')        
    }
    else
    {
      myImage.setAttribute('src','images/america.svg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'Hello '+myName+', Welcome to The Heroes Gathering';
}

if( !localStorage.getItem('name') ){ //check if 'name' data item has a value,  if it doesnt then we give it a value by calling setUserName
    setUserName();
}
else{ //if 'name' data item has value (that is, the user set it during a previous visit), we retrieved it and display it @ the h1 element
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello '+myName+' welcome to The Heroes Gathering';
}

myButton.onclick = function(){
    setUserName();
}

