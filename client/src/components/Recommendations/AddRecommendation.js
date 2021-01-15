import React, {Fragment} from 'react'
import { AddWrapper } from "../../styles/Recommendations";
import { Button, Form, InputBuilder } from "../../common/";

const AddRecommendation = ({toggle,toggleItems,title,handleChange,category,description,main_picture,setFormData, openWidget,mutationLoading}) => {
    return (
        <AddWrapper>
        <div className='top-container'>
          <h3 className='close-btn' onClick={toggle}>
            <i class='fas fa-times-circle'></i>
          </h3>
          <h2>New Recommendation</h2>
        </div>
  
        <Form>
          <InputBuilder
            type='text'
            name='title'
            placeholder='Title'
            value={title}
            setFormData={handleChange}
          />
          <InputBuilder
            type='text'
            name='category'
            placeholder='Category'
            value={category}
            setFormData={handleChange}
            textArea={false}
          />
          <InputBuilder
            name='description'
            id='description'
            placeholder='Description'
            value={description}
            textArea={true}
            setFormData={handleChange}
          ></InputBuilder>
  
          <Button
            center
            marg={"0"}
            size={"70%"}
            name="main_picture"
            backg={main_picture ? "rgba(146, 204, 194, 1)" : ""}
            onClick={e=>openWidget(e,setFormData)}
          >
            {main_picture ? "Upload Complete" : "Upload Photo"}
          </Button>
  
          <Button
            center
            size={"70%"}
            backg={"rgba(221, 114, 145, 1)"}
            shadowC={"#333"}
            onClick={toggleItems}
          >
            {mutationLoading ? "loading..." : "Next"}
          </Button>
        </Form>
      </AddWrapper>
    )
}

export default AddRecommendation
