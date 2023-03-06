// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
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

    const modalTrigger = document.getElementById('btnEnviar')
    const modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {})

    if (modalTrigger) {
    modalTrigger.addEventListener('click', event => {
        if (form1.checkValidity()) {
            event.preventDefault()
            modal.show()
        }
    })
    }

  })()

