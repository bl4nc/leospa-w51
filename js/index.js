function action_background(el, action) {
    let backdrop = el.parentNode.querySelector('.text')
    if (action == 'show') {
        console.log('show')
        if (backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    } else {
        console.log('out')
        if (!backdrop.classList.contains('d-none')) {
            backdrop.classList.toggle('d-none')
        }
    }


}