
const form = React.createElement('form', {className : 'container'},
    React.createElement('h2', null, 'Form By React'),
    React.createElement('div', {className: 'form-group mb-3 mt-3'},
        React.createElement('label', {className: 'fullName'}, "Full name"),
        React.createElement('input', {
            className: 'form-control w-50', 
            id: 'fullName',
            placehoder: 'Nguyen Van A'
        })
    ),
    React.createElement('div', {className: 'form-group mb-3 mt-3'},
        React.createElement('label', {className: 'email'}, "Email"),
        React.createElement('input', {
            className: 'form-control w-50', 
            id: 'email',
            placehoder: 'vanA@gmail.com'
        })
    ),
    React.createElement('div', {className: 'form-group mb-3 mt-3'},
        React.createElement('label', {className: 'phone'}, "Phone"),
        React.createElement('input', {
            className: 'form-control w-50', 
            id: 'phone',
            placehoder: '0989898786'
        })
    ),
    React.createElement('button', {className: 'btn btn-success'}, 'Submit')
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(form);