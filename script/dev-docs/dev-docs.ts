
export async function StartDevDoc() {
    console.log("Dev Docs is starting . . .");
    try {
        // let Dev Docs = await ListAllFileInDev Docs();
        // if (!Dev Docs || Dev Docs.length === 0) {
        //     throw new Error("No Dev Docs data found");
        // }
        // await SaveFileMdxGithub(Dev Docs);
    } catch (error) {
        console.error("An error occurred during the Dev Docs process:", error);
    } finally {
        console.log("Dev Docs process finished.");
    }
}