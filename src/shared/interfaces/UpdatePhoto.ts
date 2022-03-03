export interface UpdatePhoto 
{
    id: number | undefined,
    albumId: number | undefined,
    title: string | undefined,
    url: File | string | undefined,
    thumbnailUrl : File | string | undefined
}