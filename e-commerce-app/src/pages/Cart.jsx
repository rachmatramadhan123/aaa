    import { useSelector } from "react-redux";
    import Navbar from "../components/Navbar";

    const Cart = () => {
        const carts = useSelector((state) => state.cart.data);
        const total = 0;
        return(
            <>
                <Navbar />
                <div className="container mx-auto px-4 py-8">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>
                    {carts.length === 0 ? (
                        <p className="text-center text-gray-500">Your cart is empty.</p>
                    ) : (
                        <div className="w-full max-w-2xl mx-auto">
                            {carts.map((cart) => (
                                <div 
                                    key={cart.id} 
                                    className="flex justify-between items-center p-4 mb-4 bg-white rounded-lg shadow-md">
                                    <h4 className="text-lg font-medium">{cart.title}</h4>
                                    <div className="flex items-center">
                                        <p className="mr-6">x{cart.qty}</p>
                                        <p className="text-lg font-semibold">${(cart.price * cart.qty).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="text-2xl font-semibold mb-4 text-center bg-gray-800 ">
                        <h2 className="text-white text-lg font-bold cursor-pointer">Total</h2>
                    </div>
                </div>
            </>
        )
    }
    export default Cart;