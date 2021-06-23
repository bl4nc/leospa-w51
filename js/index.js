function action_background(el, action) {
    let backdrop = el.parentNode.querySelector('.text')
    if (action == 'show') {
        if (backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    } else {
        if (!backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    }
}

function show_social(el, action) {
    let backdrop = el.querySelector('.hide_filds')
    if (action == 'show') {
        if (backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    } else {
        if (!backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    }


}