import React, { memo } from "react";

export const HeaderFunctional = memo(({ name, prof }) => (
  <h2 style={{ padding: "10px 20px", textAlign: "center", color: "blue" }}>
    Hello World! {name} ({prof})
  </h2>
));
