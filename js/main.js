function handleInputNameAndLastName(evt) {
    const value = evt.target.value
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u

    if (nameRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }

    if (!value) {
        evt.target.classList.remove('invalid')
    }
}

////

function handleInputEmail(evt) {
    const value = evt.target.value
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if (emailRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }

    if (!value) {
        evt.target.classList.remove('invalid')
    }
}

////

function handleInputPassword(evt) {
    const value = evt.target.value
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/

    if (passRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }

    if (!value) {
        evt.target.classList.remove('invalid')
    }
}

////

function handleInputPhone(evt) {
    const value = evt.target.value
    const phoneRegex = /^(\d{3}[- ]?){2}\d{4}$/

    if (phoneRegex.test(value.trim())) {
        evt.target.classList.add('valid')
        evt.target.classList.remove('invalid')
    } else {
        evt.target.classList.add('invalid')
        evt.target.classList.remove('valid')
    }

    if (!value) {
        evt.target.classList.remove('invalid')
    }
}