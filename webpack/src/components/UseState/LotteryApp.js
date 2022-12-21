import React, { useState } from "react";


function LotteryApp(){
    const [state, setState] = useState({
        special: "ĐẶC BIỆT",
        first: "NHẤT",
        secondOne: "NHÌ 1",
        secondTwo: "NHÌ 2",
        thirdOne: "BA 1",
        thirdTwo: "BA 2",
        thirdThree: "BA 3"
    })
    const lotteries = [];

    const handleInput = (e) => {
        let value;
        if (e.target.name == "special" || e.target.name == "first" ) {
            value = Math.floor((Math.random() * 99999) + 1 );
                while (lotteries.includes(value)) {
                    value = Math.floor((Math.random() * 99999) + 1 );
                }
                lotteries.push(value);
                while (value.toString().length < 5) {
                    value = 0 + value.toString();
                }
        }
        if (e.target.name == "secondOne" || e.target.name == "secondTwo" ) {
            value = Math.floor((Math.random() * 9999) + 1 );
                while (lotteries.includes(value)) {
                    value = Math.floor((Math.random() * 9999) + 1 );
                }
                lotteries.push(value);
                while (value.toString().length < 4) {
                    value = 0 + value.toString();
                }
        }
        if (e.target.name == "thirdOne" || e.target.name == "thirdTwo" || e.target.name == "thirdThree" ) {
            value = Math.floor((Math.random() * 999) + 1 );
                while (lotteries.includes(value)) {
                    value = Math.floor((Math.random() * 999) + 1 );
                }
                lotteries.push(value);
                while (value.toString().length < 3) {
                    value = 0 + value.toString();
                }
        }   
        
        setState({
            ...state,
            [e.target.name]: value
        })
        switch (e.target.name) {
            case "secondOne":
                e.target.name = "secondTwo";
                break;
            case "thirdOne":
                e.target.name = "thirdTwo";
                break;
            case "thirdTwo":
                e.target.name = "thirdThree";
                break;
            default: 
                e.target.disabled = true;
        }
    }

    const { special, first, secondOne, secondTwo, thirdOne, thirdTwo, thirdThree } = state;

    return (
        <div className="container vh-100">
            <h1>Xổ số Codegym</h1>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} type="button" 
                    className="btn btn-danger me-4"
                    onClick={handleInput}
                    name = "special"
                >
                Giải đặc biệt</button>
                <input 
                    type="text" className="form-control text-center text-danger fw-bold" 
                    value={special}
                    
                    readOnly
                />
            </div>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} type="button" 
                    className="btn btn-warning me-4"
                    onClick={handleInput}
                    name = "first"
                >
                Giải nhất</button>
                <input 
                    type="text" className="form-control text-center text-warning fw-bold"
                    value={first}
                    readOnly   
                />
            </div>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} 
                    type="button" 
                    className="btn btn-success me-4 "
                    onClick={handleInput}
                    name = "secondOne"
                >
                Giải nhì</button>
                <input 
                    type="text" className="form-control me-2 text-center text-success fw-bold"  
                    readOnly 
                    value={secondOne}   
                />
                <input 
                    type="text" className="form-control text-center text-success fw-bold" 
                    readOnly
                    value={secondTwo}     
                />
            </div>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} 
                    type="button" 
                    className="btn btn-primary me-4 "
                    onClick={handleInput}
                    name = "thirdOne"
                >
                Giải ba</button>
                <input 
                    type="text" className="form-control me-2 text-center text-primary fw-bold" 
                    readOnly 
                    value={thirdOne}      
                />
                <input 
                    type="text" className="form-control me-2 text-center text-primary fw-bold"   
                    readOnly    
                    value={thirdTwo} 
                />
                <input 
                    type="text" className="form-control text-center text-primary fw-bold"      
                    readOnly
                    value={thirdThree} 
                />
            </div>
        </div>
    )
}

export default LotteryApp;