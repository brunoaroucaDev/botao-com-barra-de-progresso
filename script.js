const button = document.querySelector('.button');
const text = document.querySelector('.text');
const before = document.querySelector('.button::before');

button.addEventListener('click', () => {
    button.classList.add('progress')

    text.innerHTML = 'Uploading...'  
    
    setTimeout(() => {
        button.classList.remove('progress')
        // button.classList.add('uploaded')

        text.innerHTML = 'Uploaded'  
    }, 6000)
})