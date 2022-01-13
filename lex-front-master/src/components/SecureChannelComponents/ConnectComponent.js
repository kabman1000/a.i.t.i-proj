import React from 'react';
import { Form, Field } from 'react-final-form'
import '../../styles/ConnectsComponent.css'
import '../../styles/App.css';

const ConnectComponent = () => {

    const renderError = ({ error, touched }) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    const renderInput = ({ input, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
            <div className={className}>
                <div style={{color:"red"}}>{renderError(meta)}</div>
                <input placeholder="Amount" type="number" className="inputPadding" {...input} autoComplete="off" />
            </div>
        )
    }

    const onSubmit = (formValues) => {
        console.log(formValues.amount)
    }

    return (
        <div id="boxx">
            <div id="connect">
                <div id="connect-header">
                    User is trying to connect
                </div>
                <div id="connect-content">
                    <button className="inputPadding" id="btn1">Accept</button>
                    <button className="inputPadding" >Decline</button>
                </div>
            </div>
            <br />
            <br />
            <div id="conns">
                <div id="connbox">
                    <div id="circ">

                    </div>
                </div>
                <div id="connbox">
                    <div id="circ">

                    </div>
                </div>
                <div id="field">
                    <Form
                        onSubmit={onSubmit}
                        validate={(formValues) => {
                            const errors = {};

                            if (!formValues.amount) {
                                errors.amount = "Enter a number"
                            }
                            return errors;

                        }}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <div id="box-1">

                                </div>
                                <div id="box-2">

                                </div>
                                <Field name="amount" component={renderInput} />
                                <button className="inputPadding" id="transfer">Transfer</button>
                            </form>
                        )}
                    />
                </div>

            </div>
        </div>
    )
}

export default ConnectComponent;