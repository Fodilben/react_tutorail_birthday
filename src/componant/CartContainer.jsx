import Cart from "./Cart";

const CartContainer = ({ data }) => {
  return (
    <div>
      {data.map((person) => {
        return <Cart key={person.id} {...person} />;
      })}
    </div>
  );
};
export default CartContainer;
