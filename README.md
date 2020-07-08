# node-metatag-dns

Node application with 2 endpoints exposed 
1. [metatag](http://localhost:3000/metatag?url=http://amazon.in&meta_name=description) 
URL format: http://localhost:3000/metatag?url={}&meta_name={}
Checks if the meta tag with the name exists in the mentioned url.
2. [dns](http://localhost:3000/dns?url=www.google.com&dns_txt_rcd=docusign=1b0a6754-49b1-4db5-8540-d2c12664b289)
URL format: http://localhost:3000/metatag?url={}&dns_txt_rcd={}
Checks if dns text record is present for a specified url .

Refer config.js file for customizing ports.

## Installation

Use npm to install packages mentioned in the package.json

```bash
npm install 
```
## Build

To run the application locally

```bash
npm start 
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


