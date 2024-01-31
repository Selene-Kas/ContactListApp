import { useState } from "react";
import { useEffect } from "react";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    useEffect(() => {
        async function fetchContact() {
          const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
          const response = await fetch(API_URL);
          const data = await response.json();
          setContact(data);
          //console.log(data);
        }
        fetchContact();
     }, [ ]);
    return (
        <div>
            {contact ? (
            <div>  
                <ul>
                    <h2>{contact.name}</h2>
                    <li>Email: {contact.email}</li>
                    <li>Phone: {contact.phone}</li>
                    <li>Website: {contact.website}</li>
                    <button onClick={() => setSelectedContactId(null) }>Contact List</button>
                </ul>
            </div>
            ): (
                <div>Loading...</div>
            )}

        </div>
    );
}