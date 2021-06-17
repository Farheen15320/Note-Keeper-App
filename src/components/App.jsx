import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Createnote from './Createnote';
import Note from './Note';

const App = () => {

    const [addtheNote, setaddtheNote] = useState([]);


    const addNote = (note) => {
        // alert('hello');
        setaddtheNote((prevData) => {
            return [...prevData, note];


        });
        console.log(note);

    };

    const onDelete = (id) => {
        setaddtheNote((prevData) =>
            prevData.filter((currNote, indx) => {
                return indx != id;
            })
        );
    };


return (
    <>
        <Header />
        <Createnote
            passNote={addNote}
        />


        {addtheNote.map((val, index) => {
            return <Note
                key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteItem={onDelete}
            />
        })}

        <Footer />

    </>

);
};




export default App;