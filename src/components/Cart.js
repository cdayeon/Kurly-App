import { useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") || "[]"));

  return(
    <>
      <h1 className="text-center font-bold text-lg pb-2 mt-3 bg-purple-900 text-white pt-1">Kurly Cart</h1>

      {cart.length < 1 && (
          <p className="text-center font-bold text-base mt-5">장바구니가 비어있습니다.</p>
        )}

        {cart.map(item => (
          <ul>
            <li className="list-none text-sm font-bold"
            key={item}>{item}</li>
          </ul>
        ))}
    </>
  )
}