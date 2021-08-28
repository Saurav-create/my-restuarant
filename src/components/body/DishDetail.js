import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import CommentForm from './CommentForm';
import LoadComments from './LoadComments';
import { baseUrl } from '../../redux/baseUrl';


const DishDetail = props => {

    //  console.log(props);
    return (
        <div>
            <Card style={{ marginTop: '10px' }}>
                <CardImg top src={baseUrl + props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}
                    </CardText>
                    <CardText>
                        {props.dish.price} /-
                    </CardText>
                    <hr />
                    <LoadComments comments={props.comments}
                     commentsIsLoading={props.commentsIsLoading}></LoadComments>
                    <hr />


                </CardBody>

            </Card>
            <CommentForm dishId={props.dish.id} addComment={props.addComment}/>
        </div>
    );
}

export default DishDetail;