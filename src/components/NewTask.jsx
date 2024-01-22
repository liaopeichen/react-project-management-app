import { useState, useRef } from "react";

import Modal from "./Modal.jsx";
import Heading2 from "./Heading2.jsx";
import Paragraph from "./Paragraph.jsx";

export default function NewTask({ onAddTask }) {
  const modalRef = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <Heading2 textColor="text-stone-700">Invalid Input</Heading2>
        <Paragraph textColor="text-stone-600">
          Oops ... looks like you forgot to enter a value.
        </Paragraph>
        <Paragraph textColor="text-stone-600">
          Please make sure you provided a valid value for every input field.
        </Paragraph>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
