import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Button, Card, CardContent, Typography } from '@mui/material'
import "./Posts.css"

const Posts = () => {
    const [data, setdata] = useState([])

    // This is used for mounting phase at the starting time when app is render 
    useEffect(() => {
        getdata()
    }, [])

    // This is the main function where i get the data through api 
    const getdata = async () => {
        try {
            const { data } = await axios.get("https://dummyjson.com/posts")
            // console.log(data.posts)
            setdata(data.posts)
        } catch (error) {
            console.log(error)
        }
    }




    return (<>
            <h1>POSTS</h1>
        <div className='maincontainer'>
            {
                // Here itrating the data through map function 
                data.map((data) => {
                    return (
                        <div className='cardcontainer' key={data.id}>
                            <Card className='card' >
                                <CardContent>
                                    <p>Post No :- {data.id}</p>
                                    <h3>User Id :- {data.userId}</h3>
                                    <h4>Reactions :- {data.reactions}</h4>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {data.body}
                                    </Typography>
                                    {data.tags.map((ele, i) => {
                                        return (
                                            <span key={i}>
                                                <Button variant="text">#{ele}</Button>
                                            </span>
                                        )
                                    })}
                                </CardContent>
                            </Card>
                        </div>
                    )
                })
            }
        </div>
            </>
    )
}

export default Posts