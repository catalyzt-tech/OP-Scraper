import { StartDoc } from "./script/docs/docs";
import { StartForum } from "./script/forum/forum";

export const BASE_URL = 'https://gov.optimism.io';
// https://gov.optimism.io/t/8613.json?track_visit=true&forceLoad=true
// GetLinkCategory:             need https://gov.optimism.io
// ListAllProjectInCategory:    need https://gov.optimism.io/c/accountability/62/l/latest.json?filter=default&page=1
// but url that need in ListAllProjectInCategory is already done in GetLinkCategory
// sitemap https://gov.optimism.io/sitemap_1.xml

export const HTTPSTATUSOK = 200

export const SITEMAP_FORUM = "https://gov.optimism.io/sitemap_1.xml"

export const ALL_DOCS_PATH = "https://api.github.com/repos/ethereum-optimism/community-hub/git/trees/main?recursive=1"

export const BASE_DOC = "https://community.optimism.io"

type OptionFunction = () => void;

// for select which module going to run
export const MODULE_OPTIONS: Record<string, OptionFunction> = {
    "forum": StartForum,
    "docs": StartDoc, 
}