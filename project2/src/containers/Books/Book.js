import React, { Component } from 'react';
import BookContent from './BookContent';
import AddForm from "./forms/AddForm";
import UpdateForm from './forms/UpdateForm';
import AlertMessage from '../../components/Alerts/AlertMessage';



class Book extends Component {
    state = {
        books: [
            { id: 1, title: "the Books of revelations", author: "Styve arvey", nbrPage: 100 },
            { id: 2, title: "the story of my life", author: "Clarence Larkin", nbrPage: 200 },
            { id: 3, title: "the revelations of CIA", author: "Styve arvey", nbrPage: 100 },
            { id: 4, title: "Art de la guerre", author: "Henock Nkoy", nbrPage: 50 },
        ],
        lastId: 4,
        idUpdate: 0,
        alertMessage: null
    }

    handleDelete = (id) => {
        const bookIndex = this.state.books.findIndex(l => {
            return l.id === id;
        })
        const newBooks = [...this.state.books];
        newBooks.splice(bookIndex, 1);
        this.setState(
            {
                books: newBooks,
                alertMessage: {message:'succefull delete',  type:'alert-danger'}

            });

    }
    handleAdd = (title, author, nbPages) => {
        const newBook = {
            id: this.state.lastId + 1,
            title: title,
            author: author,
            nbrPage: nbPages
        };

        const newTab = [...this.state.books];
        newTab.push(newBook);
        this.setState((oldstate) => {
            return {
                lastId: oldstate.lastId + 1,
                books: newTab,
                alertMessage: {message:'succefull add', type:'alert-success'}

            }
        })
        this.props.closeForm()
    }
    handleValidation = (id, title, author, nbpage) => {
        const bookIndex = this.state.books.findIndex(l => {
            return l.id === id;
        });
        const newBook = {
            id: id,
            title: title,
            author: author,
            nbrPage: nbpage
        };

        const newList = [...this.state.books];
        newList[bookIndex] = newBook;

        this.setState({
            books: newList,
            idUpdate: 0,
            alertMessage:{
                message:'succefull update',
                type:'alert-primary'

            } 

        })

    }
    render() {
        return (
            //put your component codes
            <>
                {this.state.alertMessage && <AlertMessage styleAlert={this.state.alertMessage.type}>{this.state.alertMessage.message}</AlertMessage>}
                <table className="table text-center">
                    <thead>
                        <tr className='table-dark'>

                            <th>Title</th>
                            <th >Athor</th>
                            <th>Pages Number</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map(book => {

                            if (book.id !== this.state.idUpdate) {
                                return (
                                    <tr key={book.id}>
                                        <BookContent
                                            title={book.title}
                                            author={book.author}
                                            nbrPage={book.nbrPage}
                                            delete={() => this.handleDelete(book.id)}
                                            update={() => this.setState({ idUpdate: book.id })}
                                        >

                                        </BookContent>

                                    </tr>
                                )
                            } else {
                                return <UpdateForm validation={this.handleValidation} key={book.id} id={book.id} title={book.title} author={book.author} nbPage={book.nbrPage}></UpdateForm>

                            }

                        })
                        }



                    </tbody>
                </table>
                {this.props.addBook && <AddForm validation={this.handleAdd} />}

            </>

        )
    }
}
export default Book;