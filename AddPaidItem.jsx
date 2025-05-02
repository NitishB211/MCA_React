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
            Name: '',
            image: '',
            price: '',
            Description: '',
            size: ''
        },
        validationSchema: Yup.object({
            Name: Yup.string()
                .min(5, 'Name should be at least 5 characters long')
                .required('Please enter the name'),
            image: Yup.string().required('Please upload the image'),
            price: Yup.number()
                .min(10, 'Price should be at least 10')
                .max(9999, 'Price should not be more than 4 digits long')
                .required('Price is required'),
            Description: Yup.string().required('Please enter the description'),
            size: Yup.string().required('Please enter the size')
        }),
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const studentId = 1; // Hardcoded for now, replace with logged-in user's ID later
                const payload = { ...values, studentId };

                // ✅ Step 1: Add the new item
                await axios.post("http://localhost:5001/items", payload);

                // ✅ Step 2: Fetch current user data
                const userRes = await axios.get(`http://localhost:5001/users/${studentId}`);
                const user = userRes.data;

                // ✅ Step 3: Update SAP points and items listed
                await axios.patch(`http://localhost:5001/users/${studentId}`, {
                    sapPoints: (user.sapPoints || 0) + 10,        // +10 SAP for listing item
                    itemsListed: (user.itemsListed || 0) + 1
                });

                // ✅ Step 4: Reset form and navigate
                resetForm();
                navigate("/show-item");

            } catch (error) {
                console.error("Error adding item or updating SAP:", error);
                alert("Failed to add item. Please check the server.");
            } finally {
                setSubmitting(false);
            }
        }
    });

    return (
        <div className="form-container">
            <h1>Add Paid Item</h1>
            <form onSubmit={formik.handleSubmit}>
                {/* ... [form inputs remain unchanged] ... */}
                <div>
                    <label htmlFor="Name">Name:</label>
                    <input id="Name" name="Name" type="text" {...formik.getFieldProps("Name")} />
                    {formik.touched.Name && formik.errors.Name && <div className="error">{formik.errors.Name}</div>}
                </div>

                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input id="image" name="image" type="text" {...formik.getFieldProps("image")} />
                    {formik.touched.image && formik.errors.image && <div className="error">{formik.errors.image}</div>}
                </div>

                <div>
                    <label htmlFor="price">Price:</label>
                    <input id="price" name="price" type="number" {...formik.getFieldProps("price")} />
                    {formik.touched.price && formik.errors.price && <div className="error">{formik.errors.price}</div>}
                </div>

                <div>
                    <label htmlFor="Description">Description:</label>
                    <textarea id="Description" name="Description" {...formik.getFieldProps("Description")} />
                    {formik.touched.Description && formik.errors.Description && <div className="error">{formik.errors.Description}</div>}
                </div>

                <div>
                    <label htmlFor="size">Size:</label>
                    <input id="size" name="size" type="text" {...formik.getFieldProps("size")} />
                    {formik.touched.size && formik.errors.size && <div className="error">{formik.errors.size}</div>}
                </div>

                <div>
                    <button type="submit" disabled={formik.isSubmitting}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddPaidItem;
