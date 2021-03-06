import {useState} from 'react'

const Form = (props) => {
    const { boxArray, setBoxArray } = props;
    const [box, setBox] = useState({background: '#000', width: 0, height: 0 });
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray([...boxArray, box]);
        setBox({background: '#000', width: 0, height: 0 });
    };
    const handleChange = (e) => {
            setBox({...box,[e.target.name]: e.target.value });  
    };
    return ( 
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Color</label>
                <input type="color" name="background" value={box.background} onChange={handleChange} />
            </div>
            <div>
                <label>Width</label>
                <input type="number" name="width" value={box.width} onChange={handleChange} />
            </div>
            <div>
                <label>Height</label>
                <input type="number" name="height" value={box.height} onChange={handleChange} />
            </div>
            <button>Add</button>
        </form>
    );
};

export default Form;