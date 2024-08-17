import { ALL_DOCS_PATH, BASE_DOC } from "../../const";
import { ListAllFilesInGithub } from "../../lib/list-all-files-github";
import { SaveFileMdxGithub } from "../../lib/op-github/save-file-mdx-from-github";


export async function StartDoc() {
    console.log("Docs is starting . . .");

    try {
        let docs = await ListAllFilesInGithub(ALL_DOCS_PATH );
        if (!docs || docs.length === 0) {
            throw new Error("No docs data found");
        }
        await SaveFileMdxGithub(docs, ['..', '..', 'data', 'docs-data'], BASE_DOC);

    } catch (error) {
        console.error("An error occurred during the docs process:", error);
        
    } finally {
        console.log("Docs process finished.");
    }
}