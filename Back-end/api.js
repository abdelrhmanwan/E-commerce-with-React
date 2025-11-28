const DEFAULT_BASE_URL = 'https://api.escuelajs.co/api/v1';

const apiConfig = {
  baseUrl: import.meta.env?.VITE_API_BASE_URL || DEFAULT_BASE_URL,
};

const API_ENDPOINTS = {
  products: '/products',
  productBySlug: (slug) => `/products/slug/${slug}`,
  productById: (id) => `/products/${id}`,
  users: '/users',
  auth: {
    login: '/auth/login',
    profile: '/auth/profile',
  },
};

const buildQuery = (params = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      searchParams.set(key, value);
    }
  });
  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : '';
};

const request = async (path, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const response = await fetch(`${apiConfig.baseUrl}${path}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    let message = 'API request failed';
    try {
      const data = await response.json();
      message = data?.message || JSON.stringify(data);
    } catch {
      const text = await response.text();
      if (text) message = text;
    }
    throw new Error(message);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
};

const deriveRating = (product) => {
  if (product.rating) {
    return Number(product.rating.toFixed(1));
  }
  const generated = 3 + ((product.id % 20) / 20) * 2;
  return Number(Math.min(5, Math.max(3, generated)).toFixed(1));
};

const normalizeProduct = (product) => ({
  id: product.id,
  slug: product.slug,
  name: product.title,
  price: product.price,
  rating: deriveRating(product),
  image: product.images?.[0] || 'https://via.placeholder.com/400x400?text=Product',
  images: product.images || [],
  category: product.category?.name || 'Uncategorized',
  categoryId: product.category?.id ?? null,
  description: product.description || '',
  longDescription: product.description || '',
  stock: product.stock ?? Math.max(5, (product.id % 30) + 5),
});

const normalizeUser = (user) => ({
  id: user.id,
  name: user.name,
  email: user.email,
  avatar: user.avatar,
  role: user.role,
  creationAt: user.creationAt,
});

export const setApiBaseUrl = (url) => {
  apiConfig.baseUrl = url || DEFAULT_BASE_URL;
};

export const getProducts = async (params = {}) => {
  const query = buildQuery(params);
  const data = await request(`${API_ENDPOINTS.products}${query}`);
  return Array.isArray(data) ? data.map(normalizeProduct) : [];
};

export const searchProductsByTitle = async (title) => {
  if (!title) {
    return getProducts();
  }
  return getProducts({ title });
};

export const getProductsByPriceRange = async (min, max) => {
  return getProducts({ price_min: min, price_max: max });
};

export const getProductBySlug = async (slug) => {
  const data = await request(API_ENDPOINTS.productBySlug(slug));
  return normalizeProduct(data);
};

export const getProductById = async (id) => {
  const data = await request(API_ENDPOINTS.productById(id));
  return normalizeProduct(data);
};

export const getUsers = async (params = {}) => {
  const query = buildQuery(params);
  const data = await request(`${API_ENDPOINTS.users}${query}`);
  return Array.isArray(data) ? data.map(normalizeUser) : [];
};

export const createUser = async (payload) => {
  const data = await request(API_ENDPOINTS.users, {
    method: 'POST',
    body: JSON.stringify(payload),
  });
  return normalizeUser(data);
};

export const login = async (credentials) => {
  return request(API_ENDPOINTS.auth.login, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
};

export const getProfile = async (token) => {
  return normalizeUser(
    await request(API_ENDPOINTS.auth.profile, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  );
};

export const apiIntegration = {
  setApiBaseUrl,
  getProducts,
  searchProductsByTitle,
  getProductsByPriceRange,
  getProductBySlug,
  getProductById,
  getUsers,
  createUser,
  login,
  getProfile,
};
