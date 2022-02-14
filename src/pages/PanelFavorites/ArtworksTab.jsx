import React, { useState, useEffect } from 'react';
import { FOLLOW_PRODUCTS, GALLERY_FOLLOW } from '../../utils';
import apiServices from '../../utils/api.services';
import CardArtwork from './CardArtwork';
import queryString from 'query-string';
import { useSelector } from 'react-redux';

function ArtworksTab() {
    const { roles } = useSelector((state) => state.authReducer)
    const [favoriteArtworks, setfavoriteArtworks] = useState([]);
    const [params, setParams] = useState({
        activity_type: "like",
        content_type: "product"
        // content_type: roles[0]
    });

    console.log("rols==>", roles);
    const getFollowProduct = () => {
        apiServices.get(FOLLOW_PRODUCTS, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setfavoriteArtworks(res.data.data.results)
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getFollowProduct()
    }, []);

    return (
        <div className="row">
            {
                favoriteArtworks?.length && favoriteArtworks?.map((artworks) => {
                    return (
                        <CardArtwork artworks={artworks}/>
                    )
                })
            }

        </div>
    )
}

export default ArtworksTab