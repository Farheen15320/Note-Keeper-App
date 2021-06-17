import React, { useState } from 'react';
import '../createnote.css';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';


const Createnote = (props) => {


    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    const inputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;

        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,

            };
        });
    };

    const addnewNote = () => {
        props.passNote(note);

        setNote({
            title: "",
            content: "",
        });

    };

    const expandIt = () => {
        setExpand(true);
    };



    return (
        <>
            <div className='create-note'>
                <form>

                    {expand ?
                        <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            className='title-txt animate__animated animate__slideInDown'
                            autoComplete='off'
                            onChange={inputEvent}
                            value={note.title} /> : null}

                    <br />

                    <textarea
                        placeholder='Note it down...'
                        name='content'
                        className='note-txt animate__animated animate__fadeInLeft'
                        autoComplete='off'
                        onChange={inputEvent}
                        onClick={expandIt}
                        value={note.content} />

                    {expand? 
                    <Button className='ad-btn animate__animated animate__fadeInRight' onClick={addnewNote}><AddBoxIcon className='add-btn' /></Button> : null}
                    {/* <textarea rows='' column='' placeholder='Note it down...' /> */}

                </form>


            </div>
        </>
    );
};




export default Createnote;