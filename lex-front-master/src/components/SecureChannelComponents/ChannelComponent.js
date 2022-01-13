import React from 'react';
import '../../styles/ChannelComponents.css';
import ConnectComponent from './ConnectComponent';
import RequestComponent from './RequestComponent';

class ChannelComponent extends React.Component {

    state = {
        visible:true
    }

    renderTable() {
        return (
            <tr>
                <th onClick={() => this.setState({visible:true})}>Connect</th>
                <th onClick={() => this.setState({visible:false})}>Request</th>
            </tr>
        )
    }


    render() {
        return (
            <div>
                <table id="tabular">
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                </table>
                <div>
                    {this.state.visible ? <ConnectComponent /> : <RequestComponent />}
                </div>
            </div>
        )
    }
}

export default ChannelComponent;