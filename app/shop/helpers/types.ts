import { ReactNode } from 'react';

// Context Types

// Typdefinition für die Props des CartProviders
export type CartProviderProps = {
  children: ReactNode;
}
  // Types für Shops und Produkte
  export type ProductType = {
    id: string
    name: string
    price: number
    salePrice?: number
    description: string
    shortDes: string
    image: string
    images?: string[]

    isOnSale?: boolean
    isNew?: boolean
    isHit?: boolean
    quantity?: number

    material?: string
    size?: string

  }
  export type ProductTypeShort = {
    id: string
    name: string
    price: number
    salePrice?: number
    img: string
    isOnSale?: boolean
    isNew?: boolean
    isHit?: boolean
  }

  
  export type WarenKorbItemProps = {
    product: ProductType;
    quantity: number;
  }