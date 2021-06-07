function checkInput (inputText) {
    console.log("::: Running checkForName :::", inputText);
    const r = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return r.test(inputText);
}

export { checkInput }
