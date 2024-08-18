import { ALL_DOCS_DEV_PATH, BASE_DOC_DEV } from "../../const";
import { ListAllFilesInGithub } from "../../lib/list-all-files-github";
import { SaveFileMdxGithub } from "../../lib/op-github/save-file-mdx-from-github";

export async function StartDevDoc() {
    console.log("Dev Docs is starting . . .");
    try {
        let docs = await ListAllFilesInGithub(ALL_DOCS_DEV_PATH);
        if (!docs || docs.length === 0) {
            throw new Error("No dev docs data found");
        }

        await SaveFileMdxGithub(docs, ['..', '..', 'data', 'dev-doc-data'], BASE_DOC_DEV);

    } catch (error) {
        console.error("An error occurred during the Dev Docs process:", error);
    } finally {
        console.log("Dev Docs process finished.");
    }
}