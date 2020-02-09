// run after DOM is fully loaded
window.onload = function () {
    if (this.localStorage.getItem("theme") != null) {
        var theme = this.localStorage.getItem("theme");
        this.console.log('ok');
        document.documentElement.setAttribute('data-theme', theme);
        
    }
    // name property is theme in out input in html
    var checkbox = document.querySelector('input[name=theme]');
    this.console.log(theme);
    this.console.log(checkbox);
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            trans();
            setDark();

        } else {
            trans();
            setLight();
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition');
        }, 1000)
    }
}

function setLight() {
    document.documentElement.setAttribute('data-theme', 'light');
    this.localStorage.setItem('theme', 'light');
    console.log('light');
}

function setDark() {
    this.localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
    console.log('dark');
}