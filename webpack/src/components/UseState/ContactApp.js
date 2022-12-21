import React, { useState, useRef } from "react";

export let contacts_db = "contacts_db";
function ContactApp(){
    const [contacts, setContacts] = useState(() => {
        let contactsList = [];
        if (localStorage.getItem(contacts_db) == null) {
            contactsList = ["Tùng Chùa", "Bình Thường", "Sang Chấn"];
            localStorage.setItem(contacts_db, JSON.stringify(contactsList));
        } else {
            contactsList = JSON.parse(localStorage.getItem(contacts_db));
        }
        return contactsList;
    })
    const [contact, setContact] = useState("");

    const contacInput = useRef();
    const handleSubmit = (e) =>{
        e.preventDefault();
        setContacts( (pre) => {
            let data = [...pre];
            data.unshift(contact);
            localStorage.setItem(contacts_db, JSON.stringify(data));
            return data;
        });
        setContact("");
        contacInput.current.forcus;
    }
    const handleRemove = (value) => {
        setContacts((pre) => {
            let data = [...pre];
            data = data.filter((item) => item != value);
            localStorage.setItem(contacts_db, JSON.stringify(data));
            return data;
        })
    }
    return (
        <div className="container vh-100">
            <h1>Contact App</h1>
            <div className="w-25 my-2">
                <form onSubmit={handleSubmit} className="d-flex align-items-center">
                    <input 
                        type="text" className="form-control"
                        value={contact}
                        ref = {contacInput}
                        onInput = {(e) => setContact(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success btn-sm ms-2">Add</button>
                </form>
            </div>
            <div className="w-25">
                <ul className="list-group list-group-flush">
                    {
                        contacts.map((contact) => (
                            <li key={contact} className="list-group-item d-flex justify-content-between">
                        {contact}
                        <span   role="button" 
                                className="text-danger fw-border"
                                onClick={() => (handleRemove(contact))}
                                >
                         &times;</span>
                    </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ContactApp;