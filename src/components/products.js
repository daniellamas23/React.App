
import products from '../Products.json'


export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
  const promise = new Promise((resolve) => {
    const result = products.find((product) => product.id === parseInt(id))
    console.log('result',result)
    setTimeout(() => {
      return resolve(result);
    }, 2000)
  })

  return promise
};

export const getProductsByCategory = (categoryId) => {
  const promise = new Promise((resolve) => {
    const results = products.filter((product) => product.tipo === categoryId);
    console.log('result',results)
    setTimeout(() => {
      return resolve(results);
    }, 2000)
  })

  return promise
}; 