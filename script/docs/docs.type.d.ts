export interface DocPath {
    path: string;
    url: string;
}

export interface ListDocsResponse {
    sha:  string;
    url:  string;
    tree: Tree[];
}

export interface Tree {
    path:  string;
    mode:  string;
    type:  string;
    sha:   string;
    size?: number;
    url:   string;
}
