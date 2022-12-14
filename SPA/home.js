const root = document.getElementById('root');

const h2 = document.createElement('h2');
h2.textContent = 'Form Sign Up 1'

const form = document.createElement('form');
form.className= 'container';

const div1 = document.createElement('div');
div1.className = 'form-group mb-3 mt-3';

const div2 = document.createElement('div');
div2.className = 'form-group mb-3';

const div3 = document.createElement('div');
div3.className = 'form-group mb-3';

const labelName = document.createElement('label');
labelName.htmlFor = 'fullName';
labelName.innerHTML = 'Full name';

const inputName = document.createElement('input');
inputName.className = 'form-control w-50';
inputName.id = 'fullName';
inputName.placeholder = "Nguyen Van A"

const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';
labelEmail.innerHTML = 'Email';
const inputEmail = document.createElement('input');
inputEmail.className = 'form-control w-50';
inputEmail.id = 'email';
inputEmail.type = 'email';
inputEmail.placeholder = 'AAA@gmail.com'

const labelPhone = document.createElement('label');
labelPhone.htmlFor = 'phone';
labelPhone.innerHTML = 'Phone';
const inputPhone = document.createElement('input');
inputPhone.className = 'form-control w-50';
inputPhone.id = 'phone';
inputPhone.placeholder = "0989897899";

const button = document.createElement('button');
button.innerHTML = "Submit";
button.type = 'submit';
button.className = "btn btn-primary";



div1.appendChild(labelName);
div1.appendChild(inputName);
div2.appendChild(labelEmail);
div2.appendChild(inputEmail);
div3.appendChild(labelPhone);
div3.appendChild(inputPhone);


form.appendChild(h2);
form.appendChild(div1);
form.appendChild(div2);
form.appendChild(div3);
form.appendChild(button);


root.appendChild(form);

