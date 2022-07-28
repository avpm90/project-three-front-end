import { TripCard } from "../../components/Store/TripCard";
import { Cart } from "../../components/Store/Cart";
import { CartProvider } from "react-use-cart";
import { NavBar } from "../../components/HomePage/navBar";
import { ShoppingCartOutlined } from "@ant-design/icons";
import style from "../Store/style.module.css";

export function Store() {
  return (
    <>
      <NavBar />
      <div
        className={style.containerStore}
        style={{ display: "flex", flexDirection: "row" }}
      >
        <CartProvider>
          <div className={style.tripCard}>
            <TripCard />
          </div>

					<div className={style.cart}>
						<h1>
							Shopping Cart <ShoppingCartOutlined />
						</h1>
						<Cart />
					</div>
				</CartProvider>
			</div>
		</>
	);
}
