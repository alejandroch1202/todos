'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import type { Product } from '@/data/products'

import { IoAddCircleOutline, IoRemove } from 'react-icons/io5'
import { addProductToCart, decreaseProductInCart } from '@/actions/cart'

interface ItemCardProps {
  product: Product
  quantity: number
}

export const ItemCard = ({ product, quantity }: ItemCardProps) => {
  const router = useRouter()

  function onAddToCart() {
    addProductToCart(product.id)
    router.refresh()
  }

  function onRemoveItem() {
    decreaseProductInCart(product.id)
    router.refresh()
  }

  return (
    <div className='flex items-center shadow rounded-lg w-full bg-white border-gray-100'>
      {/* Product Image */}
      <div className='p-2'>
        <Image
          width={200}
          height={200}
          className='rounded'
          src={product.image}
          alt={product.name}
        />
      </div>

      {/* Title */}
      <div className='px-5 pb-5 w-full flex flex-col mt-2'>
        <a href='#'>
          <h3 className='font-semibold text-xl tracking-tight '>
            {product.name} -{' '}
            <small className='text-sm'>${product.price.toFixed(2)}</small>
          </h3>
        </a>

        {/* Price and Add to Cart */}
        <div className='flex flex-col items-start justify-between'>
          <span className=''>Cantidad: {quantity}</span>
          <span className='font-bold '>
            Total: ${(product.price * quantity).toFixed(2)}
          </span>
        </div>
      </div>

      <div className='flex p-5 items-center justify-center'>
        <button
          onClick={onAddToCart}
          className=' bg-blue-700 hover:bg-blue-800 focus:ring-4 text-white focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'
        >
          <IoAddCircleOutline size={25} />
        </button>
        <span className='text-2xl  mx-10'>{quantity}</span>
        <button
          onClick={onRemoveItem}
          className=' bg-red-700 hover:bg-red-800 focus:ring-4 text-white focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center'
        >
          <IoRemove size={25} />
        </button>
      </div>
    </div>
  )
}
