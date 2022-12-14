const form = (
    <form className="container">
        <h2>Form by JSX</h2>
        <div className="form-group mb-3 mt-3">
            <label htmlFor="fullName">Full name</label>
            <input className="form-control w-50" type='text' placeholder= "FullName" id='fullName'></input>
        </div>
        <div className="form-group mb-3 mt-3">
            <label htmlFor="email">Email</label>
            <input className="form-control w-50" type='email' placeholder= "Ahihi@gmail.com" id='email'></input>
        </div>
        <div className="form-group mb-3 mt-3">
            <label htmlFor="phone">Full name</label>
            <input className="form-control w-50" type='number' placeholder= "098988777" id='phone'></input>
        </div>
        <button className="btn btn-success">Submit</button>
    </form>
)

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(form);