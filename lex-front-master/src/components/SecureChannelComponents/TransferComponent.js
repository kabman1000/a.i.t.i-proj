import React from 'react';
import Modal from './Modal';
import history from '../history';
import { Link } from 'react-router-dom';

class TransferComponent extends React.Component{
    renderActions() {
        return (
            <React.Fragment>
                <button>Send</button>
                <Link to='/secureChannel'><button> Cancel</button></Link>
            </React.Fragment>
        );
    }

    render(){
        return (
            <Modal 
                title="Transfer Money"
                content="Do you want to transfer amount to user1?"
                actions={this.renderActions()}
                onDismiss={()=> history.push('/secureChannel')}
            />
        );
    }
}

export default TransferComponent;