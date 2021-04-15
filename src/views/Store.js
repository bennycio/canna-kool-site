/*eslint-disable*/
import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import Slide from "@material-ui/core/Slide";

import {
  Card,
  CardBody,
  CustomInput,
  GridContainer,
  GridItem,
  Parallax,
  Button,
} from "@bennycio/material-ui-pro";

// sections for this page
import prodcuctsStyles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
import modalStyles from "assets/jss/material-kit-pro-react/modalStyle.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import storeStyles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

import {
  FaInfoCircle,
  FaRegPlusSquare,
  FaRegMinusSquare,
  FaWindowClose,
} from "react-icons/fa";
import { CartContext } from "../index";
import {
  SquarePaymentForm,
  CreditCardCVVInput,
  CreditCardExpirationDateInput,
  CreditCardNumberInput,
  CreditCardPostalCodeInput,
  CreditCardSubmitButton,
} from "react-square-payment-form";

import { v4 as uuidv4 } from "uuid";
import { useToggle, useMap } from "react-use";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Input,
  Switch,
  TextField,
  CircularProgress,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { BiCart } from "react-icons/bi";
import Oil from "assets/img/oilbg.jpg";

const useStyles = makeStyles(storeStyles);
const useProductStyles = makeStyles(prodcuctsStyles);

const Store = () => {
  const ckStandard = {
    name: "Odorless Standard",
    cost: 50,
    description: "Fantastic effects without a scent",
    size: "2oz",
  };
  const ckXL = {
    name: "Odorless Extra",
    cost: 65,
    description: "Fantastic effects without a scent",
    size: "3oz",
  };
  const ckMintStandard = {
    name: "Minty Standard",
    cost: 50,
    description: "Minty freshness mixed with cool relief",
    size: "2oz",
  };
  const ckMintXL = {
    name: "Minty Extra",
    cost: 65,
    description: "Minty freshness mixed with cool relief",
    size: "3oz",
  };
  const classes = useStyles();
  const productClasses = useProductStyles();
  return (
    <>
      <Parallax image={Oil} filter="dark" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <div className={classes.brand}>
                <h1 className={classes.title} style={{ fontSize: "3em" }}>
                  Canna Kool Products
                </h1>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={productClasses.section}>
          <div className={productClasses.container}>
            <Cart />
            <h2>Roll Ons</h2>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <Product
                  name={ckStandard.name}
                  cost={ckStandard.cost}
                  description={ckStandard.description}
                  size={ckStandard.size}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <Product
                  name={ckXL.name}
                  cost={ckXL.cost}
                  description={ckXL.description}
                  size={ckXL.size}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <Product
                  name={ckMintStandard.name}
                  cost={ckMintStandard.cost}
                  description={ckMintStandard.description}
                  size={ckMintStandard.size}
                />
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <Product
                  name={ckMintXL.name}
                  cost={ckMintXL.cost}
                  description={ckMintXL.description}
                  size={ckMintXL.size}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  );
};

const Counter = (props) => {
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  var index = cart.findIndex((i) => i.name === props.name);
  const clone = cart[index];

  return (
    <div className="add-to-cart">
      <span
        className="counter solid-icon"
        onClick={() => {
          if (clone.count > 1) {
            clone.count = clone.count - 1;
            updateAt(index, clone);
          }
        }}
      >
        <FaRegMinusSquare />
      </span>
      <span
        className=" counter solid-icon"
        onClick={() => {
          if (clone.count < 100) {
            clone.count = clone.count + 1;
            updateAt(index, clone);
          }
        }}
      >
        <FaRegPlusSquare />
      </span>
    </div>
  );
};

