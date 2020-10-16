import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth, db } from "../firebase";

function Header() {

  const [{basket, user}, dispatch] = useStateValue();
  const [username, setUsername] = useState(null)
  //console.log("USER>>>>>>>>>",user?.uid)
  useEffect(() => {
    db.collection('users').doc(`${user?.uid}`).get().then((docs)=>{
      setUsername(docs.data()?.UserName)
      //console.log("USER>>>>>>>>>",docs.data()?.UserName)
    })
  }, [user])
  
  
  const handleClick = () => {
    if(user) {
      auth.signOut()
    }
  }

  return (
    <div className="header">
      <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      
        <div className="header__nav">
        <Link to={!user && '/login'}>
          <div className="header__options" onClick={handleClick}>
            <span className="header__optionLineOne">Hello {username ? username : "Guest"}</span>
            <span className="header__optionLineTwo">{user ? "Sign Out":"Sign In"}</span>
          </div>
          </Link>
      

        <div className="header__options">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span>
        </div>

        <div className="header__options">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
        <div className="header__optionsBasket">
          <ShoppingCartIcon />
  <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
