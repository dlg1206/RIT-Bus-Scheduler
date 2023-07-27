// 1. Get Bus Schedule - Schedules.html
// 3. Fastest way to a to b - planner
// Routes
import {reloadCache} from "./crawler.js";

function getAllSemesterNames(){
    let dropdown = document.getElementById("semester-dropdown");
    CACHE.semesters.forEach( (semester) => {
        let ptag = document.createElement('p');
        ptag.innerText = semester.name;
        dropdown.appendChild(ptag);
    });
}

function loadAllRoutes(cache) {
    let routeTable = document.getElementById("route-table");
    console.log(cache);
    cache.semesters[0].routes.forEach((route) => {
        // init new row
        let routeRow = document.createElement('tr');

        // Build Route Name column
        let routeNameCol = document.createElement('td');
        routeNameCol.className = "route-name";
        let routeNameLink = document.createElement('a');
        routeNameLink.href = route.source;
        routeNameLink.target = "_blank";
        routeNameLink.innerHTML = route.routeName;
        routeNameCol.appendChild(routeNameLink);

        // Build Route Status Column
        let routeStatusCol = document.createElement('td');
        routeStatusCol.className = "route-status";
        let statusWrapper = document.createElement('div');
        statusWrapper.className = "active"; // todo check if active or not
        statusWrapper.innerHTML = "Active";
        routeStatusCol.appendChild(statusWrapper);

        // Build Location column
        // todo determine if active or not
        // todo get correct times
        let routeLocationCol = document.createElement('td');
        routeLocationCol.className = "location";
        let departDiv = document.createElement('div');
        departDiv.innerHTML = "<p><b>Departed: </b>foobar (8:45pm)</p>";
        let arriveDiv = document.createElement('div');
        arriveDiv.innerHTML = "<p><b>Arriving at: </b>barfoo (10:00pm)</p>";
        routeLocationCol.appendChild(departDiv);
        routeLocationCol.appendChild(arriveDiv);

        // Append columns to row
        routeRow.appendChild(routeNameCol);
        routeRow.appendChild(routeStatusCol);
        routeRow.appendChild(routeLocationCol);

        // Append Row to table
        routeTable.appendChild(routeRow);
    });

}

// const CACHE = await reloadCache()
//     .then((cache) => {
//     console.log("Schedules Loaded");
//     console.log(cache);
//     loadAllRoutes(cache);
//     return cache;
// });
const CACHE = await reloadCache();
loadAllRoutes(CACHE);



