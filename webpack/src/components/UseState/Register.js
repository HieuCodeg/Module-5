import React, { useState, useEffect } from "react";
import axios from "axios";

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

function Register() {

    const [state, setState] = useState({
        fullname: "",
        email: "",
        gender: 1,
        province: "01",
        district: "271",
        ward: "09619",
        hobbies: []
    })
    const [address, setAddress] = useState({
        provinces: [],
        districts: [],
        wards: []
    })
    // useEffect( () => {
    //     fetch("https://vapi.vnappmob.com/api/province/")
    //     .then( (res) => res.json())
    //     .then((posts) => {
    //         setAddress({
    //             ...address,
    //             provinces: posts.results
    //         })
    //     })
    // }, [])

    useEffect( () => {
        async function getData() {
            let resProvinces = await axios.get("https://vapi.vnappmob.com/api/province/");
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${province}`);
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${district}`);
            setAddress({
                ...address,
                provinces: resProvinces.data.results,
                districts: resDistricts.data.results,
                wards: resWards.data.results
            })
        }

        getData();
        return () => {
            
        }
        
    },[])

    const handleInputProvince = ( value) => {
        async function changeData() {
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/${value}`);
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${resDistricts.data.results[0].district_id}`);
            setAddress({
                ...address,
                districts: resDistricts.data.results,
                wards: resWards.data.results
            });
            setState({
                ...state,
                province : value,
                district: resDistricts.data.results[0].district_id,
                ward: resWards.data.results[0].ward_id
            });
            
        }
        changeData();
    }

    const handleInputDistrict = (value) => {
        async function changeData() {
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${value}`);
            setAddress({
                ...address,
                wards: resWards.data.results
            });
            setState({
                ...state,
                district : value,
                ward: wards[0].ward_id
            })
        }
        changeData();
    }

    const handleResetForm = () => {
        async function changeData() {
            let resDistricts = await axios.get(`https://vapi.vnappmob.com/api/province/district/01`);
            let resWards = await axios.get(`https://vapi.vnappmob.com/api/province/ward/${resDistricts.data.results[0].district_id}`);
            setAddress({
                ...address,
                districts: resDistricts.data.results,
                wards: resWards.data.results
            });
            setState({
                ...state,
                email: "",
                fullname: "",
                province: "01",
                district: "271",
                ward: "09619",
                hobbies: []
            })
            
        }
        changeData();
    }

    const handleInput = (e) => {
        if (e.target.name === 'province') {
        
            handleInputProvince(e.target.value)
                    
        } else if (e.target.name === 'district') {
            handleInputDistrict(e.target.value)
        } else {
            setState({
                ...state,
                [e.target.name] : e.target.value,
            })
        }
        
    }

    const handleCheck = (id) => {
        let tamp = [...hobbies];
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
        handleResetForm();
    }

    const { email, fullname, province, gender, hobbies, district, ward } = state;
    const { provinces, districts, wards } = address;

    return (
        <div className="container">
            <h2>Form đăng  ký</h2>
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
                    <label className="form-label">Province</label>
                    <select className="form-control form-select"
                        name="province"
                        value={province}
                        onInput={handleInput}
                    >
                        {
                            provinces.map((province) => (
                                <option value={province.province_id}
                                    key={province.province_id}>{province.province_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">District</label>
                    <select className="form-control form-select"
                        name="district"
                        value={district}
                        onInput={handleInput}
                    >
                        {
                            districts.map((item) => (
                                <option value={item.district_id}
                                    key={item.district_id}>{item.district_name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label className="form-label">Ward</label>
                    <select className="form-control form-select"
                        name="ward"
                        value={ward}
                        onInput={handleInput}
                    >
                        {
                            wards.map((item) => (
                                <option value={item.ward_id}
                                    key={item.ward_id}>{item.ward_name}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-danger my-4">Register</button>
                </div>
            </form>
    </div>
    )
}

export default Register;