import React from "react";
import '@firebase/firestore';
import { FirestoreCollection } from 'react-firestore';
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from '@firebase/app';

var options = { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };

function createDate(timeStamp) {
    try {
       var date = new Date(timeStamp.toDate()).toLocaleDateString("en-US", options);
       return date;
    } catch(e) {
        return '-';
    }

}

function removeRequest(e) {

    var id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id");

    const db = firebase.firestore();

    db.collection("applications").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
}

function ApplicationList() {
    
    return (
    <FirestoreCollection
        path={'applications'}
        render={({ data }) => {
            return (
                <div className="container-fluid">
                    <h3>Applications</h3>
                    <h6>Call: +1 (205) 402-8369</h6>
                    <ul>
                        {data.map(application => (
                            <div key={application.id} data-id={application.id} className="card">
                                <div className="card-body">
                                <FontAwesomeIcon icon={faTrash} className="sideTrashCan" onClick={removeRequest}/>
                                    <div className="row">
                                        <div className="col-sm">
                                            <label>Name</label>
                                            <div>{application.firstName}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Blood Type</label>
                                            <div>{application.bloodType}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Date / Time</label>
                                            <div>{createDate(application.dateCreated)}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Drive Time</label>
                                            <div>{application.drivingTime}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Call ID</label>
                                            <div>{application.callID}</div>
                                        </div>
                                        <div className="col-sm">
                                            <label>Warnings</label>
                                            <div>{application.warnings.replace(/,/g, ', ') + application.warnings.replace(/,/g, ', ')}</div>
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

export default ApplicationList;