import { baseUrl } from "./const";
import { GetLinkCategory } from "./script/category/get-categories";
import { ListAllProjectInCategory } from "./script/project/get-projects";

async function main() {

    console.log("on-process: 'getting all categories' . . .")

    const categoryHrefs = await GetLinkCategory(baseUrl);
    if (categoryHrefs.length === 0){
        console.error("Category Href link is empty array")
        return
    }

    console.log("done: 'getting all categories' working-on: 'list all projects in each category' . . .")

    const projects = await ListAllProjectInCategory(categoryHrefs)

    console.log("done: 'list all projects in each category' working-on: 'get each project detail' . . .")

}

main();