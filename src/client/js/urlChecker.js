// Function to check, if the user input is a valid URL

function checkInput (inputText) {
    console.log("::: Running checkForName :::", inputText);
    const r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkInput }
