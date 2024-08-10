function showNotification(message) {
    const notification = document.getElementById('notification');
    
    if (!notification) {
        throw new Error('Notification element not found!');
    }
    
    if (typeof message !== 'string') {
        throw new Error('Message must be a string!');
    }
    
    notification.textContent = message;
    notification.style.display = 'block';
    
    notification.addEventListener('click', () => {
        notification.style.display = 'none';
    });
}
