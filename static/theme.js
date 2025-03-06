function setThemeBasedOnSystemPreference() {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    function applyTheme() {
        let storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme);
        } else {
            if (darkModeMediaQuery.matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
            } else { // light as default
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }
        updateIcons();
    }

    // 初始应用主题
    applyTheme();

    // 监听系统主题变化
    darkModeMediaQuery.addEventListener('change', applyTheme);
    lightModeMediaQuery.addEventListener('change', applyTheme);
}

console.log("script loaded")
function changeTheme() {
    console.log("change theme loaded")

    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons();
}

function updateIcons() {
    const sunIcon = document.getElementById('sun-icon');
    const sunIconMobile = document.getElementById('sun-icon-mobile');
    const moonIcon = document.getElementById('moon-icon');
    const moonIconMobile = document.getElementById('moon-icon-mobile');

    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        sunIcon.classList.remove('hidden');
        sunIconMobile.classList.remove('hidden');
        moonIcon.classList.add('hidden');
        moonIconMobile.classList.add('hidden');
    } else {
        sunIcon.classList.add('hidden');
        sunIconMobile.classList.add('hidden');
        moonIcon.classList.remove('hidden');
        moonIconMobile.classList.remove('hidden');
    }
}

// 在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', setThemeBasedOnSystemPreference);
