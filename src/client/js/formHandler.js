function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('article').value

    const data = formText;
    
    if(Client.checkInput(data)) {

        // console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/process', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({data})
        })
        .then((res) => res.json())
        .then((res) => Client.updateUI(res))
    } else {
        alert('Please enter a valid URL starting with http:// or https://')
    }
}

export { handleSubmit }
