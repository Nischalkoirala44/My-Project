function toggleTheme() {
    var body = document.body;
    var themeIcon = document.getElementById('themeIcon');
    
    if (body.classList.contains("dark-theme")) {
        // Switch from dark to light theme
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    } else {
        // Switch from light to dark theme (assuming no other theme classes)
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }
}

function hire() {
    alert('Thanks for hiring me');
}
