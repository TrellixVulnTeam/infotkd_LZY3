//Send Mail
const form = document.getElementById("form");

async function handleSubmit(event) {

    event.preventDefault();

    const data = new FormData(event.target);
    
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {

        form.reset()
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu correo se envió exitosamente!',
            showConfirmButton: false,
            background: '#222222',
            color: '#ffff',
            timer: 1500
        })

        } else {
        response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
            

                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    html: '<h3>Algo salió mal :(</h3> <p>Tu correo no se pudo enviar exitosamente</p>',
                    showConfirmButton: false,
                    background: '#222222',
                    color: '#ffff',
                    timer: 1500
                })
            }
        })
        }
    }).catch(error => {
        
        Swal.fire({
            position: 'center',
            icon: 'error',
            html: '<h3>Algo salió mal :(</h3> <p>Tu correo no se pudo enviar exitosamente</p>',
            showConfirmButton: false,
            background: '#222222',
            color: '#ffff',
            padding: '4rem 0',
            timer: 1500
        })
    });
}

form.addEventListener("submit", handleSubmit);

//Go-up Arrow
window.onscroll = function() {
    if(document.documentElement.scrollTop > 400) {
        document.querySelector('.go-up').classList.add('show');
    } else {
            document.querySelector('.go-up').classList.remove('show');
    };
};

