import { ItemCard } from '@/components/cart'
import { WidgetItem } from '@/components/common'
import { Product, products } from '@/data/products'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Carrito',
  description: 'Pagina de carrito de compras'
}

interface ProductsInCart {
  product: Product
  quantity: number
}

const getProductsInCart = (cart: any) => {
  const productsInCart: ProductsInCart[] = []
  for (const id of Object.keys(cart)) {
    const product = products.find((p) => p.id === id) as Product
    if (product) {
      productsInCart.push({ product, quantity: cart[id] })
    }
  }
  return productsInCart
}

export default function CartPage() {
  const cookieStore = cookies()
  const cart = JSON.parse(cookieStore.get('cart')?.value || '{}')
  const productsInCart = getProductsInCart(cart) ?? []
  const totalToPay = productsInCart.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity
  }, 0)

  return (
    <div>
      <h1 className='text-3xl mb-2'>Productos del carrito</h1>

      <div className='flex flex-col sm:flex-row gap-2 w-full'>
        <div className='flex flex-col gap-2 w-full sm:8/12'>
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard
              key={product.id}
              product={product}
              quantity={quantity}
            />
          ))}
        </div>
        <div className='flex flex-col w-full sm:4/12'>
          <WidgetItem title='Total a pagar'>
            <div className='mt-2 flex justify-center gap-4'>
              <h3 className='text-3xl font-bold text-gray-700'>
                ${(totalToPay * 1.16).toFixed(2)}
              </h3>
            </div>
            <span className='font-bold text-center text-gray-500'>
              Impuesto del 16% : {(totalToPay * 0.16).toFixed(2)}
            </span>
          </WidgetItem>
        </div>
      </div>
    </div>
  )
}
