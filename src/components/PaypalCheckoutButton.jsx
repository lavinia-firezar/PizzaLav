import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const PaypalCheckoutButton = (props) => {
  const { priceProduct } = props;

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaidFor(true);
  };

  if (paidFor) {
    setTimeout(() => {
      setPaidFor(false);
    }, 3000);
  }

  if (error) {
    alert(error);
  }

  return (
    <div>
      {paidFor && (
        <Alert variant="success">Ai finalizat comanda cu succes!</Alert>
      )}
      <PayPalButtons
        style={{
          color: "silver",
          layout: "horizontal",
          height: 48,
          tagline: false,
          shape: "pill",
        }}
        onClick={(data, actions) => {
          const hasBoughtProduct = false;
          if (hasBoughtProduct) {
            setError("Tu ai cumparat acest produs");
            return actions.reject();
          } else {
            return actions.resolve();
          }
        }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: priceProduct,
                  currency: "EUR",
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("oder", order);
          handleApprove(data.orderID);
        }}
        onError={(err) => {
          setError(err);
          console.error("Paypal Checkout Error", err);
        }}
        onCancel={() => {}}
      />
    </div>
  );
};

export default PaypalCheckoutButton;
