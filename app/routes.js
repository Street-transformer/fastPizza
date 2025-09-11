import { index, route } from "@react-router/dev/routes";

export default [
  route("/", "./ui/AppLayout.jsx", [
    index("routes/Home.jsx"),
    route("menu", "routes/MenuRoute.jsx"),
    route("cart", "routes/CartRoute.jsx"),
    route("order/new", "routes/CreateOrderRoute.jsx"),
    route("order/:orderId", "routes/OrderRoute.jsx"),
  ]),
];
