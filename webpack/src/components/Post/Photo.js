import React, {useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import PostService from "../../services/postService";

function Photo() {
    const {albumId} = useParams();
    const [state, setState] = useState({
        loading: false,
        photos: []
    });

    useEffect( () => {
        try {
            setState({...state, loading: true});
            async function getData() {
                let resPhotos = await PostService.getPhotos(albumId);
                setState({
                    ...state,
                    loading: false,
                    photos: resPhotos.data
                })
            }
            getData();
        } catch (error) {

        }
    }, [])

    const {loading, photos} = state;

    return (
        <div className="container">
            <h2>List of Photos</h2>
            {
                loading ? <h3>Loading data....</h3> : (
                    <div className="row">
                        {
                            photos.map((item) => (
                                <div key={item.id} className="col-md-2">
                                    <div className="card">
                                        <img src={item.thumbnailUrl} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Photo;