window.addEventListener('load', function() {
    const load_screen = document.getElementById("load-screen");
    setTimeout(() => {
        document.body.removeChild(load_screen);
           
    }, 1000);
});
