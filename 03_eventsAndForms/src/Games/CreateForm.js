import React from 'react';

const innerState = {
    title: null,
    description: null,
    imageUrl: null
}

 const handleChange = (event) => {
     innerState[event.target.name] = event.target.value;
 }

const CreateForm = (props) => {
    return (
        <div className="create-form">
            <h1>Create game</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                props.createGame(innerState)
            }}>
                <label>Title</label>
                <input type="text" name='title' onChange={handleChange} id="title"/>
                <label>Description</label>
                < textarea type = "text"
                name= 'description'
                onChange={handleChange}
                id = "description" / >
                <label>ImageUrl</label>
                < input type = "text"
                name = 'imageUrl'
                onChange={handleChange}
                id = "imageUrl" / >
                <input type="submit" value="Create"/>
            </form>
        </div>
    )
};

export default CreateForm;

