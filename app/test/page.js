'use client'
import { useState, useEffect } from 'react';
import { submitForm } from './action';

async function getBlog() {
    const response = await fetch('https://catfact.ninja/fact')

    if (!response.ok) {
        throw new Error('connot fetch api')
    }

    return response.json()
}

export default function Page() {


    const [blogState, setBlogState] = useState([])

    const initBlog = async () => {
        try {
            const result = await getBlog()
            // console.log('blog', blog)
            setBlogState(result)
        } catch (error) {
            console.log(error, 'error')
        }
    }

    useEffect(() => {
        initBlog()
    }, [])

    console.log(blogState)

    return (
        <div>
            Test page 2
            {
                <div>
                    {blogState.fact}
                </div>
            }
            <form action={submitForm}>
                <input name="email"></input>
                <button>Submit</button>
            </form>
        </div>
    )
}