export function setUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function hasOwner(ownerId) {
    const userData = getUserData();
    return ownerId === userData?._id;
}

export function createSubmitHandler(callback) {
    return function(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        
        callback(data, event.target)
    }
}

// TODO change the selector with correct parameters.
export function updateNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelector('nav .user').style.display = 'flex';
        document.querySelector('nav .guest').style.display = 'none';
    } else {
        document.querySelector('nav .user').style.display = 'none';
        document.querySelector('nav .guest').style.display = 'flex';
    }
}