export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://1.14.108.231:1337"
export async function fetcher(url) {
    let response;
    response=await fetch(`${API_URL}/api/${url}`);
    
    const data = await response.json();
    return data;
}

export async function image(url) {
    let response;
    response=await fetch(`${API_URL}${url}`)
    const data = await response.json();
    console.log({data});
    return data;
}