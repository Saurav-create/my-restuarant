import React, { Component } from 'react';
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/comments';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from 'react-redux';
import * as  actionType from '../../redux/actionType';


const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }

}

const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, rating, author, comment) =>  dispatch({
            type: actionType.ADD_COMMENT,
            payload : {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}


class Menu extends Component {


    state = {

        selectedDish: null,
        modalOpen: false
    }



    onDishSelect(dish) {
        // console.log(dish)
        this.setState({ selectedDish: dish,
            modalOpen: !this.state.modalOpen });

    }

    toggleModal=()=>{
        this.setState({
       modalOpen: !this.state.modalOpen
        })
    }






    render() {
        document.title = 'Menu';
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem dish={item} key={item.id} onDishSelect={() => this.onDishSelect(item)} />
            );
        })



        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment=>{
                return comment.dishId === this.state.selectedDish.id;
            })
            // console.log(comments);
            dishDetail = <DishDetail dish={this.state.selectedDish}
             comments={comments} 
             addComment={this.props.addComment}/>
        }




        return (
            <div className='container'>
                <div className='row'>
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                        <Button color='secondary' onClick={this.toggleModal}>
                                Close
                            </Button>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color='secondary' onClick={this.toggleModal}>
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu);