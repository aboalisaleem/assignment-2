


function asetGreeting() {
    const hour = new Date().getHours();
    let greeting;
    
    if (hour < 12) {
        greeting = "Good Morning!";
    } else if (hour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    document.getElementById('greeting').textContent = greeting;

}

function setupThemeToggle() {
    const themeToggle= document.getElementById('theme-toggle');
    const savedTheme =localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent= '☀️';
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme','dark');
            themeToggle.textContent ='☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.textContent= '🌙';
        }
    });
}

