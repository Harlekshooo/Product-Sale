import React, { useEffect, useState } from "react";
import "./order.css";
import Header from "../../Header/header";
import pic from "../../../assets/Profile image.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const order = () => {
  const product = useSelector((state) => state.product.value);
  // const thePrice = useSelector((state) => state.price.value);
  // const theProduct = useSelector((state) => state.productName.value);
  // const theImage = useSelector((state) => state.imageName.value);

  const previewPrice = JSON.parse(localStorage.getItem("smallPrice"));
  const previewProduct = JSON.parse(localStorage.getItem("smallProduct"));
  const previewImage = JSON.parse(localStorage.getItem("smallImage"));
  const previewID = JSON.parse(localStorage.getItem("smallID"));

  const anotherProperty = product.obtainedProducts;
  const [count, setCount] = useState(0);
  const [reCount, setReCount] = useState(0);
  const [payoff, setPayoff] = useState(0);
  const [orderedItems, setOrderedItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) == null
      ? []
      : JSON.parse(localStorage.getItem("cartItems"))
  );
  const [savedProduct, setSavedProduct] = useState([]);
  const [emptyCart, setEmptyCart] = useState(false);
  const navigate = useNavigate;

  // if(payoff === 0) {
  //     navigate('/product')
  // }

  // useEffect(() => {
  //   if (orderedItems == []) {
  //   setEmptyCart(true)
  // }
  //   else{
  //     setEmptyCart(false)
  //   }
  // },[])

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (count < 1) {
      setCount(0);
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    let updatedOrderedItems = orderedItems.filter(
      (item, i, arr) => item.orderID != id
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedOrderedItems));
    setOrderedItems(updatedOrderedItems);
  };

  // localStorage.removeItem('cartItems')

  const handleOrderQty = () => {
    if(count == 0) {
      return;
    }
    let exist = false;
      orderedItems.map((item, i, arr) => {
        if (item.orderID == previewID) {
          exist = true;
          setReCount(count);
          setCount(0);
          setPayoff(count * previewPrice);
          item.orderQuantity = count;
          item.payoff = previewPrice;
        }
      });

    if (!exist) {
      setReCount(count);
      setCount(0);
      setPayoff(count * previewPrice);
      setEmptyCart(false);
      const newItems = {
        orderID: previewID,
        orderImage: previewImage,
        orderPrice: previewPrice,
        orderProduct: previewProduct,
        orderQuantity: count,
        orderPayoff: payoff,
      };
      orderedItems.push(newItems);
    }
    localStorage.setItem("cartItems", JSON.stringify(orderedItems));
    setOrderedItems(orderedItems);
  };

  let finalBoss = JSON.parse(localStorage.getItem("cartItems"));
  console.log(finalBoss);
  // localStorage.setItem('cartItems', JSON.stringify([]))

  // useEffect(() => {
  //   // setPayoff(finalCount * previewPrice)
  //   setOrderedItems(finalBoss)
  //   if(finalBoss == null) {
  //     setOrderedItems([])
  //   }
  // },[])

  // const finalCount = JSON.parse(localStorage.getItem('orderPrice'))
  // localStorage.setItem('orderPayoff', JSON.stringify(payoff))


  return (
    <div className="orderContainer">
      <h3 className="orderHeader">order your product</h3>

      <div className="orderBodyContainer">
        {/* we mapped over the obtained obtainedProducts and derived a new structure called newProducts where we obtained the images, title and th price. */}
        {/* {filteredProducts.map((newProducts) => { */}
        {/* return ( */}
        <div className="orderBody">
          <div className="productImageContainer">
            <img className="theImg" src={previewImage} alt="productImage" />
          </div>
          <div className="orderProductDetail">
            <h6>{previewProduct}</h6>
            <p>${previewPrice}</p>
          </div>
        </div>
        {/* //   ); */}
        {/* // })} */}
      </div>
      <div className="orderQuantity">
        <button onClick={handleDecrease}>-</button>
        <span className="orderCount">{count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>

      <div className="cart">
        <button onClick={handleOrderQty} className="cartButton">
          <FaShoppingCart />
          add to cart
        </button>
      </div>

      <div className="orderSection">
        <h4 className="cartHeader">cart</h4>
        <hr />

        {orderedItems.length == 0 ? (
          <div className="orderPrice">
            <p className="emptyCart">your cart is empty !!!</p>
          </div>
        ) : (
          orderedItems.map((newProducts) => {
            let orderPayoff =
              newProducts.orderPrice * newProducts.orderQuantity;
            return (
              <div className="innerOrderContents" key={newProducts.orderID}>
                <div className="subOrderContents">
                  <div className="thumbnailContainer">
                    <img src={newProducts.orderImage} alt="" />
                  </div>
                  <div className="orderDetails">
                    <h4>{newProducts.orderProduct}</h4>

                    <div className="orderPrice">
                      <span>${newProducts.orderPrice}</span> X{" "}
                      <span>{newProducts.orderQuantity}</span> ={" "}
                      <span>${orderPayoff}</span>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => deleteItem(newProducts.orderID)}
                  className="orderDelete"
                >
                  <RiDeleteBin5Fill />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default order;
