/**
 * Language Switching Logic
 * Helps in managing language preferences and redirection
 */

document.addEventListener('DOMContentLoaded', () => {
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // If the link is to a different folder, we don't need to prevent default
            // but we want to save the preference.
            const href = btn.getAttribute('href');
            let lang = '';
            if (href.includes('/en/')) lang = 'en';
            if (href.includes('/my/')) lang = 'my';
            
            if (lang) {
                localStorage.setItem('preferred_lang', lang);
            }
        });
    });
});