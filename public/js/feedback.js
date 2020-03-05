// retrieve form dom element from page
let form = document.querySelector('.feedback-form')
// attach event listener
form.addEventListener('submit', (e) => {
    // prevent default behaviour
    // fetch call to post data back to server (/api)
    e.preventDefault();
    let name = document.querySelector('#feedback-form-name');
    let title = document.querySelector('#feedback-form-title');
    let message = document.querySelector('#feedback-form-message');
    //javascript object
    let data = {
        name: name.value,
        title: title.value,
        message: message.value
    }
    fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((response) => {
            //converts to javascript object
            return response.json()
        })
        .then((feedbackData) => {
            console.log(feedbackData);
        })
})