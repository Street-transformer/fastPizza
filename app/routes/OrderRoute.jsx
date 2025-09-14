import Order, { clientLoader } from "../features/order/Order";
import { clientAction } from "../features/order/UpdateOrder";
export function meta() {
  return [
    { title: "FastPizza | Order" },
    { name: "description", content: "Your order" },
  ];
}
function OrderRoute() {
  return <Order />;
}
export { clientLoader, clientAction };
export default OrderRoute;
