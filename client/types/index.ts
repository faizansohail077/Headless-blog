export interface ICategoryAttribute {
    title: string,
    Slug: string,
}
export interface ICategory {
    id: number,
    attributes: ICategoryAttribute
}
export interface IResourceMeta {
    pagination: IPagintaion,
}
export interface IPagintaion {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
}
export interface ICollectionResponse<T> {
    data: T,
    meta: IResourceMeta
}