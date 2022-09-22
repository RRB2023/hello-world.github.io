const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-image.jpeg') {
    myImage.setAttribute('src','images/firefox2.jpg');
  } else {
    myImage.setAttribute('src','images/firefox-image.jpeg');
  }
}
 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to my first website ${myName}`;
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Welcome to my first website ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }
  function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Welcome to my first website ${myName}`;
    }
  }
    
  