export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export async function GET(request: Request) {
    
    const data = await fetch('http://54.73.73.228:4369/api/images', {
        method: 'GET',
    });

    // console.log("IMAGes data !!!", data.json())
    return data

    // return new Response("Data OK!!")
}


