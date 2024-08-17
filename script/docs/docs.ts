import { ALL_DOCS_PATH } from "../../const";
import { ListAllFilesInGithub } from "../../lib/list-all-files-github";
import { SaveFileMdxGithub } from "./save-file-content"

export async function StartDoc() {
    console.log("Docs is starting . . .");

    try {
        let docs = await ListAllFilesInGithub(ALL_DOCS_PATH);
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