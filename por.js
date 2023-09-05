// // scrol section active links 
// let section = document.querySelectorAll('section')
// let header = document.querySelector('.header')
// let navLinks =document.querySelectorAll('header nav a')

// window.addEventListener = () =>{

//     section.forEach(sec =>{
//         let top= window.scrollY;
//         let offset=sec.offsetTop -150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top>=offset && top< offset+height){
//         navLinks.forEach(links =>{
//             links.classList.remove(active);
//             document.querySelector('header nav a[href*=' + id +']').classList.add('active');
//         });
//         };
//     });
// };
// const activePage= window.location;
// console.log(activePage)


// let navLinks =document.querySelectorAll('nav a').
// forEach(link =>{
//     console.log(link.href.includes(`${activePage}`))
//     {
//      link.classList.add('active');  
//     }
// })

// const navbarItems = document.querySelectorAll('nav a');

// navbarItems.forEach(item => {
//   item.addEventListener('click', () => {
//     // Remove active class from all navbar items
//     navbarItems.forEach(item => {
//       item.classList.remove('active');
//     });
    
//     // Add active class to clicked navbar item
//     item.classList.add('active');
//   });
// });

function sendMail(){
  let params={
     from_name: document.getElementById("user_name").value,
     user_email: document.getElementById("user_email").value ,
     user_phone: document.getElementById("user_phone").value ,
     second_email: document.getElementById("second_email").value ,
     Message: document.getElementById("Message").value ,
     myForm: document.getElementById("myForm").reset()
  }
  emailjs.send("service_n8vtguq", "template_d81zxte", params).then(function(){
    alert ("Email sent")
    
  })
  
}



// toggle icon
let menu = document.querySelector('#menu')
let nav = document.querySelector('#nav')

menu.onclick =() =>{
    menu.classList.toggle('fa-x');
    nav.classList.toggle('active');
}

document.onclick =function(e){
  if(e.target.id !=='header' && e.target.id !=='menu'){
    menu.classList.remove('fa-x');
    nav.classList.remove('active');
  }
}



// const navLinks = document.querySelectorAll('nav a');

// navLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     // Remove active class from all nav links
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//     });
    
//     // Add active class to clicked nav link
//     link.classList.add('active');
//   });
  
//   // Check if the link's href matches the current page URL
//   if (link.href === window.location.href) {
//     link.classList.add('active');
//   }
//   let header = document.querySelector('.header')
//   header.classList.toggle('sticky',window.scrollY>100);

//   menu.classList.remove('fa-x');
//   nav.classList.remove('active');
// });
// Get all the navigation links








const navLinks = document.querySelectorAll('.nav a');

// Add an event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove the active class from all navigation links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add the active class to the clicked navigation link
    link.classList.add('active');
  });
});

// Add an event listener to the window object for scrolling
window.addEventListener('scrollY', () => {
  // Get the current scroll position
  const currentScrollPos = window.pageYOffset;

  // Loop through each section on the page
  document.querySelectorAll('section').forEach(section => {
    // Get the top position of the section
    const sectionTop = section.offsetTop;

    // Check if the current scroll position is within the section
    if (currentScrollPos >= sectionTop - 50) {
      // Remove the active class from all navigation links
      navLinks.forEach(link => link.classList.remove('active'));
      // Get the href of the section and add the active class to the corresponding navigation link
      const href = `#${section.getAttribute('id')}`;
      document.querySelector(`nav a [href='${href}']`).classList.add('active');
    }
  });
});
// scroll reveal
ScrollReveal({ 
  reset: true,
  distance :'80px',
  duration : 2000,
  delay: 200,

});
ScrollReveal().reveal('.home-content, .heado', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-box,.project,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.hhead,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3,.about-content', { origin: 'bottom' });

// auto typedjs
// const typed = new typed('.erayo', {
//   Strings:['Fullstack Devoloper','Mopile App Devoloper','Ethical Hacker','and others'],
//   typeSpeed:100,
//   backSpeed:100,
//   backDelay:1000,
//   loop:true
// });




