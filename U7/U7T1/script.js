document.getElementById("save").addEventListener("click", savePair);
document.getElementById("delete").addEventListener("click", deletePair);
document.getElementById("refresh").addEventListener("click", refreshStorage);
document.getElementById("compatibility").addEventListener("click", checkCompatibility);

function savePair() {

    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    if (checkKeyValue(key, value)) {

        let storage = document.getElementById("area").value;

        if (storage === "local") {

            localStorage.setItem(key, value);
            loadPair(key, storage);
        } else {

            sessionStorage.setItem(key, value);
            loadPair(key, storage);
        }
    }

}

function deletePair() {


    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    if (checkKeyValue(key, value)) {

        let storage = document.getElementById("area").value;

        if (storage === "local" && localStorage.length > 0) {

            for (let i = 0; i < localStorage.length; i++) {

                if (localStorage.key(i) == key) {
                   
                    localStorage.removeItem(key);
                    refreshStorage();
                    break;
                }
            }
        } else if (storage === "session" && sessionStorage.length > 0) {

            for (let i = 0; i < sessionStorage.length; i++) {

                if (sessionStorage.key(i) == key) {

                    sessionStorage.removeItem(key);
                    refreshStorage();
                    break;
                }
            }
        }
    }

}

function refreshStorage() {

    let storage = document.getElementById("area").value;

    if (storage === "local") {

        if (localStorage.length > 0) {

            let localArea = document.getElementById("localStorage");
            let key = "";
            let value = "";
            localArea.value = "";

            for (let i = 0; i < localStorage.length; i++) {

                key = localStorage.key(i);
                console.log(key);
                value = localStorage.getItem(key);
                console.log(value);
                localArea.value += key + " : " + value + "\n";
            }
        } else {

            document.getElementById("localStorage").value = "";
        }
    } else if (storage === "session") {

        if (sessionStorage.length > 0) {

            let sessionArea = document.getElementById("sessionStorage");
            let key = "";
            let value = "";
            sessionArea.value = "";

            for (let i = 0; i < sessionStorage.length; i++) {

                key = sessionStorage.key(i);
                value = sessionStorage.getItem(key);
                sessionArea.value += key + " : " + value + "\n";
            }
        } else {

            document.getElementById("sessionStorage").value = "";
        }
    }

}




function checkCompatibility() {

    let storage = document.getElementById("area").value;

    if (storage == "local") {

        if (storageAvailable('localStorage')) {
           
            alert("LocalStorage available");
          }
          else {
            
            alert("LocalStorage not available");
          }
    } else {

        if (storageAvailable('sessionStorage')) {
           
            alert("SessionStorage available");
          }
          else {
            
            alert("SessionStorage not available");
          }
    }
    
}

function loadPair(key, storage) {

    if (storage === "local") {

        localArea = document.getElementById("localStorage");
        let value = localStorage.getItem(key);
        localArea.value += key + " : " + value + "\n";
    } else {

        sessionArea = document.getElementById("sessionStorage");
        let value = sessionStorage.getItem(key);
        sessionArea.value += key + " : " + value + "\n";
    }
}

function checkKeyValue(key, value) {

    let warning = document.getElementById("warning");

    if (key.trim().length == 0 || value.trim().length == 0) {

        warning.innerHTML = "Los campos clave y valor no pueden estar en blanco";
        return false;
    } else {

        warning.innerHTML = "";
        return true;
    }

}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}