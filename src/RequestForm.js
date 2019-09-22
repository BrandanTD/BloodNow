import React from 'react';
import firebase from '@firebase/app';

class RequestForm extends React.Component {

    constructor() {
        super();
        this.state = {
            donationType: "",
            requestType: "",
            estimatedDuration: ""
        };
    }

    updateInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        const userRef = db.collection("requests").add({
            locationID: "ksyFr1vplkWBQc6zWqPBHsQOVQ22",
            bloodType: ["A+"],
            donationType: this.state.donationType,
            estimatedDuration: this.state.estimatedDuration
        });
        this.setState({
            donationType: "",
            requestType: "",
            estimatedDuration: ""
        });
    };

    hideView = e => {
        if (e.target.id == 'modal-view') {
            e.target.style.display = "none";
        }
    }

    render() {
        return (
            <div id="modal-view" onClick={this.hideView}>
                <div className="model-hold">
                    <form onSubmit={this.addUser}>
                        <div className="form-row">
                            <label>Donation Type</label>
                            <input
                                type="text"
                                className="form-control"
                                name="donationType"
                                placeholder="Donation Type"
                                onChange={this.updateInput}
                                value={this.state.donationType}
                                required
                            />
                        </div>
                        <label>Request Type ( Select All That Apply )</label>
                        <div className="form-row checkbox-rows">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">A+</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">A-</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">B+</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">B-</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">AB+</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">AB-</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">O+</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label className="form-check-label">O-</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Estimated Duration ( Minutes )</label>
                            <input
                                type="number"
                                className="form-control"
                                name="estimatedDuration"
                                placeholder="60"
                                required
                            />
                        </div>

                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default RequestForm;