export type MovieDB = {
    id?: number,
    name: string,
    genre: string, 
    platform: string,
    status?: boolean,
    comment?: string,
}

export type CommentBody = {
    comment: string | undefined
}

export type MovieBody = Omit<MovieDB, "id">