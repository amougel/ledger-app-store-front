# Ledger App Store Front

## Starter

Based on [React Silicon Life](https://github.com/valpinkman/react-silicon-life), check out the repo for more informartion about the technical stack.
  
## Development

To make sure this project works, you will need to run the [App Store Api](git@github.com:LedgerHQ/ledger-app-store-api.git) (check out the repo for informations on how to setup django superusers and database) and a temporary proxy to bypass CORS issues, which you can find here [App Store Proxy](git@github.com:valpinkman/ledger-app-store-proxy.git)

Once you have both setup and running, you can then start this project

```shell
$ git clone https://github.com/LedgerHQ/ledger-app-store-front
$ cd ledger-app-store-front
$ yarn # or $ npm install
$ yarn start # or $ npm start
```

Then navigate to `https://localhost:9000/` and start coding 🙂