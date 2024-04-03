### Steps

1. `yarn install`
2. `yarn run gen:tsclient && yarn run mockserver`
3. In another pane/terminal tab run `yarn test`


### Under the hood

Important bits:

- we have a rest api running at :5000 which exposes a Open API 3.x compliant schema
- Using the schema from [spec.yaml](./spec.yaml) we use the `open-api-generator-cli` to generate a ts client that gets added to `src/generated/` directory
- we are using the node-tap framework here but any testing lib works because we are applying assertions on the generated code
- when the generated code does not comply to our assertions we can determine that there is a break in contract. The generated code being in TS, there is a good chance TS types itself start complaining