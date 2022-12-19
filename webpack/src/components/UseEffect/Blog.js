import React, { useState, useEffect } from "react";


const tabs = ["posts","comments", "users"];
function Blog() {

    const [state, setState] = useState({
        posts: [],
        loading: false
    })
    const [active, setActive] = useState("posts")

    useEffect( () => {
        setState({...state, loading: true})
        fetch(`https://jsonplaceholder.typicode.com/${active}`)
            .then(async (res) => {
                let data = await res.json();
                setState({
                    ...state, 
                    posts: data,
                    loading: false
                })
            })

        return () => {
         console.log("unmounted");
        }
    }, [active])

    const { posts, loading } = state;
    return (
        <div className="container">
         <div className="tabs">
            {
                tabs.map((tab) => (
                    <button key={tab} 
                            className={`btn btn-sm me-2 btn-secondary ${active === tab? 'btn-danger' : 'btn-secondary'}`}
                            onClick={() => {setActive(tab)}}
                        >
                        {tab}</button>
                ))
            }
        </div>
        <div>
            {
                loading ? <p className="text-danger">Loading....</p> : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#ID</th>
                                <th>Title</th>
                                <th>Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                posts.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title || item.email}</td>
                                        <td>{item.body || item.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    </div>
    )
}

export default Blog;