
import axios from "axios"
import { ALL_DOCS_PATH } from "../../const"
import { DocPath, ListDocsResponse } from "./docs.type"
import { headerGithub } from "../../utils/utils"


export async function ListAllFileInDocs(): Promise<DocPath[]> {

    try {
        let allUrlPath:DocPath[] = []

        const headers = headerGithub()
        if (headers === null){
            console.error("failed to get github key, put it on .env")
            return []
        }
        
        const response = await axios.get<ListDocsResponse>(ALL_DOCS_PATH, {
            headers: headers,
        })
        
        if (response.status !== 200 || response.data.tree.length === 0){
            console.error("failed to list all document path data")
            return []
        }

        for (const res of response.data.tree){
            if(res.path.includes(".mdx")){
                let doc: DocPath = {
                    path: res.path,
                    url: res.url,
                }
                allUrlPath.push(doc)
            }
        }

        return allUrlPath     
    } catch (error) {
        console.error("failed to list all file in docs", error)
        return []
    }

}