export type Products = {
    id: number
    title: string 
    product: string
    productThumbNail: string 
    description: string
}[];

export interface SneakersState {
    products: Products
    addedToCart: Products
}