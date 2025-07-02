const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('countryError').textContent = '';

  let valid = true;

  
  const email = form.email.value.trim();
  if (!email) {
    document.getElementById('emailError').textContent = 'Email jest wymagany.';
    valid = false;
  } else {
   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Niepoprawny format adresu email.';
      valid = false;
    }
  }

 
  const password = form.password.value;
  if (!password) {
    document.getElementById('passwordError').textContent = 'Hasło jest wymagane.';
    valid = false;
  } else {
    
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordPattern.test(password)) {
      document.getElementById('passwordError').textContent = 'Hasło musi mieć min. 8 znaków, zawierać co najmniej 1 cyfrę i 1 znak specjalny.';
      valid = false;
    }
  }

  
  const country = form.country.value;
  if (!country) {
    document.getElementById('countryError').textContent = 'Wybierz kraj.';
    valid = false;
  }

  if (valid) {
    console.log(valid)
    alert('Formularz poprawnie wypełniony! Możesz wysłać dane.');
    form.reset();
  }
});