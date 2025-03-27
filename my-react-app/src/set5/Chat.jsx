import React, { useEffect, useState } from 'react'

const Chat = () => {
    const [data, setData] = useState([])
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === 'https://example.com/api/userchat') {
                    resolve({
                        status: 200, message: 'Success', data: [{
                            name: 'Alia', messages: [{
                                from: 'Alia',
                                message: 'Good Morning',
                            }, {
                                from: 'Ranvir',
                                message: 'Good Morning, How are you?',
                            },
                            ],
                        },
                        {
                            name: 'Jeena', messages: [{
                                from: 'Jeena',
                                message: 'When is the meeting scheduled?',
                            }, {
                                from: 'Seema',
                                message: 'It is at 10AM tomorrow.',
                            },
                            ],
                        }, {
                            name: 'Abhay', messages: [{
                                from: 'Abhay',
                                message: 'Have you found a house yet?',
                            }, {
                                from: 'John',
                                message: 'No luck yet, still searching.',
                            }, {
                                from: 'Abhay', message:
                                    'Hey, an apartment just got vacant in my building. Do you wanna have a look'
                            },
                            ],
                        },
                        ],
                    })
                } else {
                    reject({
                        status: 404,
                        message: 'users chat not found.',
                    })
                }
            }, 2000)
        })
    }
    useEffect(() => {
        fakeFetch("https://example.com/api/userchat").then((res) => {
            console.log(res);
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(data);

    return (
        <>
            <div className="flex flex-col items-start p-4 bg-gray-100 min-h-screen">
                {
                    data.map((item, index) => 
                        <dl 
                            key={index} 
                            className="border border-gray-300 bg-white p-4 rounded-md shadow-md mb-4 w-full max-w-md"
                        >
                            <dt className="text-lg font-bold text-gray-800 mb-2">{`${item.name}'s chat`}</dt>
                            <dd>
                                {item.messages.map((msg, msgIndex) => 
                                    <li 
                                        key={msgIndex} 
                                        className="text-sm text-gray-600 mb-1"
                                    >
                                        <b className="text-gray-800">{msg.from}:</b> {msg.message}
                                    </li>
                                )}
                            </dd>
                        </dl>
                    )
                }
            </div>
        </>
    )
}

export default Chat
