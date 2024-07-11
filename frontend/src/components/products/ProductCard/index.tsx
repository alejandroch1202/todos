'use client'

// https://tailwindcomponents.com/component/e-commerce-product-card
import Image from 'next/image'
import { IoAddCircleOutline, IoTrashOutline } from 'react-icons/io5'
import { Product } from '@/data/products'
import { RatingStar } from '@/components/products'
import { addProductToCart, removeProductFromCart } from '@/actions/cart'
import { useRouter } from 'next/navigation'

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter()

  const onAddToCart = () => {
    addProductToCart(product.id)
    router.refresh()
  }

  const onRemoveCart = () => {
    removeProductFromCart(product.id)
    router.refresh()
  }

  return (
    <div className='bg-white shadow rounded-lg max-w-sm'>
      {/* Product Image */}
      <div className='p-2'>
        <Image
          width={500}
          height={500}
          className='rounded'
          src={product.image}
          alt='product image'
        />
      </div>

      {/* Title */}
      <div className='px-5 pb-5'>
        <a href='#'>
          <h3 className='text-gray-900 font-semibold text-xl tracking-tight'>
            {product.name}
          </h3>
        </a>
        <div className='flex items-center mt-2.5 mb-5'>
          {/* Stars */}
          {Array(product.rating)
            .fill(0)
            .map((_, index) => (
              <RatingStar key={index} />
            ))}

          {/* Rating Number */}
          <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3'>
            {product.rating} / 5
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900'>
            ${product.price.toFixed(2)}
          </span>

          <div className='flex'>
            <button
              onClick={onAddToCart}
              className='text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveCart}
              className='text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
