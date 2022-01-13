import React, { Component } from 'react'
import Loader from '../Loader'
import ChannelComponent from './ChannelComponent'

export class SecureChannel extends Component {
    render() {
        return (
            <div style={{position: 'relative', border:'1px solid rgb(226, 226, 226)'}}>
                <Loader></Loader>
                <div>
                    <h3>Secure Channel</h3>
                    <ChannelComponent />
                </div>
                
                
            </div>
        )
    }
}

export default SecureChannel
