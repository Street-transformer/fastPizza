import Order, { clientLoader } from "../features/order/Order";
export function meta() {
  return [
    { title: "FastPizza | Order" },
    { name: "description", content: "Your order" },
  ];
}
function OrderRoute() {
  return <Order />;
}
export { clientLoader };
export default OrderRoute;
