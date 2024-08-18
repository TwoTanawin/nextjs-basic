async function getBlog() {
    const response = await fetch('https://catfact.ninja/fact')

    if (!response.ok) {
        throw new Error('connot fetch api')
    }

    return response.json()
}

export default async function Page({ params }) {

    const blog = await getBlog()
    console.log('blog', blog)
    return (
        <div>
            Test page
            {/* Directly access properties of the blog object */}
            <div>
                {blog.fact}
            </div>
        </div>
    )
}