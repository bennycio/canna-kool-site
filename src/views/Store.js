/*eslint-disable*/
import React, { useEffect, useContext, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Slide from "@material-ui/core/Slide";

// sections for this page
import prodcuctsStyles from "assets/jss/material-kit-pro-react/views/ecommerceSections/latestOffersStyle.js";
import modalStyles from "assets/jss/material-kit-pro-react/modalStyle.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";

import storeStyles from "assets/jss/material-kit-pro-react/views/ecommerceStyle.js";

import {
  FaInfoCircle,
  FaRegPlusSquare,
  FaRegMinusSquare,
  FaWindowClose,
} from "react-icons/fa";
import { ShoppingCartOutlined } from "@ant-design/icons";
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
import { useToggle } from "react-use";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Input,
  Switch,
  TextField,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

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
      <Parallax
        image={require("assets/img/oilbg.jpg")}
        filter="dark"
        small
      >
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
                <h1 className={classes.title}>Our Products</h1>
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
      <div
        className={classNames(
          classes.subscribeLine,
          classes.subscribeLineImage
        )}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={6}
              md={6}
              className={classNames(classes.mlAuto, classes.mrAuto)}
            >
              <div className={classes.textCenter}>
                <h3 className={classes.title}>Subscribe to our Newsletter</h3>
                <p className={classes.description}>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
              </div>
              <Card raised className={classes.card}>
                <CardBody className={classes.cardBody}>
                  <form>
                    <GridContainer>
                      <GridItem xs={12} sm={6} md={6} lg={8}>
                        <CustomInput
                          id="emailPreFooter"
                          formControlProps={{
                            fullWidth: true,
                            className: classes.cardForm,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <Mail />
                              </InputAdornment>
                            ),
                            placeholder: "Your Email...",
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={6} md={6} lg={4}>
                        <Button
                          color="rose"
                          block
                          className={classes.subscribeButton}
                        >
                          subscribe
                        </Button>
                      </GridItem>
                    </GridContainer>
                  </form>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
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
        <ShoppingCartOutlined />
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

  const [shippingDetails, setShippingDetails] = useState({});
  const [billingDetails, setBillingDetails] = useState({});

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
    setShippingDetails({});
    setBillingDetails({});
    setShippingAndBillingFilled(false);
  }

  const showModal = () => {
    if (cart && cart.length) {
      setIsModalVisible(true);
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setResultVisible(true);
    resetCheckout();
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    resetCheckout();
  };

  const handleOkResult = () => {
    setResultVisible(false);
    resetCheckout();
    clear();
  };

  const handleCancelResult = () => {
    setResultVisible(false);
    resetCheckout();
    clear();
  };

  const ShippingAndBillingForm = () => {
    var shippingDetails = {};
    var billingDetails = {};

    const onFinish = () => {
      setShippingDetails(shippingDetails);
      if (shippingBillingEqual) {
        billingDetails = shippingBillingEqual;
      }
      setBillingDetails(billingDetails);
      setShippingAndBillingFilled(true);
      console.log(shippingDetails);
      console.log(billingDetails);
    };

    useEffect(() => {}, [shippingBillingEqual]);

    const onSwitch = (e) => {
      setShippingBillingEqual(e.target.checked);
    };

    return (
      <form onSubmit={onFinish}>
        <h4>Shipping Details</h4>
        <TextField
          autoFocus
          required
          margin="dense"
          id="fname"
          label="First Name"
          fullWidth
          onChange={(e) => (shippingDetails.first_name = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="lname"
          label="Last Name"
          fullWidth
          onChange={(e) => (shippingDetails.last_name = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="email"
          label="Email"
          type="email"
          fullWidth
          onChange={(e) => (shippingDetails.email = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="add1"
          label="Address Line 1"
          fullWidth
          onChange={(e) => (shippingDetails.address_line_1 = e.target.value)}
        />
        <TextField
          margin="dense"
          id="add2"
          label="Address Line 2"
          fullWidth
          onChange={(e) => (shippingDetails.address_line_2 = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="city"
          label="City"
          type="city"
          fullWidth
          onChange={(e) => (shippingDetails.locality = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="state"
          label="State"
          fullWidth
          onChange={(e) =>
            (shippingDetails.administrative_district_1 = e.target.value)
          }
        />
        <TextField
          required
          margin="dense"
          id="zip"
          label="Zip Code/Postal Code"
          fullWidth
          onChange={(e) => (shippingDetails.zip = e.target.value)}
        />
        {/*this makes everything go wrong :( */}
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
          autoFocus
          required
          margin="dense"
          id="fname-billing"
          label="First Name"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.first_name = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="lname-billing"
          label="Last Name"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.last_name = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="add1-billing"
          label="Address Line 1"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.address_line_1 = e.target.value)}
        />
        <TextField
          margin="dense"
          id="add2-billing"
          label="Address Line 2"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.address_line_2 = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="city-billing"
          label="City"
          type="city"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.locality = e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="state-billing"
          label="State"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) =>
            (billingDetails.administrative_district_1 = e.target.value)
          }
        />
        <TextField
          required
          margin="dense"
          id="zip-billing"
          label="Zip Code/Postal Code"
          fullWidth
          disabled={shippingBillingEqual}
          onChange={(e) => (billingDetails.zip = e.target.value)}
        />
        <Input type="submit">
          <Button type="button" color="primary">
            Submit
          </Button>
        </Input>
      </form>
    );
  };

  const CheckoutForm = () => {
    return (
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
            Pay ${total}
          </CreditCardSubmitButton>
        </div>
      </SquarePaymentForm>
    );
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
        scroll="paper"
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
            <CheckoutForm />
          ) : (
            <ShippingAndBillingForm />
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
