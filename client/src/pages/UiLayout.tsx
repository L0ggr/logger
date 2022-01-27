import React from "react";
import { Button } from "../components/Core/Ui";

export default function UiLayout() {
  return (
    <div>
      <p>Buttons</p>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="disabled" disabled>
        Disabled
      </Button>
    </div>
  );
}
