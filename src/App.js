import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>click</button>
      <Modal open={isOpen} onClose={() => window.alert("fermé !!")}>
        Hello la modale
      </Modal>
    </div>
  );
}

export default App;
