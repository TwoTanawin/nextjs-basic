export async function GET(request, { params }) {
    console.log('test')
    return Response.json({
        name: 'TwoISE',
        id: params.id
    })
}