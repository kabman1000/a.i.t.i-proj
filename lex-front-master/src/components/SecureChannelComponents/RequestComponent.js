import React from 'react';
import "../../styles/ReqComp.css";
import '../../styles/ConnectsComponent.css';
import {Link} from 'react-router-dom'

class RequestComponent extends React.Component {
    render() {
        return (
            <div>
                <div id="req">
                    User Email
                    <input className="inputPadding" placeholder="User email"/>
                    <Link to='/security/transfer'><button id="btn5" className="inputPadding">Transfer</button></Link>
                </div>
                <div id="boxx">
                    <div id="cons">
                        <div id="connbox">
                            <div id="circ">

                            </div>
                        </div>
                        <div id="connbox">
                            <div id="circ">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RequestComponent;