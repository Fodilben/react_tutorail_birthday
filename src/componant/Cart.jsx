const Cart = ({ id, name, age, image }) => {
  return (
    <article className="person">
      <div>
        <img src={image} alt="img" className="img" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  );
};
export default Cart;
