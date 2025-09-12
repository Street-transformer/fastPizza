import { Outlet, useNavigation } from "react-router";
import Loader from "./Loader";
import Header from "./Header";
import CartOverView from "../features/cart/CartOverview";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverView />
    </div>
  );
}

export default AppLayout;
