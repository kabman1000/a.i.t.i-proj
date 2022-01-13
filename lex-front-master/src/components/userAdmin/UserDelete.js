import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../SecureChannelComponents/Modal';
import history from '../history';
import { fetchUser, deleteUser } from '../../../src/store'
import axios from 'axios';

class UserDelete extends React.Component {
    

    componentDidMount(){
        
    }

    renderActions() {

        const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=> this.props.deleteUser(id)}className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this user?'
        }

        return `Are you sure you want to delete the user with the name: ${this.props.user.title} ?`
        
    }
    render() {
        return (
                <Modal
                    title="Delete Stream"
                    content={this.renderContent()}
                    actions={this.renderActions()}
                    onDismiss={() => history.push('/admin')}
                />
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return { user: state.users[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchUser, deleteUser})(UserDelete);