import { SITEMAP_FORUM } from "../../const"
import { chunkArray } from "../../utils/utils"
import { SaveProjectData } from "./project/save-project-detail"
import { GetAllProjectsUrl } from "./sitemap/sitemap"

// * If sitemap doesn't gave all the result can scrape directly from the website
// console.log("on-process: 'getting all categories' . . .")
// const categoryHrefs = await GetLinkCategory(BASE_URL);
// if (categoryHrefs.length === 0){
//     console.error("Category Href link is empty array")
//     return
// }
// console.log("done: 'getting all categories' working-on: 'list all projects in each category' . . .")
// const projects = await ListAllProjectInCategory(categoryHrefs)
// console.log("done: 'list all projects in each category' working-on: 'get each project detail' . . .")

export async function StartForum() {
    
    console.log("Forum is starting . . .")

    const urls = await GetAllProjectsUrl(SITEMAP_FORUM)
    const chunkSize = 100
    const chunkedUrls = chunkArray(urls, chunkSize)

    for (const url of chunkedUrls) {
        await SaveProjectData(url)
        setTimeout(() => {}, 1000)
    }

}