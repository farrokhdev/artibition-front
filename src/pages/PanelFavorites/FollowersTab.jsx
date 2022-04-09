import React, { useState, useEffect } from 'react';
import CardFollower from './CardFollower';
import { FOLLOW_ARTISTS } from '../../utils';
import apiServices from '../../utils/api.services';
import queryString from 'query-string';
import { useSelector } from 'react-redux';

function FollowersTab() {


    const { roles } = useSelector((state) => state.authReducer)
    const [followerArtworks, setFollowerArtworks] = useState([]);
    const [params, setParams] = useState({
        activity_type: "following",
        content_type: "artist"
    });

  
    const getFollowers = () => {
        apiServices.get(FOLLOW_ARTISTS, queryString.stringify(params))
            .then(res => {
                if (res.data) {
                    setFollowerArtworks(res.data.data.results)
                    console.log("res===>" , res);
                }
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    useEffect(() => {
        getFollowers()
    }, []);


    return (
        <div className="row">
            {
                followerArtworks?.length && followerArtworks?.map((followers) => {
                    return (
                        <CardFollower followers={followers} getFollowers={getFollowers} />
                    )
                })
            }
        </div>
    )
}

export default FollowersTab