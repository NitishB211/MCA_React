 /* Go to App.js to see next step 
 1)- Install formik and yup by wrtiting the following command in terminal: npm i formik yup
 2)- Now import useFormik from formik using command:  import {useFormik} from 'formik' to create a form
3)- Now import yup using command:  import * as Yup from 'yup'
4)- Now after creating a form we have to submit the form for which we have to send "POST" request
import axios from axios 
5)- To navigate to a desired page we use Navigate. So 
 import { useNavigate } from 'react-router-dom';

 */
/* Formik is used to make the form while Yup is used for adding the validation */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddPaidItem() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            Name: "",
            image: "",
            price: "",
            Description: "",
            size: ""
        },
        validationSchema: Yup.object({
            image: Yup.string().required("Please upload the image"),
            Name: Yup.string().min(5, 'Name should be at least 5 characters long').required("Please enter the name"),
            Description: Yup.string().required("Please enter the description"),
            price: Yup.number()
                .min(10, "Price should be at least 10")
                .max(9999, 'Price should not be more than 4 digits long')
                .required("Price is required"),
            size: Yup.string().required("Please enter the size")
        }),

        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const response = await axios.post("http://localhost:5001/items", values);
                console.log("Item added successfully:", response.data); // Debugging
                resetForm();
                navigate("/show-item");  // ✅ Navigating after successful response
            } catch (error) {
                console.error("Error adding item:", error);
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <div className="form-container">
            <h1>Add Paid Item</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input
                        id="Name"
                        name="Name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Name}
                    />
                    {formik.touched.Name && formik.errors.Name && (
                        <div className="error">{formik.errors.Name}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        id="image"
                        name="image"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.image}
                    />
                    {formik.touched.image && formik.errors.image && (
                        <div className="error">{formik.errors.image}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.price}
                    />
                    {formik.touched.price && formik.errors.price && (
                        <div className="error">{formik.errors.price}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="Description">Description:</label>
                    <textarea
                        id="Description"
                        name="Description"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Description}
                    />
                    {formik.touched.Description && formik.errors.Description && (
                        <div className="error">{formik.errors.Description}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="size">Size:</label>
                    <input
                        id="size"
                        name="size"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.size}
                    />
                    {formik.touched.size && formik.errors.size && (
                        <div className="error">{formik.errors.size}</div>
                    )}
                </div>

                <div>
                    <button type="submit" disabled={formik.isSubmitting}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddPaidItem;
