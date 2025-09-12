import CreateOrder, { clientAction } from "../features/order/CreateOrder";
export function meta() {
  return [
    { title: "FastPizza | New Order" },
    { name: "description", content: "Create a new order" },
  ];
}
function CreateOrderRoute() {
  return <CreateOrder />;
}
export { clientAction };

export default CreateOrderRoute;
