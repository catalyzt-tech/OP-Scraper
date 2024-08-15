import { SITEMAP_FORUM, baseUrl } from './const'
import { GetLinkCategory } from './script/forum/category/get-categories'
import { SaveProjectData } from './script/forum/project/get-project-detail'
import { ListAllProjectInCategory } from './script/forum/project/get-projects'
import { GetAllProjectsUrl } from './script/forum/sitemap/sitemap'
import { htmlToText } from 'html-to-text'

async function main() {
  // * If sitemap doesn't gave all the result can scrape directly from the website
  // console.log("on-process: 'getting all categories' . . .")

  // const categoryHrefs = await GetLinkCategory(baseUrl);
  // if (categoryHrefs.length === 0){
  //     console.error("Category Href link is empty array")
  //     return
  // }

  // console.log("done: 'getting all categories' working-on: 'list all projects in each category' . . .")

  // const projects = await ListAllProjectInCategory(categoryHrefs)

  // console.log("done: 'list all projects in each category' working-on: 'get each project detail' . . .")

  function chunkArray<T>(array: T[], size: number): T[][] {
    const chunkedArray: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size))
    }
    return chunkedArray
  }

  const urls = await GetAllProjectsUrl(SITEMAP_FORUM)
  const chunkSize = 100
  const chunkedUrls = chunkArray(urls, chunkSize)

  console.log(urls.length)
  for (const chunk of chunkedUrls) {
    await SaveProjectData(chunk)
    setTimeout(() => {}, 1000)
  }
  //   await SaveProjectData(urls)
}

main()
