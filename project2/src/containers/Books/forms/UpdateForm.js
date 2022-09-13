import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
class UpdateForm extends Component {
    state={
        title:"",
        author:"",
        nbPage:""
    }
    componentDidMount=()=>{
        this.setState({
            title:this.props.title,
            author:this.props.author,
            nbPage:this.props.nbPage

        })

    }
    handleValidation=()=>{
        //console.log('validation');
        this.props.validation(this.props.id,this.state.title,this.state.author,this.state.nbPage);
    }
    render() {
        return (
            //put your component codes

            <tr>
                <td>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={this.state.title}
                        onChange={(event) => this.setState({ title: event.target.value })}
                    />
                </td>
                <td>
                <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={this.state.author}
                        onChange={(event) => this.setState({ author: event.target.value })}
                    />
                </td>
                <td>
                <input
                        type="number"
                        className="form-control"
                        id="nbPage"
                        value={this.state.nbPage}
                        onChange={(event) => this.setState({ nbPage: event.target.value })}
                    />
                
                </td>
                <td> <Button btnStyle="btn-primary" Clic={this.handleValidation}>Validate</Button></td>

            </tr>
        )
    }
}
export default UpdateForm;