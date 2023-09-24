
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
            const formData = new FormData(form);

            request.send(formData);

            request.addEventListener('load', () => {
                if (request.status === 200) {
                    console.log(request.response);
                    statusMessage.textContent = message.success;
                    form.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 2000);   
                } else {
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
    postData(form)
}

formData()