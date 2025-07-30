import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

function CreatePost() {

  const initialValues = {
    title: "",
    postText: "",
    username: ""
  }

  const validationSchema = Yup.object().shape({
    title:Yup.string,
    postText:Yup.string,
    username:Yup.string
  })
  return (
    <div className='CreatePostPage'> 
      <Formik initialValues={{}} onSubmit={() => {}} validationSchema={null}>
        <Form className="formContainer">
          <label>Title:</label>
          <Field
          id="inputCreatePost"
          name = "title"
          placeholder= "(Ex. title...)"
          />
          <label>Text:</label>
          <Field 
          id="inputCreatePost"
          name = "postText"
          placeholder= "(Ex. Post...)"
          />
          <label>Username:</label>
          <Field 
          id="inputCreatePost"
          name = "username"
          placeholder= "(Ex. John123...)"
          />

          <button type="submit">  Create Post</button>
        </Form>
      </Formik>
    </div>)
}


export default CreatePost;