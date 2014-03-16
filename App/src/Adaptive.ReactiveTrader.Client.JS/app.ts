﻿/// <reference path="typings/signalr/signalr.d.ts" />
/// <reference path="typings/rx.js/rx.d.ts"/>
/// <reference path="Transport/Connection.ts" />

window.onload = () => {
    var el = document.getElementById('content');

    
    var connection = new Connection("http://localhost:8080", "Olivier");

    connection.status
        .subscribe(
            status => console.log("Connection status changed to " + status),
            ex => console.log(ex));

    connection
       .initialize()
       .subscribe(
            _ => console.log("Connected"),
            ex => console.log(ex));
};