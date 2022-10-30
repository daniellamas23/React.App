import { getFirestore, getDocs, collection, getDoc, doc, query, where} from 'firebase/firestore';



export const getAllProducts = () => {
  const database = getFirestore();
  //obtenemos db
  //obtenemos referencia
  const collectionReference = collection(database, 'items');
  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((info) => ({
          //armamos objeto
          id: info.id,
          ...info.data()
        }))
      return list

    })
    .catch((error) => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, "items", id);
  return getDoc(itemReference).then((captura) => {
    if (captura.exists()) {
      const item = { //armamos objeto
        id: captura.id,
        ...captura.data()
      }
      return item
    }
  }).catch(error => console.warn(error))






};
//Filtrar por categoría
export const getProductsByCategory = (categoryId) => {
  const database = getFirestore()
  const collectionReference = collection(database, 'items');
  //Se realiza query y con where se hace la comparacion
  const collectionQuery = query(collectionReference, where('tipo', '==', categoryId))

  return getDocs(collectionQuery)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      return list
    }).catch(error => console.warn(error))
}
