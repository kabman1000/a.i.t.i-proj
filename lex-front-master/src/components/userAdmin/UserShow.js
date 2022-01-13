import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../../src/store';

class UserShow extends React.Component{

    componentDidMount(){
        const { id } = this.props.match.params;
        
        this.props.fetchUser(id);
        
        
    }

    render(){
        if(!this.props.user){
            return <div>Loading..</div>
        }

        const {title, description} = this.props.user;
        return (
            <div>
                <h2>{title}</h2>
                <h5>{description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) =>{
    return { user : state.users[ownProps.match.params.id]}
}


export default connect(mapStateToProps,{fetchUser})(UserShow);