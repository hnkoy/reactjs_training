import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
import {withFormik} from 'formik'; 
import * as Yup from 'yup';


class AddForm extends Component {
    
    /* handleValidation=(event)=>{
        event.preventDefault();
        this.props.validation(this.state.titleInput,this.state.authorInput,this.state.nbPagesInput);
        this.setState({
            titleInput:"",
            authorInput:"",
            nbPagesInput:""
        });

    } */
    render() {
        return (
            //put your component codes
            <>
                <h1 className='text-center text-primary' style={{ fontFamily: "sans-serif" }}>Book add Form</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                        name='titleInput'
                        type="text" 
                        className="form-control"
                         id="title"
                         value={this.props.values.titleInput}
                         onChange={this.props.handleChange}
                         onBlur={this.props.handleBlur}
                          />
                          {
                              this.props.touched.titleInput && this.props.errors.titleInput && 
                              <span style={{ color:'red' }}>{this.props.errors.titleInput}</span>
                              }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Author</label>
                        <input type="text"
                         className="form-control"
                         name='authorInput'
                         id="author"
                         value={this.props.values.authorInput}
                         onChange={this.props.handleChange}
                         onBlur={this.props.handleBlur}
                          />
                           {this.props.touched.authorInput && this.props.errors.authorInput && <span style={{ color:'red' }}>{this.props.errors.authorInput}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nbPages" className="form-label">Number of pages</label>
                        <input type="number"
                         className="form-control"
                         name='nbPagesInput'
                          id="nbPages"
                          value={this.props.values.nbPagesInput}
                         onChange={(event)=>this.props.setFieldValue('nbPagesInput',+event.target.value)}
                         onBlur={this.props.handleBlur}
                           />
                            {this.props.touched.nbPagesInput && this.props.errors.nbPagesInput && <span style={{ color:'red' }}>{this.props.errors.nbPagesInput}</span>}
                    </div>

                    <Button  btnStyle="btn-primary" Clic={this.props.handleSubmit}>Send</Button>
                </form>
            </>

        )
    }
}
export default withFormik({
    mapPropsToValues:()=>({
        titleInput:"",
        authorInput:"",
        nbPagesInput:""

    }),
    /* validate:values=>{
        const errors={};
        if(values.titleInput.length<3){
            errors.titleInput="the title must have more than 3 characters";
        }
        if(values.titleInput.length>15){
            errors.titleInput="the title must have less than 3 characters";  
        }
        if(!values.authorInput){
            errors.authorInput="the author must have characters";
        }
        return errors;

    }, */
    validationSchema:Yup.object().shape({
        titleInput:Yup.string()
        .min(3,'the title must have more than 3 characters')
        .max(15,'the title must have less than 15 characters')
        .required('the title is required'),
        authorInput:Yup.string()
        .min(3,'the author must have more than 3 characters')
        .required('the author is required'),
        nbPagesInput:Yup.number()
        .lessThan(1000,'number of pages must have less than 1000')
        .moreThan(50,'number of pages must have more than 50')
        .required('the number of pages is required')



    }),
    handleSubmit:(values,{props})=>{
        props.validation(values.titleInput,values.authorInput,values.nbPagesInput);

    }
})(AddForm);