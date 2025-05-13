

export interface Product {
  id: string;
  name: string;
  price: string;
  priceId: string;
  description?: string;
  default_price: number;
  created: number;
  updated: number;
  active: boolean;
  object: string;
  type: string;

}


export interface CheckoutSession {
  url: string;
}

export const BASE_URL = 'http://192.168.1.103:4242'; //URL del backend con la ip local

//traer los productos (suscripciones)
export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al cargar los productos');
    }
    
    const products = await response.json();
    console.log('Productos recibidos:', products);
    
    // Transformar los productos de Stripe para nuestro formato
    return products.map((product: any) => ({
      id: product.id,
      name: product.name,
      price: product.price, // ya viene formateado
      priceId: product.priceId,
      description: product.description,
      active: product.active,
      type: product.type,
    }));
  } catch (error) {
    console.error('Error en fetchProducts:', error);
    throw error;
  }
};

//traer los precios
export const fetchPrices = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${BASE_URL}/prices`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Error al cargar los precios');
    }
    
    const prices = await response.json();
    console.log('Precios recibidos:', prices);
    
    // Transformar los precios de Stripe para nuestro formato
    return prices.map((price: any) => ({
      id: price.id,
      name: price.name,
      price: price.price, // ya viene formateado
      priceId: price.priceId,
      description: price.description,
      active: price.active,
      type: price.type,
    }));
  } catch (error) {
    console.error('Error en fetchPrices:', error);
    throw error;
  }
};

//crear la sesión de pago
export const iniciarCheckout = async (priceId: string, setLoading: (loading: boolean) => void) => {
  setLoading(true);
  try {
    console.log('Iniciando checkout con priceId:', priceId);

    const response = await fetch(`${BASE_URL}/create-checkout-session`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ priceId }),
    });

    // Read the response only once
    const responseData = await response.json();
    
    if (!response.ok) {
      throw new Error(responseData.error || 'Error en la respuesta del servidor');
    }

    if (!responseData?.url) {
      console.error('Respuesta inesperada del servidor:', responseData);
      throw new Error('La respuesta no contiene la URL de checkout');
    }

    console.log('URL de checkout obtenida:', responseData.url);
    return responseData.url;

  } catch (error) {
    console.error('Error en iniciarCheckout:', error);
    throw error instanceof Error ? error : new Error('Error desconocido al iniciar el pago');
  } finally {
    setLoading(false);
  }
};
