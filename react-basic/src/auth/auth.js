export function isAuthenticated() {

    // => zugriff auf localstorage als init prüfung
    const storageValue = localStorage.getItem("itzb_user")
    const user = storageValue ? JSON.parse(storageValue) : {loggedIn: false}
    return user.loggedIn
}