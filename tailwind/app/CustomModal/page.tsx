"use client";

import TestComp from "./TestComp";
import Modal from "./Modal";
import Alert from "./Alert";
import { useEffect, useState } from "react";
const page = () => {
  const [modalView, setModalView] = useState(false);
  const [alertView, setAlertView] = useState(false);

  useEffect(() => {
    window.alert = (message: string, callback?: () => void) => {
      console.log(message);
      callback && callback();
    };
  }, []);
  const testAlert = () => {
    window.alert("test", () => {
      if (confirm("hi")) {
        console.log(true);
        setAlertView(true);
      } else {
        console.log(false);
      }
    });
  };
  return (
    <div className="w-1/2 h-1/2 border-2 border-red-600 flex gap-5 justify-center">
      <button onClick={() => setModalView(!modalView)}>모달</button>
      <button onClick={() => setModalView(!modalView)}>Alert</button>
      <button onClick={() => testAlert()}>test</button>
      <Modal open={modalView} onClose={() => setModalView(false)}>
        <TestComp />
      </Modal>
      <Modal
        open={alertView}
        onClose={() => {
          // console.log("alert");
          setAlertView(false);
        }}
      >
        <Alert />
      </Modal>
    </div>
  );
};

export default page;
