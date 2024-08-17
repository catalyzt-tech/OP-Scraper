
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
import { ListAllFileInDocs } from "./list-all-file-github"
import { SaveFileMdxGithub } from "./save-file-content"

export async function StartDoc() {
    console.log("Docs is starting . . .");
    try {
        let docs = await ListAllFileInDocs();
        if (!docs || docs.length === 0) {
            throw new Error("No docs data found");
        }
        await SaveFileMdxGithub(docs);
    } catch (error) {
        console.error("An error occurred during the docs process:", error);
    } finally {
        console.log("Docs process finished.");
    }
}