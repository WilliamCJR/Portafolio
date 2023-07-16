document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('#menu li');

    menuItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            var objetoActual = document.getElementById('cont');
            var href = this.querySelector('a').getAttribute('href');
            objetoActual.setAttribute('data', href);
        });
    });
});
