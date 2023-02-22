function isSafe(password) {
    if (password.length < 6) {
        return false;
    }
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const numeric = /[\d]/;
    const specialCharacters = /[\W]/;

    return !(!uppercase.test(password) || !lowercase.test(password) || !numeric.test(password) || !specialCharacters.test(password));
}

const password = "8_-2sS";
console.log(isSafe(password));