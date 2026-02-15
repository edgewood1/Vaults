# Plaid recovery


[https://plaid.com/](https://plaid.com/)



N32LLKTMZZPCSOM25RP3RFGJIQ


Client id
670e95aaf5ca2b001925f2d0

Sandbox

7c2ef37e30bece4d727083c61ae146

Production


7552a7f7a54589f10c5b25d09b7854


Your **Client ID** is your PLAID_CLIENT_ID.
Your **Sandbox Key** is your PLAID_SECRET for the Sandbox environment. This is the one you should use in AWS Secrets Manager for now.
Your **Production Key** is your PLAID_SECRET for the Production environment.

Was secrets

Encryption key
aws/secretsmanager

Secret name
plaid/budget-tracker/api-keys

Secret arN - use In lambda env. 

arn:aws:secretsmanager:us-east-1:809332431719:secret:plaid/budget-tracker/api-keys-b0aJtI