const Product = ({ name, cost, description, size }) => {
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  const [added, toggleAdded] = useToggle(false);

  function changeAddedTxt() {
    toggleAdded();
    setTimeout(() => {
      toggleAdded();
    }, 1000);
  }
  function changeAdded() {
    var index = cart.findIndex((i) => i.name === name);
    if (index === -1) {
      push({ name: name, cost: cost, count: 1 });
      changeAddedTxt();
    } else {
      const newCount = cart[index].count + 1;
      updateAt(index, { name: name, cost: cost, count: newCount });
      changeAddedTxt();
    }
  }

  return (
    <>
      <div className="product-wrapper shadowed">
        <div className="product-container">
          <div className="top"></div>
          <div className="bottom">
            <div className="details">
              <h3>{name}</h3>
              <h3>${cost}</h3>
            </div>
          </div>
        </div>
        <div className="inside">
          <div className="icon">
            <i className="material-icons">
              <FaInfoCircle />
            </i>
          </div>
          <div className="contents">
            <h3 className="centered">{name}</h3>
            <h3>{description}</h3>
            <h3>Size: {size}</h3>
          </div>
        </div>
      </div>
      <div className="centered">
        <Button id={name} color="primary" onClick={changeAdded}>
          {added ? "Added to Cart" : "Add to Cart"}
        </Button>
      </div>
    </>
  );
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useModalStyles = makeStyles(modalStyles);

const Cart = (props) => {
  const classes = useModalStyles();
  const {
    cart,
    set,
    push,
    updateAt,
    insertAt,
    update,
    updateFirst,
    upsert,
    sort,
    filter,
    removeAt,
    clear,
    reset,
  } = useContext(CartContext);

  const [visible, setVisible] = useState(false);

  const [total, setTotal] = useState(0);

  function openDrawer() {
    setVisible(true);
  }

  function closeDrawer() {
    setVisible(false);
  }

  useEffect(() => {
    var t = 0;
    cart.forEach((item) => {
      t += item.cost * item.count;
    });
    setTotal(t);
  }, [cart]);

  const cartItems = [];
  cart.forEach((item) => {
    cartItems.push(
      <div key={item.name}>
        <FaWindowClose
          size={"1.5em"}
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => {
            var index = cart.findIndex((i) => i.name === props.name);
            removeAt(index);
          }}
        />
        <p>{item.name}</p>
        <p>Cost: ${item.cost}</p>
        <p>Count: {item.count}</p>
        <Counter name={item.name} />
        <hr />
      </div>
    );
  });

  return (
    <>
      <Button
        color="primary"
        justIcon
        round
        onClick={openDrawer}
        className="cart-button"
        style={{
          color: "black",
          textAlign: "center",
          position: "sticky",
          top: "5%",
          zIndex: "1000",
        }}
      >
        <BiCart />
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={closeDrawer}
      >
        <DialogTitle id="large-modal-slide-title" disableTypography>
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={closeDrawer}
          >
            {" "}
            <Close />
          </Button>
          Cart
        </DialogTitle>
        <DialogContent>
          <div>{cartItems}</div>
          <h4>Total: ${total}</h4>
          <Checkout />
        </DialogContent>
      </Dialog>
    </>
  );
};

