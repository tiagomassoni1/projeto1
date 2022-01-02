function btnLoggin() {
    const user = document.getElementById('floatingInput');
    const password = document.getElementById('floatingPassword');

    if (user.value === 'tiagomassoni1@gmail.com'
        && password.value === '123'){
            window.location.href = '../projeto1/redirectionpage.html';
        } else {
            document.getElementById('invalid-user').style.display='block';
        }
    
}
