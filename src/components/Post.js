import React, { useState, useRef } from 'react';
import { Navigate } from 'react-router-dom'

function Post(props) {

    const [image, setImage] = useState('No Image Selected')
    const [caption, setCaption] = useState('')
    const [display, setDisplay] = useState('')
    const ref = useRef()

    if (!props.loggedIn){
        return <Navigate to='/login' />
      }

    let fileSelectHandler = (e) => {
        // setImage(e.target.files[0])
        // console.log(e.target.files[0])
        let picture = e.target.files[0];
        let src = URL.createObjectURL(picture);
        setImage(src)
        setDisplay('none')
    }

    let handleChange = (e) => {
        setCaption(e.target.value)
    }

    let handleSumbit = (e) => {
        e.preventDefault()

        if(image === 'No Image Selected'){
            alert('Please select a photo to submit!')
        }
    }

    let reset = () => {
        ref.current.value = '';
        setImage('No Image Selected');
        setDisplay('')
    }
       

    return (
        <div className='post'>
            
            <form onSubmit={handleSumbit}>
                Choose an photo to upload.
                <input  ref={ref}
                        type='file' 
                        onChange={fileSelectHandler}
                        style={{display: display}}
                />

                {image !== 'No Image Selected' ? 
                <button onClick={reset}>Remove Photo ❌</button> : null }

                {image !== 'No Image Selected' ? 
                <img className='preview_image' src={image} alt={image}></img> : null }
                
                {image !== 'No Image Selected' ? 
                <input 
                type='text'
                name='caption'
                autoComplete='off'
                placeholder='Write a Caption...'
                value={caption}
                onChange={handleChange}
                /> : null }

                {image !== 'No Image Selected' ? 
                <input type='submit' value='Share' /> : null }
             </form>
        </div>
    );
}

export default Post;