const Checkout = () => {
  const classes = useModalStyles();
  const { cart, clear } = useContext(CartContext);

  const [
    shippingDetails,
    {
      set: setShipping,
      setAll: setAllShipping,
      remove: removeShipping,
      reset: resetShipping,
    },
  ] = useMap({});
  const [
    billingDetails,
    {
      set: setBilling,
      setAll: setAllBilling,
      remove: removeBilling,
      reset: resetBilling,
    },
  ] = useMap({});

  const [isModalVisible, setIsModalVisible] = useToggle(false);
  const [isResultVisible, setResultVisible] = useToggle(false);
  const [isShippingAndBillingFilled, setShippingAndBillingFilled] = useToggle(
    false
  );
  const [shippingBillingEqual, setShippingBillingEqual] = useState(false);

  const [success, setSuccess] = useToggle(false);
  const [loading, setLoading] = useToggle(false);
  const [errors, setErrors] = useState([]);

  const APPLICATION_ID = "sandbox-sq0idb-zpwIkYe7ALhGiYVqJgT8aA";
  const LOCATION_ID = "LMGSEFQN3X8R2";
  const URL = process.env.REACT_APP_SQUARE_SERVICE_ENDPOINT;

  var total = 0;

  for (let item of cart) {
    total += item.cost * item.count;
  }

  async function checkoutRequest(data) {
    const response = await fetch(URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(response.ok);
    return response;
  }

  function cardNonceResponseReceived(
    errors,
    nonce,
    cardData,
    buyerVerificationToken
  ) {
    if (errors) {
      console.log(errors);
      setErrors(errors);
      return;
    }
    var data = {
      idempotency_key: uuidv4(),
      amount_money: {
        amount: total * 100,
        currency: "USD",
      },
      billing_address: billingDetails,
      shipping_address: shippingDetails,
      source_id: nonce,
      verification_token: buyerVerificationToken,
      autocomplete: true,
      location_id: LOCATION_ID,
    };
    checkoutRequest(data).then((response) => {
      if (response.ok) {
        setSuccess(true);
      }
      setLoading(false);
      setIsModalVisible(false);
      setResultVisible(true);
    });
  }

  function createPaymentRequest() {
    setLoading(true);
    return {
      requestShippingAddress: true,
      requestBillingInfo: true,
      currencyCode: "USD",
      countryCode: "US",
      total: {
        label: "Canna-Kool",
        amount: total + "00",
        pending: false,
      },
      lineItems: [
        {
          label: "Subtotal",
          amount: total + "00",
          pending: false,
        },
      ],
    };
  }

  function createVerificationDetails() {
    setLoading(true);
    return {
      amount: (total * 100).toString(),
      currencyCode: "USD",
      intent: "CHARGE",
      billingContact: {
        familyName: billingDetails.last_name,
        givenName: billingDetails.first_name,
        email: shippingDetails.email,
        country: "US",
        city: billingDetails.locality,
        addressLines: [billingDetails.address_line_1],
        postalCode: billingDetails.postal_code,
      },
    };
  }

  function postalCode() {
    return billingDetails.postal_code;
  }

  function focusField() {
    return "cardNumber";
  }

  function resetCheckout() {
    resetShipping();
    resetBilling();
    setShippingAndBillingFilled(false);
  }

  const showModal = () => {
    if (cart && cart.length) {
      setIsModalVisible(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetCheckout();
  };

  const handleCancelResult = () => {
    setResultVisible(false);
    resetCheckout();
    clear();
  };

  const onFinish = () => {
    if (shippingBillingEqual) {
      setAllBilling(shippingDetails);
    }
    setShippingAndBillingFilled(true);
  };

  const onSwitch = (event) => {
    setShippingBillingEqual(event.target.checked);
  };

  const handleChangeShipping = (event, field) => {
    setShipping(field, event.target.value);
  };
  const handleChangeBilling = (event, field) => {
    setBilling(field, event.target.value);
  };

  return (
    <>
      <Button color="primary" onClick={showModal}>
        Checkout
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={isModalVisible}
        TransitionComponent={Transition}
        keepMounted
        scroll="body"
        onClose={handleCancel}
        aria-labelledby="large-modal-slide-title"
        aria-describedby="large-modal-slide-description"
      >
        <DialogTitle id="large-modal-slide-title" disableTypography>
          <Button
            simple
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            onClick={handleCancel}
          >
            {" "}
            <Close />
          </Button>
          Checkout
        </DialogTitle>
        <DialogContent>
          {isShippingAndBillingFilled ? (
            <SquarePaymentForm
              sandbox={true}
              applicationId={APPLICATION_ID}
              locationId={LOCATION_ID}
              cardNonceResponseReceived={cardNonceResponseReceived}
              createPaymentRequest={createPaymentRequest}
              createVerificationDetails={createVerificationDetails}
              postalCode={postalCode}
              focusField={focusField}
            >
              <div
                style={{
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <fieldset className="sq-fieldset">
                  <CreditCardNumberInput />

                  <div className="sq-form-third">
                    <CreditCardExpirationDateInput />
                  </div>

                  <div className="sq-form-third">
                    <CreditCardPostalCodeInput />
                  </div>

                  <div className="sq-form-third">
                    <CreditCardCVVInput />
                  </div>
                </fieldset>
                <CreditCardSubmitButton id="checkout-button">
                  {loading ? (
                    <CircularProgress color="primary" />
                  ) : (
                    "Pay $" + total
                  )}
                </CreditCardSubmitButton>
              </div>
            </SquarePaymentForm>
          ) : (
            <form onSubmit={onFinish} autoComplete="off">
              <h4>Shipping Details</h4>
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="fname"
                label="First Name"
                fullWidth
                value={shippingDetails.first_name}
                onChange={(e) => handleChangeShipping(e, "first_name")}
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="lname"
                label="Last Name"
                fullWidth
                value={shippingDetails.last_name}
                onChange={(e) => handleChangeShipping(e, "last_name")}
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                value={shippingDetails.email}
                onChange={(e) => handleChangeShipping(e, "email")}
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="add1"
                label="Address Line 1"
                fullWidth
                value={shippingDetails.address_line_1}
                onChange={(e) => handleChangeShipping(e, "address_line_1")}
              />
              <TextField
                autoComplete="off"
                margin="dense"
                id="add2"
                label="Address Line 2"
                fullWidth
                value={shippingDetails.address_line_2}
                onChange={(e) => handleChangeShipping(e, "address_line_2")}
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="city"
                label="City"
                type="city"
                fullWidth
                value={shippingDetails.locality}
                onChange={(e) => handleChangeShipping(e, "locality")}
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="state"
                label="State"
                fullWidth
                value={shippingDetails.administrative_district_level_1}
                onChange={(e) =>
                  handleChangeShipping(e, "administrative_district_level_1")
                }
              />
              <TextField
                autoComplete="off"
                required
                margin="dense"
                id="zip"
                label="Zip Code/Postal Code"
                fullWidth
                value={shippingDetails.postal_code}
                onChange={(e) => handleChangeShipping(e, "postal_code")}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={shippingBillingEqual}
                    onChange={onSwitch}
                    name="equal"
                    color="primary"
                  />
                }
                label="Billing same as Shipping?"
              />
              <h4>Billing Details</h4>
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="fname-billing"
                label="First Name"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.first_name}
                onChange={(e) => handleChangeBilling(e, "first_name")}
              />
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="lname-billing"
                label="Last Name"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.last_name}
                onChange={(e) => handleChangeBilling(e, "last_name")}
              />
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="add1-billing"
                label="Address Line 1"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.address_line_1}
                onChange={(e) => handleChangeBilling(e, "address_line_1")}
              />
              <TextField
                autoComplete="off"
                margin="dense"
                id="add2-billing"
                label="Address Line 2"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.address_line_2}
                onChange={(e) => handleChangeBilling(e, "address_line_2")}
              />
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="city-billing"
                label="City"
                type="city"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.locality}
                onChange={(e) => handleChangeBilling(e, "locality")}
              />
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="state-billing"
                label="State"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.administrative_district_level_1}
                onChange={(e) =>
                  handleChangeBilling(e, "administrative_district_level_1")
                }
              />
              <TextField
                autoComplete="off"
                required={!shippingBillingEqual}
                margin="dense"
                id="zip-billing"
                label="Zip Code/Postal Code"
                fullWidth
                disabled={shippingBillingEqual}
                value={billingDetails.postal_code}
                onChange={(e) => handleChangeBilling(e, "postal_code")}
              />
              <Input type="submit">
                <Button type="button" color="primary">
                  Submit
                </Button>
              </Input>
            </form>
          )}
        </DialogContent>
      </Dialog>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal,
        }}
        open={isResultVisible}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCancelResult}
      >
        <DialogContent>{success ? "success" : "error"}</DialogContent>
      </Dialog>
    </>
  );
};

export default Store;
