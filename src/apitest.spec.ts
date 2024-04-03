import t from "tap";

import { DefaultApi } from "./generated/api/defaultApi";

t.test("/cat endpoint returns 200 OK", async (t) => {
  const api = new DefaultApi("http://localhost:5000/v1");
  const { response, body } = await api.catGet({
    headers: { "Content-Type": "application/json" },
  });
  t.equal(response.statusCode, 200);
  t.equal(body.age, "string");
});
