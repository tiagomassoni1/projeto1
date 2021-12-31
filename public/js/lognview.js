function btnLoggin() {
    const user = document.getElementById('floatingInput');
    const password = document.getElementById('floatingPassword');

    if (user.value === 'tiagomassoni1@gmail.com'
        && password.value === '123'){
            alert ('Acertou');
        } else {
            document.getElementById('invalid-user').style.display='block';
        }
    
}
