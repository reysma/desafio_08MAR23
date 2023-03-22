export const generateProductErrorInfo = (product) => {
    return `Uno o mas propiedades estan incompletos o son invalidos.
    Lista de propiedades obligatorios:
        * first_name: Necesita ser un string, recibio ${product.title}
        * last_name: Necesita ser un string, recibio ${product.price}
        * email: Necesita ser un string, recibio ${product.quantity}`
        }
