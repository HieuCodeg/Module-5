import React, { useState } from "react";
const lotteries = [
    "00001",
    "00002",
    "00003",
    "00004",
    "00005",
    "00006"
]

function LotteryApp(){
    const [state, setState] = useState({
        special: "",
        first: "",
        secondOne: "",
        secondTwo: "",
        thirdOne: "",
        thirdTwo: "",
        thirdThree: ""
    })

    const handleInput = (e) => {
        let index = Math.floor(Math.random() * lotteries.length);
        let value = lotteries[index];
        
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
        <div className="container">
            <h1>Xổ số Codegym</h1>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} type="button" 
                    className="btn btn-success me-4"
                    onClick={handleInput}
                    name = "special"
                >
                Giải đặc biệt</button>
                <input 
                    type="text" className="form-control text-center" 
                    value={special}
                    
                    readOnly
                />
            </div>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} type="button" 
                    className="btn btn-success me-4"
                    onClick={handleInput}
                    name = "first"
                >
                Giải nhất</button>
                <input 
                    type="text" className="form-control text-center"
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
                    type="text" className="form-control me-2 text-center"  
                    readOnly 
                    value={secondOne}   
                />
                <input 
                    type="text" className="form-control text-center" 
                    readOnly
                    value={secondTwo}     
                />
            </div>
            <div className="w-75 my-2 d-flex align-items-center" >
                <button style= {{width: "200px"}} 
                    type="button" 
                    className="btn btn-success me-4 "
                    onClick={handleInput}
                    name = "thirdOne"
                >
                Giải ba</button>
                <input 
                    type="text" className="form-control me-2 text-center" 
                    readOnly 
                    value={thirdOne}      
                />
                <input 
                    type="text" className="form-control me-2 text-center"   
                    readOnly    
                    value={thirdTwo} 
                />
                <input 
                    type="text" className="form-control text-center"      
                    readOnly
                    value={thirdThree} 
                />
            </div>
        </div>
    )
}

export default LotteryApp;