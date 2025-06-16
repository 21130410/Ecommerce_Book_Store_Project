export const getUserId = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  return userInfo?.id || null;
};

export const saveCartToLocal = (userId, cartItems) => {
  localStorage.setItem(`cart_${userId}`, JSON.stringify(cartItems));
};

export const getCartFromLocal = (userId) => {
  const cart = localStorage.getItem(`cart_${userId}`);
  return cart ? JSON.parse(cart) : [];
};
