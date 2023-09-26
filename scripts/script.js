const collapse = document.getElementsByClassName('faqContainer');

for(let i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}