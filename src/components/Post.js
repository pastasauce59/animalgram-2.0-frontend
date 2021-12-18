import React, { useState } from 'react';

function Post(props) {

    const [image, setImage] = useState("No Image Selected")
    const [caption, setCaption] = useState('')

    let fileSelectHandler = (e) => {
        // setImage(e.target.files[0])
        // console.log(e.target.files[0])
        let picture = e.target.files[0];
        let src = URL.createObjectURL(picture);
        setImage(src)
    }

    let handleChange = (e) => {
        setCaption(e.target.value)
    }

    let handleSumbit = () => {
        // fetch will go here once backend is created
    }

    return (
        <div className='post'>
            <form>
                Choose an photo to upload.
                <input type='file' onChange={fileSelectHandler} />
                <img className='preview_image' src={image} alt={image}></img>

                <input 
                type='text'
                name='caption'
                autoComplete='off'
                placeholder='Write a Caption...'
                value={caption}
                onChange={handleChange}
                />

                <input type='submit' value='Share' />
                

           </form>
        </div>
    );
}

export default Post;