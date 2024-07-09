import { BASE_URL } from "@/config";
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
    
    const data = await fetch(`${BASE_URL}images`, {
        method: 'GET',
    });
    return data
}


