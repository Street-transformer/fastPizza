import Menu, { clientLoader } from "../features/menu/Menu";
export function meta() {
  return [
    { title: "FastPizza | Menu" },
    { name: "description", content: "Check out our menu" },
  ];
}
function MenuRoute() {
  return <Menu />;
}
export { clientLoader };

export default MenuRoute;
