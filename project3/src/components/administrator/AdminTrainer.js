import React, {useState} from 'react'
import Request from '../../helpers/request'
import './administrator.css'



const AdminTrainer = ({administrator, trainers}) => {

    const [currentTrainer, setTrainer] = useState({
        image: "",
        name: "",
        brand: "",
        rating: 0,
        quantityAvailable: 10,
        price: 0
    })

    const handleChange = function(event){
        let propertyName = event.target.name;
        let input = {...currentTrainer}
        input[propertyName] = event.target.value;
        console.log(event.target.value)
        setTrainer(input);
    }


    const handleTrainerPost = function(trainer){
        const request = new Request();
        request.post("/trainers", trainer)
        .then(() => {
            window.location = "/administrators/admin"
        })
    }

    const handleSubmit = function(event){
        event.preventDefault();
        handleTrainerPost(currentTrainer)
        
    }

    // https://www.designerchildrenswear.com/images/dolce-gabbana-trainers-pink-p98435-177141_image.jpg


    return(
       <>
       <div className="admin-view">
            <form  className="add-a-trainer" onSubmit={handleSubmit}>
            <label className="login-label">Image</label>
                <input type="text" placeholder="Trainer Image" name="image" onChange = {handleChange} required value={currentTrainer.image}  autoComplete="off" />


                <label className="login-label">Name</label>
                <input type="text" placeholder="Trainer Name" name="name" onChange = {handleChange} required value={currentTrainer.name}  autoComplete="off" />

                <label className="login-label">Brand</label>
                <input type="text" placeholder="Trainer Brand" name="brand" onChange = {handleChange} required value={currentTrainer.brand}  autoComplete="off" />
            
                <label className="login-label">Rating</label>
                <input type="number" placeholder="Trainer Rating" name="rating" onChange = {handleChange} required value={currentTrainer.rating}  autoComplete="off" />

                {/* <label className="login-label">Quantity</label>
                <input type="number" placeholder="Trainer quantity" name="quantity Available" onChange = {handleChange} required value={currentTrainer.quantityAvailable}  autoComplete="off" /> */}

                <label className="login-label">Price</label>
                <input type="number" placeholder="Trainer Price" name="price" required onChange = {handleChange} value={currentTrainer.price}  autoComplete="off" />
            
                <button type="submit" className="add-trainer-button">Add Trainer</button>


            </form>
        </div>
       </>
    )

}

export default AdminTrainer