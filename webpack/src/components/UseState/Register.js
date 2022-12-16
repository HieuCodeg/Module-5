import React, { useState } from "react";

// const provinces = [
//     {
//         province_id: 1,
//         province_name: "TT Huế"
//     },
//     {
//         province_id: 2,
//         province_name: "Đà Nẵng"
//     },
//     {
//         province_id: 3,
//         province_name: "Quảng Trị"
//     },
// ]

const genders = [
    {
        id: 1,
        name: "Male"
    },
    {
        id: 2,
        name: "Female"
    },
    {
        id: 3,
        name: "Gai lọ"
    }
]

const hobbiesList = [
    {
        id: 1,
        name: "Bóng đá"
    },
    {
        id: 2,
        name: "Cầu lông"
    },
    {
        id: 3,
        name: "Nhảy dây"
    },
    {
        id: 4,
        name: "Chơi búp bê"
    }
]

// const provinces = getProvince();

// function getProvince(){
//     fetch("https://vapi.vnappmob.com/api/province/")
//         .then(function (res) {
           
//             return res.json();
//         })
//         .then(function (posts) {
//             console.log(posts);
//             return posts.results;
//         })
// };


function Register() {
    
    
    const [state, setState] = useState({
        fullname: "",
        email: "",
        gender: 1,
        province: provinces[0].name,
        hobbies: []
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    const handleCheck = (id) => {
        const tamp = [...hobbies];
        const isChecked = hobbies.includes(id)
        if (isChecked) {
            tamp = hobbies.filter(item => item !== id)
        } else {
            tamp.push(id);
        }
        setState({
            ...state,
            hobbies : tamp
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state);
        setState({
            ...state,
            email: "",
            fullname: "",
            gender: 1,
            province: provinces[0].name,
            hobbies: []
        })
    }

    const { email, fullname, province, gender, hobbies } = state;

    return (
        <div className="container">
        <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Fullname</label>
                    <input type="text" className="form-control"
                        value={fullname}
                        name="fullname"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control"
                        value={email}
                        name="email"
                        onInput={handleInput}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Gender</label>
                    <div className="">
                        {
                            genders.map( (item) => (
                                <div className="form-check form-check-inline" key = {item.id}>
                                    <input className="form-check-input" type="radio" 
                                        id= {item.name} 
                                        value={item.id}
                                        name= 'gender'
                                        checked = {gender == item.id}
                                        onChange={handleInput}
                                    />
                                    <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Hobbies</label>
                    <div className="">
                        {
                            hobbiesList.map( (item) => (
                                <div className="form-check form-check-inline" key = {item.id}>
                                    <input className="form-check-input" type="checkbox" 
                                        id= {item.name} 
                                        value={item.id}
                                        name= 'hobbies'
                                        checked = {hobbies.includes(item.id)}
                                        onChange={() => handleCheck(item.id)}
                                    />
                                    <label className="form-check-label" htmlFor={item.name}>{item.name}</label>
                                </div>
                            ))
                        }
                    </div>
                </div>
                
                <div className="form-group">
                    <label className="form-label">Provinces</label>
                    <select className="form-control form-select"
                        name="province"
                        value={province}
                        onInput={handleInput}
                    >
                        {
                            provinces.map((province) => (
                                <option value={province.province_name}
                                    key={province.province_id}>{province.province_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-danger mt-2">Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register;