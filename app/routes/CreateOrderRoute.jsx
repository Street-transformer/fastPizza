import CreateOrder from "../features/order/CreateOrder";
export function meta() {
  return [
    { title: "FastPizza | New Order" },
    { name: "description", content: "Create a new order" },
  ];
}
function CreateOrderRoute() {
  return <CreateOrder />;
}

export default CreateOrderRoute;
