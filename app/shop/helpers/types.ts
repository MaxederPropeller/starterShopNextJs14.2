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
    description: string
    shortDes: string
    image: string

    isOnSale?: boolean
    quantity?: number

  }

  export type WarenKorbItemProps = {
    product: ProductType;
    quantity: number;
  }