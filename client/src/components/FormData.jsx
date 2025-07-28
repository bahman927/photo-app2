import React, { useState } from 'react';
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    photo: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    setFormData({ ...formData, photo: event.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('category', formData.category);
    data.append('photo', formData.photo);

    try {
      const response = await axios.post('http://localhost:3000/FormData', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleInputChange} required />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="email" onChange={handleInputChange} required />
      </div>
      <div>
        <label>Photo:</label>
        <input type="file" name="photo" onChange={handleFileChange} required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormData;





// import React, { useState } from "react";
// import axios from "axios";

// const PhotoForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     picture: "",
//     isActive: true,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, picture: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3001/photos", formData);
//       console.log("Photo created:", response.data);
//       setFormData({ name: "", category: "", picture: "", isActive: true });
//     } catch (error) {
//       console.error("Error creating photo:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Name:</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Picture:</label>
//         <input type="file" accept="image/*" onChange={handleFileChange} required />
//       </div>
//       <div>
//         <label>Is Active:</label>
//         <input
//           type="checkbox"
//           name="isActive"
//           checked={formData.isActive}
//           onChange={(e) =>
//             setFormData({ ...formData, isActive: e.target.checked })
//           }
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default PhotoForm;
