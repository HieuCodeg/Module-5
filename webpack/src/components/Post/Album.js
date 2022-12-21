import React, { useState, useEffect } from "react";
import PostService from "../../services/postService";

import { Link } from "react-router-dom";

const pages = [5, 10, 15, 20];

function Album() {

    const [state, setState] = useState({
        loading: false,
        albums: [],
        totalPage: 1,
        currentPage: 1,
        itemPerSheet: 10
    });

    useEffect( () => {
        try {
            setState({...state, loading: true});
            async function getData() {
                let resAlbums = await PostService.getAlbums();
                let total = Math.ceil(resAlbums.data.length/itemPerSheet);
                setState({
                    ...state,
                    loading: false,
                    albums: resAlbums.data,
                    totalPage: total
                })
                
            }
            getData();
        } catch (error) {

        }
    }, [])

    const handleClick = (value) => {
        if (value != currentPage && value > 0 && value <= totalPage) {
            setState({
                ...state,
                currentPage: value
            })
        }  
    }
    
    const handleChangeItemPerSheet = (e) => {
        let total = Math.ceil(albums.length/e.target.value);
        setState({
            ...state,
            itemPerSheet: e.target.value,
            totalPage: total
        })
    }

    const {loading, albums, totalPage, currentPage, itemPerSheet} = state;

    const indexOfLastNews = currentPage * itemPerSheet;
    const indexOfFirstNews = indexOfLastNews - itemPerSheet;
    const currentList = albums.slice(indexOfFirstNews, indexOfLastNews);


    return (
        
        <div className="container">
            <h2>Album siêu khủng</h2>
            <select className="form-select" aria-label="Default select example"
                    defaultValue={itemPerSheet}
                    onInput= {handleChangeItemPerSheet}
            >
                {
                    pages.map((item) => (
                        <option value={item}
                                key = {item}
                                // selected = {item == itemPerSheet ? true: false}
                               
                        >{item}</option>
                    ))
                }
            </select>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" 
                            onClick={() => (handleClick(currentPage -1))}
                            disabled={currentPage == 1? true: false}
                        >Previous</button>
                    </li>
                    
                    {
                        Array.from(Array(totalPage)).map((value,index) => (
                            <li key={index} 
                                className={`page-item ${currentPage === index + 1? "active": ""}`}>
                                    <button className="page-link" onClick={() => (handleClick(index + 1))}>{ index  + 1 }</button>
                            </li>
                        ))
                
                    }
                    
                    <li className="page-item">
                        <button className="page-link" 
                            onClick={() => (handleClick(currentPage +1))}
                            disabled={currentPage == totalPage? true: false}
                        >Next</button>
                    </li>
                </ul>
            </nav>
            {
                loading ? <h3>Loading data....</h3> : (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#Id</th>
                                <th>Title</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                currentList.map((album) => (
                                    <tr key={album.id}>
                                        <td>{album.id}</td>
                                        <td>{album.title}</td>
                                        <td>
                                            <Link to={`/album/${album.id}`}>
                                                <i role="button" className="fa fa-eye"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    )
}

export default Album;