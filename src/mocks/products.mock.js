import { faker } from "@faker-js/faker";

faker.locale = "es";

export const generateProducts = () => {
  return {
   
    title: faker.commerce.productTitle(),
    model: faker.commerce.productModel(),
    thumbnails: [faker.image.imageUrl()],
    code: faker.random.alphaNumeric(6),
    price: faker.commerce.price(),
    stock: faker.random.numeric(1),
    quantity: faker.ramdom.alphaNumeric(2),
    
  };
};
