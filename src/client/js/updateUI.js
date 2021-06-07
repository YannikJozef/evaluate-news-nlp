function updateUI (apiResponse) {
    console.log(apiResponse);
            document.getElementById('agreement').innerHTML = 'Agreement: ' + apiResponse.agreement;
            document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + apiResponse.subjectivity;
            document.getElementById('confidence').innerHTML = 'Confidence Score: ' + apiResponse.confidence;
            document.getElementById('irony').innerHTML = 'Irony: ' + apiResponse.irony;
}

export {updateUI};