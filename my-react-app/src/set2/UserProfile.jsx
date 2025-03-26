import React, { useEffect, useState } from 'react'

const UserProfile = ({ heading, width, height }) => {

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({})
    const [isError, setIsError] = useState(false)

    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/user45') {
                    resolve({
                        status: 200, message: 'Success', data: {
                            name: 'Saroj', image:
                                'https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg', likes: 500, comments: 10,
                        },
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'user data not found.',
                    })
                }
            }, 2000)
        })
    }
    useEffect(() => {
        fakeFetch('https://example.com/api/user').then((res) => {
            setData(res.data)
            setIsLoading(false)

        }
        ).catch((err) => {
            console.log(err)
            setError(err)
            setIsError(true)
        }
        )
    }, [])
    return (
        <div>
            {isError ? <div>
                    <div>status : {error.status}</div>
                    <div>message : {error.message}</div>

                </div>

                : (isLoading ? "Loading" : <div>
                    <h2>{heading}</h2>
                    <img src={data.image} width={width} height={height} alt='profile-pic' />
                    <div>Name : {data.name}</div>
                    <div>Likes : {data.likes}</div>
                    <div>Comments : {data.comments}</div></div>)
            }
        </div>
    )
}

export default UserProfile