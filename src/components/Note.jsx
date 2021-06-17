import React from 'react';
import '../note.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = (props) => {

    const dltThisNote = () => {
        props.deleteItem(props.id);
    };


    return(
        <>
        <div className='note animate__animated animate__zoomIn'>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button className='dlt-btn' onClick={dltThisNote}><DeleteIcon  className='dlt-icon'/></Button>
        </div>

        </>

    );
};




export default Note;