import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  //console.log(selectedContactId);
  return (
    <>
      {selectedContactId ? (
        <div className="ContactView">
          <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        </div>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  );
}
