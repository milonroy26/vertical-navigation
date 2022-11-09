const allitem = document.querySelectorAll (".navmenu ul li a");

allitem.forEach(item => {
    item.addEventListener('click', function(e){

        for(let i = 0; i < allitem.length; i++) {
            allitem[i].classList.remove("active");
        }
        this.classList.add('active');
    })
})