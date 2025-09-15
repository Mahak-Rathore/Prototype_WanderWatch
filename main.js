document.addEventListener('DOMContentLoaded', () => {
    // Example: Show stored tourist name on dashboard if present
    const touristData = sessionStorage.getItem('tourist');
    if (touristData) {
        try {
            const tourist = JSON.parse(touristData);
            const namePlaceholders = document.querySelectorAll('.tourist-name');
            namePlaceholders.forEach(el => {
                el.textContent = tourist.name || 'Tourist';
            });
        } catch (err) {
            console.error('Error parsing tourist data:', err);
        }
    }

    // Example: Simple logout (clear session)
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.clear();
            window.location.href = 'index.html';
        });
    }
});

function showGeoFenceAlert(message) {
    const alertBox = document.getElementById('alert');
    if (alertBox) {
        alertBox.textContent = message;
        alertBox.style.display = 'block';
    } else {
        alert(message);
    }
}
