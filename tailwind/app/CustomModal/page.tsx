"use client";

import TestComp from "./TestComp";
import Modal from "./Modal";
import Alert from "./Alert";
import { useState } from "react";
const page = () => {
  const [modalView, setModalView] = useState(false);
  const [alertView, setAlertView] = useState(false);
  return (
    <div className="w-1/2 h-1/2 border-2 border-red-600 flex gap-5 justify-center">
      <button onClick={() => setModalView(!modalView)}>모달</button>
      <button onClick={() => setAlertView(!alertView)}>Alert</button>
      <Modal open={modalView} onClose={() => setModalView(false)}>
        <TestComp />
      </Modal>
      <Modal
        open={alertView}
        onClose={() => {
          console.log("alert");
          setAlertView(false);
        }}
      >
        <Alert />
      </Modal>
    </div>
  );
};

export default page;
