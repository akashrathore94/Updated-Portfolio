const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('.link');

const options = {
    threshold: 0.2
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {        
        if(!entry.isIntersecting){
            return;
        } else {
            const className = entry.target.className;
            if(className == 'container demo home'){
                links.forEach(link => {
                       link.classList.remove('active');
                });
                document.querySelector('.except').classList.add('active');
                return;
            }
            links.forEach(link => {

               if(link.getAttribute('data-page') == className){
                   links.forEach(link => {
                       link.classList.remove('active');
                   });
                   link.classList.add('active');
               }  
            });
        }
    });
};

sections.forEach(section => {
    observer.observe(section);
});


function myFunction1(){
    document.querySelector('.backstage').style.display = "block";
}
function myclose1(){
    document.querySelector('.backstage').style.display = "none";
}