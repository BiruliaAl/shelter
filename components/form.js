

function formData() {
    const form = document.querySelector('form');
    const message = {
        loading: 'loading',
        success: 'Thank you! We will contact you soon',
        failure: 'Something went wrong...'
    };

    function postData(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);
        
            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            const formData = new FormData(form);

            const object = {};
            formData.forEach(function(value, key){
                object[key] = value;
            });
            const json = JSON.stringify(object);

            request.send(json);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    statusMessage.remove();
                    form.reset();
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
    postData(form)
}

formData()