// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible d-flex align-items-center borrable" role="alert">`,
            `   <div><i class="fa-solid fa-circle-check me-2"></i>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')
    
        alertPlaceholder.append(wrapper)
        
    }
    
    
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })

    const form1 = document.getElementById('form1')

    function borrarCampos() {
        form1.reset()
        $("form").removeClass('was-validated')
    }

    const alertTrigger = document.getElementById('liveAlertBtn')

    if (alertTrigger) {
    alertTrigger.addEventListener('click', event => {
        if (form1.checkValidity()) {
            event.preventDefault()
            alert('Correo enviado con éxito!', 'success')
            borrarCampos()
            setTimeout(function () {
                $(".borrable").fadeOut("slow", "linear", function(){
                    alertPlaceholder.removeChild(alertPlaceholder.firstChild);
                });
            }, 2000)  
        }
    })
    }

  })()

