import React from "react";
import '@firebase/firestore';
import { FirestoreCollection } from 'react-firestore';
import { faTrash, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from '@firebase/app';
import RequestForm from './RequestForm.js';
import { Link } from 'react-router-dom'

var options = { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };

const applicationsStyle = {
    color: '#ff7272'
};

function removeRequest(e) {

    var id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");

    const db = firebase.firestore();

    db.collection("requests").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
}

function createDate(timeStamp) {
    try {
       var date = new Date(timeStamp.toDate()).toLocaleDateString("en-US", options);
       return date;
    } catch(e) {
        return '-';
    }

}

function showAddRequests() {
    document.getElementById("modal-view").style.display = "initial";
}

function RequestList() {
    
    return (
    <FirestoreCollection
        path={'requests'}
        render={({ data }) => {
            return (
                <div className="container-fluid">
                <RequestForm />
                    <h3>Requests</h3>
                    <h6>Live Requests</h6>
                    <button type="button" className="btn btn-primary new-request" onClick={showAddRequests}>
                        New Request +
                    </button>
                    <ul>
                        {data.map(request => (
                            <div key={request.id} data-id={request.id} className="card">
                                <div className="card-body">
                                    <FontAwesomeIcon icon={faTrash} className="sideTrashCan" onClick={removeRequest}/>
                                    <Link to="applications">
                                        <FontAwesomeIcon icon={faChevronRight} className="sideMoreInfo" />
                                    </Link>
                                    <div className="row">
                                        <div className="col-sm">
                                            <label>Donation Type</label>
                                            <div>{request.donationType}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Request Type</label>
                                            <div>{request.bloodType.join(', ')}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Date / Time</label>
                                            <div>{createDate(request.dateCreated)}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Application Count</label>
                                            <div style={applicationsStyle}>{request.applicationCount}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            );
        }}
    />
  )
}

export default RequestList;