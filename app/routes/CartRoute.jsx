import Cart from "../features/cart/Cart";
export function meta() {
  return [
    { title: "FastPizza | Cart" },
    { name: "description", content: "Your cart" },
  ];
}
function CartRoute() {
  return <Cart />;
}

export default CartRoute;
