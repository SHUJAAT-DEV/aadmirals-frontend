import React from 'react';
import GooglePayButton from "@google-pay/button-react";
import { useSelector } from "react-redux";

export default function GooglePay() {
  const PreBookingReducer = useSelector((state) => state.PreBookingReducer);
    return (
        <GooglePayButton
            environment="TEST"
            paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                            allowedCardNetworks: ['MASTERCARD', 'VISA', 'AMEX'],
                        },
                        tokenizationSpecification: {
                            type: 'PAYMENT_GATEWAY',
                            parameters: {
                                gateway: 'example',
                                gatewayMerchantId: 'exampleGatewayMerchantId',
                            },
                        },
                    },
                ],
                merchantInfo: {
                    merchantId: 'BCR2DN4TUTLJPAJ6',
                    merchantName: 'AAdmirals Travel& Transportation',
                },
                transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: String(PreBookingReducer.amount) ,
                    currencyCode: 'USD',
                    countryCode: 'US',
                },
                shippingAddressRequired:false,
                callbackIntents:['PAYMENT_AUTHORIZATION']
            }}
            onLoadPaymentData={paymentRequest => {
                console.log('load payment data', paymentRequest);
            }}
            onPaymentAuthorized={
                paymentdata=>{
                    console.log("payment athorzied success", paymentdata)
                }
            }
        />
    )
}
