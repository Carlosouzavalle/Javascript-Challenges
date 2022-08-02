let respond = document.querySelector('.respond').addEventListener('click', apresentation)


function apresentation() {
    let namee = document.querySelector('.name')
    let screen_Apresentation = document.querySelector('.screenApresentation')
    let namee_Modifield = namee.value
    screen_Apresentation.textContent = 'its a plasure know you ' + namee_Modifield
}

