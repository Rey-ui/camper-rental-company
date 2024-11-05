import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import css from "./BookCamperForm.module.css";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date()
    .required("Booking date is required")
    .min(new Date(), "Booking date must be in the future"),
  comment: Yup.string().max(600, "Too Long!"),
});
const initialValues = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};
const BookCamperForm = () => {
  const [dateValue, setDateValue] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const handleSubmit = (values, { resetForm }) => {
    toast.success("Success");
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={formSchema}
    >
      {({ setFieldValue }) => (
        <Form className={css.BookCamperFormContainer}>
          <div className={css.BookCamperFormHeader}>
            <h3 className={css.BookCamperFormTitle}>Book your campervan now</h3>
            <p className={css.BookCamperFormText}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className={css.BookCamperFormMain}>
            <label className={css.BookCamperFormLabel}>
              <Field
                className={css.BookCamperFormInput}
                type="text"
                name="name"
                placeholder="Name"
              />
              <ErrorMessage
                className={css.ErrorMessage}
                name="name"
                component="span"
              />
            </label>
            <label className={css.BookCamperFormLabel}>
              <Field
                className={css.BookCamperFormInput}
                type="email"
                name="email"
                placeholder="Email"
              />
              <ErrorMessage
                className={css.ErrorMessage}
                name="email"
                component="span"
              />
            </label>
            <label className={css.BookCamperFormLabel}>
              <Field
                className={css.BookCamperFormInputDate}
                value={dateValue}
                type="date"
                name="bookingDate"
                min={today}
                onChange={(e) => {
                  const newDate = e.target.value;
                  setDateValue(newDate);
                  setFieldValue("bookingDate", newDate);
                }}
                placeholder="Booking date"
              />
              <ErrorMessage
                className={css.ErrorMessage}
                name="bookingDate"
                component="span"
              />
            </label>
            <label className={css.BookCamperFormLabelTextarea}>
              <Field
                className={css.BookCamperFormInputTextarea}
                as="textarea"
                type="text"
                name="comment"
                placeholder="Comment"
              />
              <ErrorMessage name="comment" component="span" />
            </label>
          </div>

          <button className={css.BookCamperFormBtn} type="submit">
            Send
          </button>
          <Toaster />
        </Form>
      )}
    </Formik>
  );
};

export default BookCamperForm;
