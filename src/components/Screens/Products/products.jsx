import React, { useEffect, useState } from "react";
import "./products.css";
import Header from '../../Header/header'
import { AiOutlineClose } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productData } from "../../../Slices/ProductSlice";
import { productPrice } from "../../../Slices/PriceSlice";
import { namedProduct } from "../../../Slices/ProductName";
import { namedImage } from "../../../Slices/ImageSlice";

const products = () => {
  const baseUrl = "https://dummyjson.com";
  const [obtainedProducts, setObtainedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(obtainedProducts)
  const [displayCategory, setDisplayCategory] = useState(false)
  const [searchChange, setSearchChange] = useState([])
  const [foundItem, setFoundItem] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayField, setDisplayField] = useState(false)
  const [noResult, setNoResult] = useState(false)
  const [setNav, displaySetNav] = useState(false);
  const dispatch = useDispatch();

  // const loggedUser = useSelector((state) => state.logged.value)
  const user = useSelector((state) => state.user.value)

  const navigate = useNavigate()

  useEffect(() => {
    const getProduct = async () => {
      let response = await fetch(`${baseUrl}/products`);
      let newData = await response.json();
      // since we are after the products in the newData, we set the state variable(obtainedProducts) to the newData.products
      setObtainedProducts(newData.products)
      setFilteredProducts(newData.products)
    };
    getProduct();
    
  }, []);
  
  // if (Object.keys(user).length >! 0) {
  //   navigate('/login')
  // }

  // useEffect(() => {
  //     if (loggedUser === false) {
  //       // navigate('/')
  //     }
  //     },[])
    
  // NOTE TO SELF: You cannot obtain the values in the obtainedProducts    object while in the useEffect. It can only be obtained outside the useEffect.

  // We sent the value of the obtainedProducts to the store.
  
  
  
  localStorage.setItem('productt', JSON.stringify(obtainedProducts))

  const toggleNav = () => {
    displaySetNav(!setNav);
  };


  // The handle product click removes the nav bar in the mobile version.
  
  
  const handleCategory = () => {
    // setDisplayCategory(true)
    setDisplayCategory(true)
  }

  const handleCloseCategory = () => {
    setDisplayCategory(false)
  }

  const handleBodyClick = () => {
    setDisplayField(false)
  }

  const handleProductClick = () => {
    displaySetNav(false);
    setDisplayCategory(false)
  }

  const allClick = () => {
    setFilteredProducts(obtainedProducts)
    setDisplayCategory(false)
  }

  const beautyClick = () => {
    const filteredPhone = obtainedProducts.filter((newObtained) => {
      return newObtained.category == "beauty";
    });
    setFilteredProducts(filteredPhone)
    setDisplayCategory(false)
  };

  const fragranceClick = () => {
    const filteredLaptop = obtainedProducts.filter((newObtained) => {
      return newObtained.category == "fragrances";
      // console.log(newObtained.category);
    });
    setFilteredProducts(filteredLaptop)
    setDisplayCategory(false)
  };

  const furnitureClick = () => {
    const filteredFrag = obtainedProducts.filter((newObtained) => {
      return newObtained.category == 'furniture'
    })
    setFilteredProducts(filteredFrag)
    setDisplayCategory(false)
  }

  const groceriesClick = () => {
    const filteredSkin = obtainedProducts.filter((newObtained) => {
      return newObtained.category == 'groceries'
    })
    setFilteredProducts(filteredSkin)
    setDisplayCategory(false)
  }

  // const productEntireBody = {
  //   height:'100vh',
  //   overflowY:'hidden',
  // }

    const searchSubmit = (e) => {
      e.preventDefault()
      setFilteredProducts(searchChange)
    }

    const onSearchChange = (e) => {
        setDisplayField(true)
        let result = e.target.value
        // result == searchTerm
        let searchProducts = obtainedProducts.filter((newObtained) => 
              // find me the newObtained.title.first occurence of what I typed that is not equal to -1
              // -1 is what it renders when the data matching what I typed isn't found
              newObtained.title.toLowerCase().indexOf(result) != -1
        )
        console.log(searchProducts);
        if (searchProducts < [0]) {
          setNoResult(true)
          console.log('no products found');
        }
        else{
          setNoResult(false)
        }
        
        
        setSearchChange(searchProducts)
    }
      // console.log(searchTerm)
    const handleItem = (item) => {
        const renderedSearchList = Array(item)
        setFilteredProducts(renderedSearchList)
        const renderedResult = renderedSearchList.filter((filteredList) => {return setSearchTerm(filteredList.title)})
        // console.log(renderedResult);
      }
      
    
 
  

  return (
    <div onClick={handleBodyClick} style={displayCategory ? {height:'60vh', overflowY:'hidden'} : {overflowY:'visible'}}>
          <Header />
      {displayCategory && (
          <div className="mcategoriesContainer">
          <ul>
            <AiOutlineClose onClick={handleCloseCategory} className="closeBtn" />
            <li onClick={allClick}>all</li>
            <li onClick={beautyClick}>beauty</li>
            <li onClick={fragranceClick}>fragrances</li>
            <li onClick={furnitureClick}>furniture</li>
            <li onClick={groceriesClick}>groceries</li>
          </ul>
        </div>
        )}

      {/* The handleProductClick removes the navbar by just clicking any part on the body of the page. */}
          
        
        <h2 className="productHeader">PRODUCTS PAGE</h2>
      <div className="productContent">
        <form onSubmit={searchSubmit} className="inputContainer"><input onChange={onSearchChange} type="text" placeholder="Search for your product here" /><button><IoMdSearch /></button></form>
        {displayField && (
          <div className="searchField">
            <ul>
               {noResult && <h3 className="noProduct">no product found</h3>}
                {searchChange.map((item, i) => {
                  return(
                  <li onClick={() => {handleItem(item)}} className="searchList" key={i}>
                    {item.title}
                  </li>
                  )
                })}
            </ul>
          </div>
        )}
        <div className="categoriesContainer">

          <ul onClick={handleProductClick}>
            <li onClick={allClick}>all</li>
            <li onClick={beautyClick}>beauty</li>
            <li onClick={fragranceClick}>fragrances</li>
            <li onClick={furnitureClick}>furniture</li>
            <li onClick={groceriesClick}>groceries</li>
          </ul>
        </div>
        <button className="mobileCategories" onClick={handleCategory}>categories</button>
        

        <div className="productBodyContainer">
          {/* we mapped over the obtained obtainedProducts and derived a new structure called newProducts where we obtained the images, title and th price. */}
          {filteredProducts.map((newProducts) => {
            
            const handleOrderClick = () => {
              console.log('order clicked');
              dispatch(productData({obtainedProducts}))
              dispatch(productPrice(newProducts.price))
              dispatch(namedProduct(newProducts.title))
              dispatch(namedImage(newProducts.images[0]))
              navigate('/product/order')
              localStorage.setItem('smallPrice', JSON.stringify(newProducts.price))
              localStorage.setItem('smallProduct', JSON.stringify(newProducts.title))
              localStorage.setItem('smallImage', JSON.stringify(newProducts.images[0]))
              localStorage.setItem('smallID', JSON.stringify(newProducts.id))
           }

            return (
              <div onClick={handleOrderClick} className="productBody" key={newProducts.id}>
                <div className="productImageContainer">
                  <img
                    className="theImg"
                    src={newProducts.images[0]}
                    alt="productImage"
                  />
                </div>
                <div className="productDetail">
                  <h6>{newProducts.title}</h6>
                  <p>${newProducts.price}</p>
                </div>
                <p className="description">{newProducts.description}</p>
                <button className="addedItem">add to cart</button>
              </div>
            );
          })}
        </div>
        <h2 className="bottomLine">card color inspiration; courtesy of: EFUNKUNLE OLUWAMAYOWA VICTOR</h2>
      </div>
    </div>
  );
};

export default products;
