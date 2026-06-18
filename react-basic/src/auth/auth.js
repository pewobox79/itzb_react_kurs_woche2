export function isAuthenticated() {

    // => zugriff auf localstorage als init prüfung
    const storageValue = localStorage.getItem("itzb_user")
    const user = JSON.parse(storageValue)
    console.log("user in auth", user)
    return user ? user.loggedIn : false
}