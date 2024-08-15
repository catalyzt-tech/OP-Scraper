import axios from 'axios';
import { parseStringPromise } from 'xml2js';

export async function GetAllProjectsUrl(url: string): Promise<string[]> {
    try {
        const response = await axios.get(url);
        const xmlData = response.data;

        const parsedData = await parseStringPromise(xmlData, { explicitArray: false });

        const urlset = parsedData['urlset'];

        const urls: string[] = urlset['url'].map((entry: any) => {
            const originalUrl = entry['loc'];
            const idMatch = originalUrl.match(/\/t\/[^/]+\/(\d+)/);
            if (idMatch && idMatch[1]) {
                const id = idMatch[1];
                return `https://gov.optimism.io/t/${id}.json?forceLoad=true`;
            }
            return null;
        }).filter((url:string | null) => url !== null); // Filter out any null values

        return urls;
    } catch (error) {
        console.error('Error fetching or parsing the XML:', error);
        return [];
    }
}
