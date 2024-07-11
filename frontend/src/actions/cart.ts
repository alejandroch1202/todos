import { getCookie, hasCookie, setCookie } from 'cookies-next'

export const getCookieCart = () => {
  if (hasCookie('cart')) {
    return JSON.parse(getCookie('cart') ?? '{}')
  }

  return {}
}

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    cookieCart[id]++
  } else {
    cookieCart[id] = 1
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

export const decreaseProductInCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id] > 1) {
    cookieCart[id]--
  } else {
    delete cookieCart[id]
  }

  setCookie('cart', JSON.stringify(cookieCart))
}

export const removeProductFromCart = (id: string) => {
  const cookieCart = getCookieCart()

  if (cookieCart[id]) {
    delete cookieCart[id]
    setCookie('cart', JSON.stringify(cookieCart))
  }
}
