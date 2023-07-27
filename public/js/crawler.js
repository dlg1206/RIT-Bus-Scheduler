/**
 * File: crawler.js
 * Description: Scrapes the RIT Shuttle Website to get Shuttle Info
 *
 * @author Derek Garcia
 */

// Routes
const PROXY = 'https://api.allorigins.win/raw?url=';    // proxy to avoid 'Access-Control-Allow-Origin' on RIT Site
const ROOT = 'https://www.rit.edu';

// Regex Expressions
const REGEX = {
    "SHUTTLE": "<div class=\"view-content\">([\\s\\S]*?)<div class=\"field__item\">",
    "SEMESTER": "<div class=\"view-grouping\">([\\s\\S]*?)<\\/div>\\n<\\/div>\\n<\\/div>",
    "ROUTE": "<a href=\"(.*)\" .*\">(.*)<\\/a>",
    "STOP": "<th scope=\"col\">(.*?)<\\/th>",
    "TIME":"<td.*>(.*?)<\\/td>"
}


///
/// Utility Functions
///

/**
 * Applies Proxy Header and gets the HTML Code from the target url
 *
 * @param url target url
 * @returns HTML code as a String
 */
async function getHTMLString(url){
    // Fetch PROXY + target site
    let response = await fetch(PROXY + url)
        .then(  (response) => { return response; } )
        // Couldn't access site
        .catch( () => {
            console.warn("Failed to get resource at " + url);
            return null;
        })

    // Return null if no response
    if(response === null)
        return null;

    // Attempt to get HTML Text String
    return await response.text()
        .then(  (html) => { return html; } )
        // Couldn't get HTML
        .catch( () => {
            console.warn("Failed to get html at " + url);
            return null;
        })
}


/**
 * Converts 12 hour time to 24 hour time
 *
 * @param time12hr 12 hr time to convert
 * @returns {string} 24 hr time equivalent
 */
function parse12hrTime(time12hr){

    // Some Stops have layovers, default to departure time
    if(time12hr.toString().includes("/")){
        // console.warn(`Time "${time12hr}" has a waiting period, defaulting to departure time`);
        time12hr = time12hr.toString().split("/")[1];
    }

    // Parse 12 hr time
    const [time, modifier] = time12hr.split(' ');
    let [hours, minutes] = time.split(':');

    // Convert to 24hr time
    if (hours === '12' && modifier === 'am')
        hours = '00';
    if (modifier === 'pm')
        hours = parseInt(hours, 10) + 12;

    return `${hours}${minutes}`;
}

///
/// Regex HTML Parsing Functions
///

/**
 * Parses the Routes HTML Page using a callback function
 *
 * @param source source HTML
 * @param regex Regex to Use
 * @param callback Callback function to format response
 * @returns {*[]} a list of routes and their details
 */
function parseRoutes(source, regex, callback){
    let response = [];
    // For each regex match, apply callback
    source.match(new RegExp(regex, "g")).forEach(async (fullMatch) => {
        let match = fullMatch.match(new RegExp(regex));
        response.push(await callback(match));
    });
    return response;
}


/**
 * Reloads the Cached Bus Details
 *
 * @returns {Promise<{lastLoaded: number, semesters: *[]}>}
 */
export async function reloadCache() {
    // Reset Cache
    let cache = {
        'lastLoaded': Date.now(),
        'semesters': []
    };

    // 1. Get All data
    const shuttleHTML = await getHTMLString(ROOT + '/parking/campus-shuttles');

    // 2. Parse HTML and update Cache
    // Regex to isolate Shuttle Data
    const shuttleRegex = new RegExp(REGEX.SHUTTLE);
    const semesterRegex = new RegExp(REGEX.SEMESTER, "g");
    const semesters = shuttleHTML.match(shuttleRegex)[1].match(semesterRegex); // apply regex

    // Get All route info for each semester
    semesters.forEach( (semester) => {
        cache.semesters.push({
            'name': semester.match(new RegExp("<h3>(.*)<\\/h3>"))[1],
            // Get Route Info
            'routes': parseRoutes(semester, REGEX.ROUTE, async (match) => {
                let stops = [];
                let pngPath = null;
                // Attempt to get Route Info
                try {
                    let routeHTML = await getHTMLString(ROOT + match[1]);  // get the Route Page

                    // Get all the stops for the route
                    routeHTML.match(new RegExp(REGEX.STOP, "g")).forEach((match) => {
                        stops.push({
                            "stopName": match.match(new RegExp(REGEX.STOP))[1],
                            "times": []
                        });
                    });

                    // Get the corresponding times for each stop
                    const stopTimes = routeHTML.match(new RegExp(REGEX.TIME, "g"));
                    for( let i = 0; i < stopTimes.length; i++ ) {
                        stops[i % stops.length].times.push(
                            parse12hrTime(stopTimes[i].match(new RegExp(REGEX.TIME))[1])
                        );
                    }

                    // Get PNG image if available
                    pngPath = routeHTML.match(new RegExp("<a href=\"(.*?)\" type=\"image\\/png\">"));
                    if(pngPath !== null)
                        pngPath = pngPath[1];

                } catch (e) {
                    console.error("Failed to get Stop Details | " + e);
                }

                // New Semester Route
                return {
                    "routeName": match[2],
                    "source": ROOT + match[1],
                    "pngSource": (pngPath === null ? null : ROOT + pngPath),
                    "stops": stops
                };
            })
        });
    });

    return cache;
}


