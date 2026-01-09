"use client";

import { useState } from "react";
import Modal from "./modal";

export default function ModalComponent() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModal() {
    setShowModalPopup(!showModalPopup);
  }

  function onClose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModal}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div> This is Body Content</div>}
        />
      )}
    </div>
  );
}
