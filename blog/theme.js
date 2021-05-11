const link = document.getElementsByTagName('link')[0]

function toggle() {
    link.getAttribute('href') =='dark.css' ? setLight() : setDark() 
}

function setLight() {
    document.getElementById('theme').innerHTML = 
        'read this article in dark theme'
    link.setAttribute('href', 'default.css')
}

function setDark() {
    document.getElementById('theme').innerHTML = 
        'read this article in light theme'
    link.setAttribute('href', 'dark.css')
}
