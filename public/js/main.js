// 1. Get Bus Schedule - Schedules.html
// 3. Fastest way to a to b - planner
import CACHE from "./Crawler.js";

function getAllSemesterNames(){
    let dropdown = document.getElementById("semester-dropdown");
    CACHE.semesters.forEach( (semester) => {
        let ptag = document.createElement('p');
        ptag.innerText = semester.name;
        dropdown.appendChild(ptag);
    });
}


