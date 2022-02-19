import React from "react";
import { Button, Checkbox } from "../components/Core/Ui";

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
      <p>Checkboxes</p>
      <Checkbox value="Checkbox 1" />
    </div>
  );
}
