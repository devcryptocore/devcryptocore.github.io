document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
    const fecha = new Date();
    const year = fecha.getFullYear();
    document.querySelector("#yrs").innerText = year;
    window.showmore = (moreBtn,lista)=> {
        const list = document.querySelector(lista);
        const hiddenItems = document.querySelectorAll(`${lista} .hidden-item`);
        if (list.classList.contains('expanded')) {
            list.classList.remove('expanded');
            hiddenItems.forEach(item => item.style.display = 'none');
            moreBtn.textContent = 'Más ⬇';
        } else {
            list.classList.add('expanded');
            hiddenItems.forEach(item => item.style.display = 'flex');
            moreBtn.textContent = 'Menos ⬆';
        }
    }
});