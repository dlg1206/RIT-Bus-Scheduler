// 1. Get Bus Schedule - Schedules.html
// 3. Fastest way to a to b - planner
// Routes
import CACHE from "./Crawler.js"

function getAllSemesterNames(){
    let dropdown = document.getElementById("semester-dropdown");
    CACHE.semesters.forEach( (semester) => {
        let ptag = document.createElement('p');
        ptag.innerText = semester.name;
        dropdown.appendChild(ptag);
    });
}

function loadAllRoutes() {
    let routeTable = document.getElementById("route-table");

    // console.assert(foo.length !== 0)
    CACHE2.semesters[0].routes.forEach((route) => {
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
const CACHE2 = {
    "lastLoaded": 1675225011358,
    "semesters": [
        {
            "name": "Spring 2023 Shuttle Schedule",
            "routes": [
                {
                    "routeName": "1 Off Campus Express",
                    "source": "https://www.rit.edu/parking/1-campus-express",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/1%20Off%20Campus%20Express%20Map.png",
                    "stops": [
                        {
                            "stopName": "Wegmans West",
                            "times": [
                                "700",
                                "730",
                                "800",
                                "830",
                                "900",
                                "930",
                                "1000",
                                "1030",
                                "1100",
                                "1130",
                                "2400",
                                "2430",
                                "1300",
                                "1330",
                                "1400",
                                "1430",
                                "1530",
                                "1600",
                                "1630",
                                "1700",
                                "1730",
                                "1800",
                                "1830",
                                "1900",
                                "1930",
                                "2000",
                                "2030",
                                "2100",
                                "2130",
                                "2200",
                                "2230",
                                "2300"
                            ]
                        },
                        {
                            "stopName": "Walmart West",
                            "times": [
                                "703",
                                "733",
                                "803",
                                "833",
                                "903",
                                "933",
                                "1003",
                                "1033",
                                "1103",
                                "1133",
                                "2403",
                                "2433",
                                "1303",
                                "1333",
                                "1403",
                                "1433",
                                "1533",
                                "1603",
                                "1633",
                                "1703",
                                "1733",
                                "1803",
                                "1833",
                                "1903",
                                "1933",
                                "2003",
                                "2033",
                                "2103",
                                "2133",
                                "2203",
                                "2233"
                            ]
                        },
                        {
                            "stopName": "Walmart East",
                            "times": [
                                "706",
                                "736",
                                "806",
                                "836",
                                "906",
                                "936",
                                "1006",
                                "1036",
                                "1106",
                                "1136",
                                "2406",
                                "2436",
                                "1306",
                                "1336",
                                "1406",
                                "1436",
                                "1536",
                                "1606",
                                "1636",
                                "1706",
                                "1736",
                                "1806",
                                "1836",
                                "1906",
                                "1936",
                                "2006",
                                "2036",
                                "2106",
                                "2136",
                                "2206",
                                "2236"
                            ]
                        },
                        {
                            "stopName": "Wegmans East",
                            "times": [
                                "709",
                                "739",
                                "809",
                                "839",
                                "909",
                                "939",
                                "1009",
                                "1039",
                                "1109",
                                "1139",
                                "2409",
                                "2439",
                                "1309",
                                "1339",
                                "1409",
                                "1439",
                                "1539",
                                "1609",
                                "1639",
                                "1709",
                                "1739",
                                "1809",
                                "1839",
                                "1909",
                                "1939",
                                "2009",
                                "2039",
                                "2109",
                                "2139",
                                "2209",
                                "2239"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "720",
                                "750",
                                "820",
                                "850",
                                "920",
                                "950",
                                "1020",
                                "1050",
                                "1120",
                                "1150",
                                "2420",
                                "2450",
                                "1320",
                                "1350",
                                "1420",
                                "320",
                                "1550",
                                "1620",
                                "1650",
                                "1720",
                                "1750",
                                "1820",
                                "1850",
                                "1920",
                                "1950",
                                "2020",
                                "2050",
                                "2120",
                                "2150",
                                "2220",
                                "2250"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "2 Apex",
                    "source": "https://www.rit.edu/parking/2-apex",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/2%20Apex%20Map.png",
                    "stops": [
                        {
                            "stopName": "Apex",
                            "times": [
                                "700",
                                "716",
                                "732",
                                "748",
                                "804",
                                "820",
                                "836",
                                "852",
                                "908",
                                "924",
                                "940",
                                "956",
                                "1012",
                                "1028",
                                "1044",
                                "1100",
                                "1116",
                                "1132",
                                "1148",
                                "2404",
                                "2420",
                                "2436",
                                "2452",
                                "1308",
                                "1324",
                                "1340",
                                "1356",
                                "1422",
                                "1438",
                                "1454",
                                "1510",
                                "1526",
                                "1542",
                                "1558",
                                "1614",
                                "1630",
                                "1646",
                                "1702",
                                "1718",
                                "1734",
                                "1750"
                            ]
                        },
                        {
                            "stopName": "B Lot",
                            "times": [
                                "702",
                                "718",
                                "734",
                                "750",
                                "806",
                                "822",
                                "838",
                                "854",
                                "910",
                                "926",
                                "942",
                                "958",
                                "1014",
                                "1030",
                                "1046",
                                "1102",
                                "1118",
                                "1134",
                                "1150",
                                "2406",
                                "2422",
                                "2438",
                                "2454",
                                "1310",
                                "1326",
                                "1342",
                                "1358",
                                "1424",
                                "1440",
                                "1456",
                                "1512",
                                "1528",
                                "1544",
                                "1600",
                                "1616",
                                "1632",
                                "1648",
                                "1704",
                                "1720",
                                "1736",
                                "1752"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "706",
                                "722",
                                "738",
                                "754",
                                "810",
                                "826",
                                "842",
                                "858",
                                "914",
                                "930",
                                "946",
                                "1002",
                                "1018",
                                "1034",
                                "1050",
                                "1106",
                                "1122",
                                "1138",
                                "1154",
                                "2410",
                                "2426",
                                "2442",
                                "2458",
                                "1314",
                                "1330",
                                "1346",
                                "1402",
                                "1428",
                                "1444",
                                "1500",
                                "1516",
                                "1532",
                                "1548",
                                "1604",
                                "1620",
                                "1636",
                                "1652",
                                "1708",
                                "1724",
                                "1740",
                                "1756"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "710",
                                "726",
                                "742",
                                "758",
                                "814",
                                "830",
                                "846",
                                "902",
                                "918",
                                "934",
                                "950",
                                "1006",
                                "1022",
                                "1038",
                                "1054",
                                "1110",
                                "1126",
                                "1142",
                                "1158",
                                "2414",
                                "2430",
                                "2446",
                                "1302",
                                "1318",
                                "1334",
                                "1350",
                                "undefined",
                                "1432",
                                "1448",
                                "1504",
                                "1520",
                                "1536",
                                "1552",
                                "1608",
                                "1624",
                                "1640",
                                "1656",
                                "1712",
                                "1728",
                                "1744",
                                "1800"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "3 Park Point - 175 Jefferson",
                    "source": "https://www.rit.edu/parking/3-park-point-175-jefferson",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/3%20Park%20Point%20175%20Jefferson%20Map.png",
                    "stops": [
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "700",
                                "722",
                                "744",
                                "806",
                                "828",
                                "850",
                                "912",
                                "934",
                                "956",
                                "1018",
                                "1040",
                                "1102",
                                "1124",
                                "1146",
                                "2408",
                                "2430",
                                "2452",
                                "1314",
                                "1336",
                                "1408",
                                "1430",
                                "1452",
                                "1514",
                                "1536",
                                "1558",
                                "1620",
                                "1642",
                                "1704",
                                "1726",
                                "1748"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "703",
                                "725",
                                "747",
                                "809",
                                "831",
                                "853",
                                "915",
                                "937",
                                "959",
                                "1021",
                                "1043",
                                "1105",
                                "1127",
                                "1149",
                                "2411",
                                "2433",
                                "2455",
                                "1317",
                                "1339",
                                "1411",
                                "1433",
                                "1455",
                                "1517",
                                "1539",
                                "1601",
                                "1623",
                                "1645",
                                "1707",
                                "1729",
                                "1751"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "704",
                                "726",
                                "748",
                                "810",
                                "832",
                                "854",
                                "916",
                                "938",
                                "1000",
                                "1022",
                                "1044",
                                "1106",
                                "1128",
                                "1150",
                                "2412",
                                "2434",
                                "2456",
                                "1318",
                                "1340",
                                "1412",
                                "1434",
                                "1456",
                                "1518",
                                "1540",
                                "1602",
                                "1624",
                                "1646",
                                "1708",
                                "1730",
                                "1752"
                            ]
                        },
                        {
                            "stopName": "Park Point South",
                            "times": [
                                "708",
                                "730",
                                "752",
                                "814",
                                "836",
                                "858",
                                "920",
                                "942",
                                "1004",
                                "1026",
                                "1048",
                                "1110",
                                "1132",
                                "1154",
                                "2416",
                                "2438",
                                "1300",
                                "1322",
                                "1344",
                                "1416",
                                "1438",
                                "1500",
                                "1522",
                                "1544",
                                "1606",
                                "1628",
                                "1650",
                                "1712",
                                "1734",
                                "1756"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "709",
                                "731",
                                "753",
                                "815",
                                "837",
                                "859",
                                "921",
                                "943",
                                "1005",
                                "1027",
                                "1049",
                                "1111",
                                "1133",
                                "1155",
                                "2417",
                                "2439",
                                "1301",
                                "1323",
                                "1345",
                                "1417",
                                "1439",
                                "1501",
                                "1523",
                                "1545",
                                "1607",
                                "1629",
                                "1651",
                                "1713",
                                "1735",
                                "1757"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "712",
                                "734",
                                "756",
                                "818",
                                "840",
                                "902",
                                "924",
                                "946",
                                "1008",
                                "1030",
                                "1052",
                                "1114",
                                "1136",
                                "1158",
                                "2420",
                                "2442",
                                "1304",
                                "1326",
                                "1348",
                                "1420",
                                "1442",
                                "1504",
                                "1526",
                                "1548",
                                "1610",
                                "1632",
                                "1654",
                                "1716",
                                "1738",
                                "1800"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "717",
                                "739",
                                "801",
                                "823",
                                "845",
                                "907",
                                "929",
                                "951",
                                "1013",
                                "1035",
                                "1057",
                                "1119",
                                "1141",
                                "2403",
                                "2425",
                                "2447",
                                "1309",
                                "1331",
                                "203",
                                "1425",
                                "1447",
                                "1509",
                                "1531",
                                "1553",
                                "1615",
                                "1637",
                                "1659",
                                "1721",
                                "1743",
                                "1805"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "4 Perkins Green",
                    "source": "https://www.rit.edu/parking/4-perkins-green",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/4%20Perkins%20Green%20Map.png",
                    "stops": [
                        {
                            "stopName": "Perkins Green",
                            "times": [
                                "700",
                                "717",
                                "734",
                                "751",
                                "808",
                                "825",
                                "842",
                                "859",
                                "916",
                                "933",
                                "950",
                                "1007",
                                "1024",
                                "1041",
                                "1058",
                                "1115",
                                "1132",
                                "1149",
                                "2406",
                                "2423",
                                "2440",
                                "2457",
                                "1314",
                                "1331",
                                "1348",
                                "1405",
                                "1432",
                                "1449",
                                "1506",
                                "1523",
                                "1540",
                                "1557",
                                "1614",
                                "1631",
                                "1648",
                                "1705",
                                "1722",
                                "1739",
                                "1756"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "701",
                                "718",
                                "735",
                                "752",
                                "809",
                                "826",
                                "843",
                                "900",
                                "917",
                                "934",
                                "951",
                                "1008",
                                "1025",
                                "1042",
                                "1059",
                                "1116",
                                "1133",
                                "1150",
                                "2407",
                                "2424",
                                "2441",
                                "2458",
                                "1315",
                                "1332",
                                "1349",
                                "1406",
                                "1433",
                                "1450",
                                "1507",
                                "1524",
                                "1541",
                                "1558",
                                "1615",
                                "1632",
                                "1649",
                                "1706",
                                "1723",
                                "1740",
                                "1757"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "705",
                                "722",
                                "739",
                                "756",
                                "813",
                                "830",
                                "847",
                                "904",
                                "921",
                                "938",
                                "955",
                                "1012",
                                "1029",
                                "1046",
                                "1103",
                                "1120",
                                "1137",
                                "1154",
                                "2411",
                                "2428",
                                "2445",
                                "1302",
                                "1319",
                                "1336",
                                "1353",
                                "1410",
                                "1437",
                                "1454",
                                "1511",
                                "1528",
                                "1545",
                                "1602",
                                "1619",
                                "1636",
                                "1653",
                                "1710",
                                "1727",
                                "1744",
                                "1801"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "711",
                                "728",
                                "745",
                                "802",
                                "819",
                                "836",
                                "853",
                                "910",
                                "927",
                                "944",
                                "1001",
                                "1018",
                                "1035",
                                "1052",
                                "1109",
                                "1126",
                                "1143",
                                "2400",
                                "2417",
                                "2434",
                                "2451",
                                "1308",
                                "1325",
                                "1342",
                                "1359",
                                "226",
                                "1443",
                                "1500",
                                "1517",
                                "1534",
                                "1551",
                                "1608",
                                "1625",
                                "1642",
                                "1659",
                                "1716",
                                "1733",
                                "1750",
                                "1807"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "9 Apex / The Province",
                    "source": "https://www.rit.edu/parking/9-apex-province",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/9%20Apex%20Province%20Map.png",
                    "stops": [
                        {
                            "stopName": "F Lot",
                            "times": [
                                "1805",
                                "1829",
                                "1853",
                                "1917",
                                "1941",
                                "2005"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "1809",
                                "1833",
                                "1857",
                                "1921",
                                "1945"
                            ]
                        },
                        {
                            "stopName": "The Province",
                            "times": [
                                "1814",
                                "1838",
                                "1902",
                                "1926",
                                "1950"
                            ]
                        },
                        {
                            "stopName": "Apex",
                            "times": [
                                "1818",
                                "1842",
                                "1906",
                                "1930",
                                "1954"
                            ]
                        },
                        {
                            "stopName": "B Lot",
                            "times": [
                                "1820",
                                "1844",
                                "1908",
                                "1932",
                                "1956"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "1823",
                                "1847",
                                "1911",
                                "1935",
                                "1959"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "10 175 Jefferson / Perkins / Park Point",
                    "source": "https://www.rit.edu/parking/10-175-jefferson-perkins-park-point",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/10%20175%20Jefferson%20Perkins%20Park%20Point%20Map.png",
                    "stops": [
                        {
                            "stopName": "F Lot",
                            "times": [
                                "1810",
                                "1839",
                                "1908",
                                "1937",
                                "2006"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "1814",
                                "1843",
                                "1912",
                                "1941"
                            ]
                        },
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "1816",
                                "1845",
                                "1914",
                                "1943"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "1819",
                                "1848",
                                "1917",
                                "1946"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "1820",
                                "1849",
                                "1918",
                                "1947"
                            ]
                        },
                        {
                            "stopName": "Park Point South",
                            "times": [
                                "1824",
                                "1853",
                                "1922",
                                "1951"
                            ]
                        },
                        {
                            "stopName": "Perkins Green",
                            "times": [
                                "1828",
                                "1857",
                                "1926",
                                "1955"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd",
                            "times": [
                                "1829",
                                "1858",
                                "1927",
                                "1956"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "1833",
                                "1902",
                                "1931",
                                "2000"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "5 The Province",
                    "source": "https://www.rit.edu/parking/5-province",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/5%20The%20Province%20Map.png",
                    "stops": [
                        {
                            "stopName": "The Province",
                            "times": [
                                "700",
                                "719",
                                "738",
                                "757",
                                "816",
                                "835",
                                "854",
                                "913",
                                "932",
                                "951",
                                "1010",
                                "1029",
                                "1048",
                                "1107",
                                "1126",
                                "1145",
                                "2404",
                                "2423",
                                "2442",
                                "1301",
                                "1320",
                                "1339",
                                "1358",
                                "1427",
                                "1446",
                                "1505",
                                "1524",
                                "1543",
                                "1602",
                                "1621",
                                "1640",
                                "1659",
                                "1718",
                                "1737",
                                "1756"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "704",
                                "723",
                                "742",
                                "801",
                                "820",
                                "839",
                                "858",
                                "917",
                                "936",
                                "955",
                                "1014",
                                "1033",
                                "1052",
                                "1111",
                                "1130",
                                "1149",
                                "2408",
                                "2427",
                                "2446",
                                "1305",
                                "1324",
                                "1343",
                                "1402",
                                "1431",
                                "1450",
                                "1509",
                                "1528",
                                "1547",
                                "1606",
                                "1625",
                                "1644",
                                "1703",
                                "1722",
                                "1741",
                                "1800"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "709",
                                "728",
                                "747",
                                "806",
                                "825",
                                "844",
                                "903",
                                "922",
                                "941",
                                "1000",
                                "1019",
                                "1038",
                                "1057",
                                "1116",
                                "1135",
                                "1154",
                                "2413",
                                "2432",
                                "2451",
                                "1310",
                                "1329",
                                "1348",
                                "217",
                                "1436",
                                "1455",
                                "1514",
                                "1533",
                                "1552",
                                "1611",
                                "1630",
                                "1649",
                                "1708",
                                "1727",
                                "1746",
                                "1805"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "6 175 Jefferson - Park Point - Province",
                    "source": "https://www.rit.edu/parking/6-175-jefferson-park-point-province",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/6%20175%20Jefferson%20Park%20Point%20Province%20Map.png",
                    "stops": [
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "720",
                                "742",
                                "804",
                                "826",
                                "848",
                                "910",
                                "932",
                                "954",
                                "1016",
                                "1038"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "723",
                                "745",
                                "807",
                                "829",
                                "851",
                                "913",
                                "935",
                                "957",
                                "1019",
                                "1041"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "724",
                                "746",
                                "808",
                                "830",
                                "852",
                                "914",
                                "936",
                                "958",
                                "1020",
                                "1042"
                            ]
                        },
                        {
                            "stopName": "The Province",
                            "times": [
                                "727",
                                "749",
                                "811",
                                "833",
                                "855",
                                "917",
                                "939",
                                "1001",
                                "1023",
                                "1045"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "729",
                                "751",
                                "813",
                                "835",
                                "857",
                                "919",
                                "941",
                                "1003",
                                "1025",
                                "1047"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "732",
                                "754",
                                "816",
                                "838",
                                "900",
                                "922",
                                "944",
                                "1006",
                                "1028",
                                "1050"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "737",
                                "759",
                                "821",
                                "843",
                                "905",
                                "927",
                                "949",
                                "1011",
                                "1033",
                                "1055"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "7 RIT Inn 1",
                    "source": "https://www.rit.edu/parking/7-rit-inn-1",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/7%20RIT%20Inn%201%20Map.png",
                    "stops": [
                        {
                            "stopName": "RIT Inn",
                            "times": [
                                "630",
                                "710",
                                "750",
                                "830",
                                "910",
                                "950",
                                "1030",
                                "1110",
                                "1150",
                                "2430",
                                "1310",
                                "1350",
                                "1430",
                                "1525",
                                "1605",
                                "1645",
                                "1725",
                                "1805",
                                "1845"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "645",
                                "725",
                                "805",
                                "845",
                                "925",
                                "1005",
                                "1045",
                                "1125",
                                "2405",
                                "2445",
                                "1325",
                                "1405",
                                "1445",
                                "1540",
                                "1620",
                                "1700",
                                "1740",
                                "1820"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "645",
                                "725",
                                "805",
                                "845",
                                "925",
                                "1005",
                                "1045",
                                "1125",
                                "2405",
                                "2445",
                                "1325",
                                "1405",
                                "1445",
                                "1540",
                                "1620",
                                "1700",
                                "1740",
                                "1820"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "647",
                                "727",
                                "807",
                                "847",
                                "927",
                                "1007",
                                "1047",
                                "1127",
                                "2407",
                                "2447",
                                "1327",
                                "1407",
                                "1447",
                                "1542",
                                "1622",
                                "1702",
                                "1742",
                                "1822"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "651",
                                "731",
                                "811",
                                "851",
                                "931",
                                "1011",
                                "1051",
                                "1131",
                                "2411",
                                "2451",
                                "1331",
                                "1411",
                                "306",
                                "1546",
                                "1626",
                                "1706",
                                "1746",
                                "1826"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "655",
                                "735",
                                "815",
                                "855",
                                "935",
                                "1015",
                                "1055",
                                "1135",
                                "2415",
                                "2455",
                                "1335",
                                "1415",
                                "1510",
                                "1550",
                                "1630",
                                "1710",
                                "1750",
                                "1830"
                            ]
                        },
                        {
                            "stopName": "Tech Park Dr",
                            "times": [
                                "700",
                                "740",
                                "820",
                                "900",
                                "940",
                                "1020",
                                "1100",
                                "1140",
                                "2420",
                                "1300",
                                "1340",
                                "1420",
                                "1515",
                                "1555",
                                "1635",
                                "1715",
                                "1755",
                                "1835"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "8 RIT Inn 2",
                    "source": "https://www.rit.edu/parking/8-rit-inn-2",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/8%20RIT%20Inn%202%20Map.png",
                    "stops": [
                        {
                            "stopName": "RIT Inn",
                            "times": [
                                "730",
                                "810",
                                "850",
                                "930",
                                "1010",
                                "1050",
                                "1130",
                                "2410",
                                "2450",
                                "1330",
                                "1410",
                                "1450",
                                "1545",
                                "1625",
                                "1705",
                                "1745",
                                "1825"
                            ]
                        },
                        {
                            "stopName": "Tech Park Dr",
                            "times": [
                                "740",
                                "820",
                                "900",
                                "940",
                                "1020",
                                "1100",
                                "1140",
                                "2420",
                                "1300",
                                "1340",
                                "1420",
                                "1500",
                                "1555",
                                "1635",
                                "1715",
                                "1755",
                                "1835"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd",
                            "times": [
                                "743",
                                "823",
                                "903",
                                "943",
                                "1023",
                                "1103",
                                "1143",
                                "2423",
                                "1303",
                                "1343",
                                "1423",
                                "1503",
                                "1558",
                                "1638",
                                "1718",
                                "1758",
                                "1838"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "746",
                                "826",
                                "906",
                                "946",
                                "1026",
                                "1106",
                                "1146",
                                "2426",
                                "1306",
                                "1346",
                                "1426",
                                "1506",
                                "1601",
                                "1641",
                                "1721",
                                "1801",
                                "1841"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "751",
                                "831",
                                "911",
                                "951",
                                "1031",
                                "1111",
                                "1151",
                                "2431",
                                "1311",
                                "1351",
                                "1431",
                                "326",
                                "1606",
                                "1646",
                                "1726",
                                "1806",
                                "1846"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "755",
                                "835",
                                "915",
                                "955",
                                "1035",
                                "1115",
                                "1155",
                                "2435",
                                "1315",
                                "1355",
                                "1435",
                                "1530",
                                "1610",
                                "1650",
                                "1730",
                                "1810"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "11 Campus Shuttle",
                    "source": "https://www.rit.edu/parking/11-campus-shuttle",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/11%20Campus%20Shuttle%20Map.png",
                    "stops": [
                        {
                            "stopName": "F Lot",
                            "times": [
                                "2015",
                                "2100",
                                "2145",
                                "2230",
                                "2315",
                                "0000",
                                "0045"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "2019",
                                "2104",
                                "2149",
                                "2234",
                                "2319",
                                "0004",
                                "0049"
                            ]
                        },
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "2021",
                                "2106",
                                "2151",
                                "2236",
                                "2321",
                                "0006",
                                "0051"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "2025",
                                "2110",
                                "2155",
                                "2240",
                                "2325",
                                "0010",
                                "0055"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "2026",
                                "2111",
                                "2156",
                                "2241",
                                "2326",
                                "0011",
                                "0056"
                            ]
                        },
                        {
                            "stopName": "Park Point South",
                            "times": [
                                "2030",
                                "2115",
                                "2200",
                                "2245",
                                "2330",
                                "0015",
                                "100"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "2031",
                                "2116",
                                "2201",
                                "2246",
                                "2331",
                                "0016",
                                "101"
                            ]
                        },
                        {
                            "stopName": "Perkins Green",
                            "times": [
                                "2033",
                                "2118",
                                "2203",
                                "2248",
                                "2333",
                                "0018",
                                "103"
                            ]
                        },
                        {
                            "stopName": "The Province",
                            "times": [
                                "2039",
                                "2124",
                                "2209",
                                "2254",
                                "2339",
                                "0024",
                                "109"
                            ]
                        },
                        {
                            "stopName": "Apex",
                            "times": [
                                "2043",
                                "2128",
                                "2213",
                                "2258",
                                "2343",
                                "0028",
                                "113"
                            ]
                        },
                        {
                            "stopName": "B Lot",
                            "times": [
                                "2045",
                                "2130",
                                "2215",
                                "2300",
                                "2345",
                                "0030",
                                "115"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "2049",
                                "2134",
                                "2219",
                                "2304",
                                "2349",
                                "0034",
                                "119"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "2054",
                                "2139",
                                "2224",
                                "2309",
                                "2354",
                                "0039"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "2054",
                                "2139",
                                "2224",
                                "2309",
                                "2354",
                                "0039"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "2056",
                                "2141",
                                "2226",
                                "2311",
                                "2356",
                                "0041"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "15 Evening RIT Inn",
                    "source": "https://www.rit.edu/parking/15-evening-rit-inn",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/15%20Evening%20RIT%20Inn%20Map.png",
                    "stops": [
                        {
                            "stopName": "RIT Inn",
                            "times": [
                                "1900",
                                "1945",
                                "2030",
                                "2115",
                                "2200",
                                "2245",
                                "2330",
                                "0015",
                                "100"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "1915",
                                "2000",
                                "2045",
                                "2130",
                                "2215",
                                "2300",
                                "2345",
                                "0030"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "1915",
                                "2000",
                                "2045",
                                "2130",
                                "2215",
                                "2300",
                                "2345",
                                "0030"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "1917",
                                "2002",
                                "2047",
                                "2132",
                                "2217",
                                "2302",
                                "2347",
                                "0032"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "1922",
                                "2007",
                                "2052",
                                "2137",
                                "2222",
                                "2307",
                                "2352",
                                "0037"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "1926",
                                "2011",
                                "2056",
                                "2141",
                                "2226",
                                "2311",
                                "2356",
                                "0041"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "1930",
                                "2015",
                                "2100",
                                "2145",
                                "2230",
                                "2315",
                                "0000",
                                "0045"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "12 Weekend Retail Shuttle",
                    "source": "https://www.rit.edu/parking/12-weekend-retail-shuttle",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/12%20Weekend%20Retail%20Map.png",
                    "stops": [
                        {
                            "stopName": "South Town Plaza",
                            "times": [
                                "715",
                                "815",
                                "915",
                                "1015",
                                "1115",
                                "2415",
                                "1315",
                                "1415",
                                "1515",
                                "1615",
                                "1715",
                                "1815",
                                "1915",
                                "2015",
                                "2115",
                                "2215"
                            ]
                        },
                        {
                            "stopName": "Marketplace Mall",
                            "times": [
                                "722",
                                "822",
                                "922",
                                "1022",
                                "1122",
                                "2422",
                                "1322",
                                "1422",
                                "1522",
                                "1622",
                                "1722",
                                "1822",
                                "1922",
                                "2022",
                                "2122",
                                "2222"
                            ]
                        },
                        {
                            "stopName": "Wegmans West",
                            "times": [
                                "727",
                                "827",
                                "927",
                                "1027",
                                "1127",
                                "2427",
                                "1327",
                                "1427",
                                "1527",
                                "1627",
                                "1727",
                                "1827",
                                "1927",
                                "2027",
                                "2127",
                                "2227"
                            ]
                        },
                        {
                            "stopName": "Target",
                            "times": [
                                "732",
                                "832",
                                "932",
                                "1032",
                                "1132",
                                "2432",
                                "1332",
                                "1432",
                                "1532",
                                "1632",
                                "1732",
                                "1832",
                                "1932",
                                "2032",
                                "2132",
                                "2232"
                            ]
                        },
                        {
                            "stopName": "Wal-Mart West",
                            "times": [
                                "737",
                                "837",
                                "937",
                                "1037",
                                "1137",
                                "2437",
                                "1337",
                                "1437",
                                "1537",
                                "1637",
                                "1737",
                                "1837",
                                "1937",
                                "2037",
                                "2137",
                                "2237"
                            ]
                        },
                        {
                            "stopName": "Wal-Mart East",
                            "times": [
                                "740",
                                "840",
                                "940",
                                "1040",
                                "1140",
                                "2440",
                                "1340",
                                "1440",
                                "1540",
                                "1640",
                                "1740",
                                "1840",
                                "1940",
                                "2040",
                                "2140",
                                "2240"
                            ]
                        },
                        {
                            "stopName": "Wegmans East",
                            "times": [
                                "745",
                                "845",
                                "945",
                                "1045",
                                "1145",
                                "2445",
                                "1345",
                                "1445",
                                "1545",
                                "1645",
                                "1745",
                                "1845",
                                "1945",
                                "2045",
                                "2145",
                                "2245"
                            ]
                        },
                        {
                            "stopName": "Jefferson Plaza",
                            "times": [
                                "747",
                                "847",
                                "947",
                                "1047",
                                "1147",
                                "2447",
                                "1347",
                                "1447",
                                "1547",
                                "1647",
                                "1747",
                                "1847",
                                "1947",
                                "2047",
                                "2147",
                                "2247"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "754",
                                "854",
                                "954",
                                "1054",
                                "1154",
                                "2454",
                                "1354",
                                "1454",
                                "1554",
                                "1654",
                                "1754",
                                "1854",
                                "1954",
                                "2054",
                                "2154",
                                "2254"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "800",
                                "900",
                                "1000",
                                "1100",
                                "2400",
                                "1300",
                                "1400",
                                "1500",
                                "1600",
                                "1700",
                                "1800",
                                "1900",
                                "2000",
                                "2100",
                                "2200",
                                "2300"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "800",
                                "900",
                                "1000",
                                "1100",
                                "2400",
                                "1300",
                                "1400",
                                "1500",
                                "1600",
                                "1700",
                                "1800",
                                "1900",
                                "2000",
                                "2100",
                                "2200",
                                "2300"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "806",
                                "906",
                                "1006",
                                "1106",
                                "2406",
                                "1306",
                                "1406",
                                "1506",
                                "1606",
                                "1706",
                                "1806",
                                "1906",
                                "2006",
                                "2106",
                                "2206",
                                "2306"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "13 Weekend Campus Shuttle",
                    "source": "https://www.rit.edu/parking/13-weekend-campus-shuttle",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/13%20Weekend%20Campus%20Shuttle%20Map.png",
                    "stops": [
                        {
                            "stopName": "F Lot",
                            "times": [
                                "700",
                                "745",
                                "830",
                                "915",
                                "1000",
                                "1045",
                                "1130",
                                "2415",
                                "1300",
                                "1345",
                                "1430",
                                "325",
                                "1610",
                                "1655",
                                "1740",
                                "1825",
                                "720",
                                "2005",
                                "2050",
                                "2135",
                                "2220",
                                "2305",
                                "2350",
                                "0035",
                                "120",
                                "121",
                                "205"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "704",
                                "749",
                                "834",
                                "919",
                                "1004",
                                "1049",
                                "1134",
                                "2419",
                                "1304",
                                "1349",
                                "1434",
                                "1529",
                                "1614",
                                "1659",
                                "1744",
                                "1829",
                                "1924",
                                "2009",
                                "2054",
                                "2139",
                                "2224",
                                "2309",
                                "2354",
                                "0039",
                                "124",
                                "124",
                                "209"
                            ]
                        },
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "706",
                                "751",
                                "836",
                                "921",
                                "1006",
                                "1051",
                                "1136",
                                "2421",
                                "1306",
                                "1351",
                                "1436",
                                "1531",
                                "1616",
                                "1701",
                                "1746",
                                "1831",
                                "1926",
                                "2011",
                                "2056",
                                "2141",
                                "2226",
                                "2311",
                                "2356",
                                "0041",
                                "126",
                                "126",
                                "211"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "710",
                                "755",
                                "840",
                                "925",
                                "1010",
                                "1055",
                                "1140",
                                "2425",
                                "1310",
                                "1355",
                                "1440",
                                "1535",
                                "1620",
                                "1705",
                                "1750",
                                "1835",
                                "1930",
                                "2015",
                                "2100",
                                "2145",
                                "2230",
                                "2315",
                                "0000",
                                "0045",
                                "130",
                                "130",
                                "215"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "711",
                                "756",
                                "841",
                                "926",
                                "1011",
                                "1056",
                                "1141",
                                "2426",
                                "1311",
                                "1356",
                                "1441",
                                "1536",
                                "1621",
                                "1706",
                                "1751",
                                "1836",
                                "1931",
                                "2016",
                                "2101",
                                "2146",
                                "2231",
                                "2316",
                                "0001",
                                "0046",
                                "131",
                                "131",
                                "216"
                            ]
                        },
                        {
                            "stopName": "Park Point South",
                            "times": [
                                "715",
                                "800",
                                "845",
                                "930",
                                "1015",
                                "1100",
                                "1145",
                                "2430",
                                "1315",
                                "1400",
                                "1445",
                                "1540",
                                "1625",
                                "1710",
                                "1755",
                                "1840",
                                "1935",
                                "2020",
                                "2105",
                                "2150",
                                "2235",
                                "2320",
                                "0005",
                                "0050",
                                "135",
                                "135",
                                "220"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "716",
                                "801",
                                "846",
                                "931",
                                "1016",
                                "1101",
                                "1146",
                                "2431",
                                "1316",
                                "1401",
                                "1446",
                                "1541",
                                "1626",
                                "1711",
                                "1756",
                                "1841",
                                "1936",
                                "2021",
                                "2106",
                                "2151",
                                "2236",
                                "2321",
                                "0006",
                                "0051",
                                "136",
                                "136",
                                "221"
                            ]
                        },
                        {
                            "stopName": "Perkins Green",
                            "times": [
                                "718",
                                "803",
                                "848",
                                "933",
                                "1018",
                                "1103",
                                "1148",
                                "2433",
                                "1318",
                                "1403",
                                "1448",
                                "1543",
                                "1628",
                                "1713",
                                "1758",
                                "1843",
                                "1938",
                                "2023",
                                "2108",
                                "2153",
                                "2238",
                                "2323",
                                "0008",
                                "0053",
                                "138",
                                "138",
                                "223"
                            ]
                        },
                        {
                            "stopName": "The Province",
                            "times": [
                                "724",
                                "809",
                                "854",
                                "939",
                                "1024",
                                "1109",
                                "1154",
                                "2439",
                                "1324",
                                "1409",
                                "1454",
                                "1549",
                                "1634",
                                "1719",
                                "1804",
                                "1849",
                                "1944",
                                "2029",
                                "2114",
                                "2159",
                                "2244",
                                "2329",
                                "0014",
                                "0059",
                                "144",
                                "144",
                                "229"
                            ]
                        },
                        {
                            "stopName": "Apex",
                            "times": [
                                "728",
                                "813",
                                "858",
                                "943",
                                "1028",
                                "1113",
                                "1158",
                                "2443",
                                "1328",
                                "1413",
                                "1458",
                                "1553",
                                "1638",
                                "1723",
                                "1808",
                                "1853",
                                "1948",
                                "2033",
                                "2118",
                                "2203",
                                "2248",
                                "2333",
                                "0018",
                                "103",
                                "148",
                                "148",
                                "233"
                            ]
                        },
                        {
                            "stopName": "B Lot",
                            "times": [
                                "730",
                                "815",
                                "900",
                                "945",
                                "1030",
                                "1115",
                                "2400",
                                "2445",
                                "1330",
                                "1415",
                                "1500",
                                "1555",
                                "1640",
                                "1725",
                                "1810",
                                "1855",
                                "1950",
                                "2035",
                                "2120",
                                "2205",
                                "2250",
                                "2335",
                                "0020",
                                "105",
                                "150",
                                "150",
                                "235"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "734",
                                "819",
                                "904",
                                "949",
                                "1034",
                                "1119",
                                "2404",
                                "2449",
                                "1334",
                                "1419",
                                "1504",
                                "1559",
                                "1644",
                                "1729",
                                "1814",
                                "1859",
                                "1954",
                                "2039",
                                "2124",
                                "2209",
                                "2254",
                                "2339",
                                "0024",
                                "109",
                                "154",
                                "154",
                                "239"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "739",
                                "824",
                                "909",
                                "954",
                                "1039",
                                "1124",
                                "2409",
                                "2454",
                                "1339",
                                "1424",
                                "1509",
                                "1604",
                                "1649",
                                "1734",
                                "1819",
                                "1904",
                                "1959",
                                "2044",
                                "2129",
                                "2214",
                                "2259",
                                "2344",
                                "0029",
                                "114",
                                ".undefined",
                                "159",
                                ".undefined"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "739",
                                "824",
                                "909",
                                "954",
                                "1039",
                                "1124",
                                "2409",
                                "2454",
                                "1339",
                                "1424",
                                "1509",
                                "1604",
                                "1649",
                                "1734",
                                "1819",
                                "1904",
                                "1959",
                                "2044",
                                "2129",
                                "2214",
                                "2259",
                                "2344",
                                "0029",
                                "114",
                                ".undefined",
                                "159",
                                ".undefined"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "741",
                                "826",
                                "911",
                                "956",
                                "1041",
                                "1126",
                                "2411",
                                "2456",
                                "1341",
                                "1426",
                                "1511",
                                "1606",
                                "1651",
                                "1736",
                                "1821",
                                "1906",
                                "2001",
                                "2046",
                                "2131",
                                "2216",
                                "2301",
                                "2346",
                                "0031",
                                "116",
                                ".undefined",
                                "201",
                                ".undefined"
                            ]
                        }
                    ]
                },
                {
                    "routeName": "14 Weekend RIT Inn",
                    "source": "https://www.rit.edu/parking/14-weekend-rit-inn",
                    "pngSource": "https://www.rit.edu/parking/sites/rit.edu.parking/files/2023-01/14%20Weekend%20RIT%20Inn%20Map.png",
                    "stops": [
                        {
                            "stopName": "RIT Inn",
                            "times": [
                                "700",
                                "745",
                                "830",
                                "915",
                                "1000",
                                "1045",
                                "1130",
                                "2415",
                                "1300",
                                "1345",
                                "1430",
                                "1535",
                                "1620",
                                "1705",
                                "1750",
                                "1855",
                                "1940",
                                "2025",
                                "2110",
                                "2155",
                                "2240",
                                "2325",
                                "0010",
                                "0055",
                                "140",
                                "141",
                                "225"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "715",
                                "800",
                                "845",
                                "930",
                                "1015",
                                "1100",
                                "1145",
                                "2430",
                                "1315",
                                "1400",
                                "1445",
                                "1550",
                                "1635",
                                "1720",
                                "1805",
                                "1910",
                                "1955",
                                "2040",
                                "2125",
                                "2210",
                                "2255",
                                "2340",
                                "0025",
                                "110",
                                ".undefined",
                                "155"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "715",
                                "800",
                                "845",
                                "930",
                                "1015",
                                "1100",
                                "1145",
                                "2430",
                                "1315",
                                "1400",
                                "1445",
                                "1550",
                                "1635",
                                "1720",
                                "1805",
                                "1910",
                                "1955",
                                "2040",
                                "2125",
                                "2210",
                                "2255",
                                "2340",
                                "0025",
                                "110",
                                ".undefined",
                                "155"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "717",
                                "802",
                                "847",
                                "932",
                                "1017",
                                "1102",
                                "1147",
                                "2432",
                                "1317",
                                "1402",
                                "1447",
                                "1552",
                                "1637",
                                "1722",
                                "1807",
                                "1912",
                                "1957",
                                "2042",
                                "2127",
                                "2212",
                                "2257",
                                "2342",
                                "0027",
                                "112",
                                ".undefined",
                                "157"
                            ]
                        },
                        {
                            "stopName": "F Lot",
                            "times": [
                                "722",
                                "807",
                                "852",
                                "937",
                                "1022",
                                "1107",
                                "1152",
                                "2437",
                                "1322",
                                "1407",
                                "312",
                                "1557",
                                "1642",
                                "1727",
                                "632",
                                "1917",
                                "2002",
                                "2047",
                                "2132",
                                "2217",
                                "2302",
                                "2347",
                                "0032",
                                "117",
                                ".undefined",
                                "202"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "726",
                                "811",
                                "856",
                                "941",
                                "1026",
                                "1111",
                                "1156",
                                "2441",
                                "1326",
                                "1411",
                                "1516",
                                "1601",
                                "1646",
                                "1731",
                                "1836",
                                "1921",
                                "2006",
                                "2051",
                                "2136",
                                "2221",
                                "2306",
                                "2351",
                                "0036",
                                "121",
                                ".undefined",
                                "206"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "730",
                                "815",
                                "900",
                                "945",
                                "1030",
                                "1115",
                                "2400",
                                "2445",
                                "1330",
                                "1415",
                                "1520",
                                "1605",
                                "1650",
                                "1735",
                                "1840",
                                "1925",
                                "2010",
                                "2055",
                                "2140",
                                "2225",
                                "2310",
                                "2355",
                                "0040",
                                "125",
                                ".undefined",
                                "210"
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": "16 Combined Campus and RIT Inn Shuttle",
            "routes": [
                {
                    "routeName": "16 Combined Campus &amp; Inn Shuttle",
                    "source": "https://www.rit.edu/parking/16-combined-campus-inn-shuttle",
                    "pngSource": "https://www.rit.edunull",
                    "stops": [
                        {
                            "stopName": "F Lot",
                            "times": [
                                "700",
                                "800",
                                "900",
                                "1000",
                                "1100",
                                "2400",
                                "1300",
                                "1400",
                                "310",
                                "1610",
                                "1710",
                                "1810",
                                "1910",
                                "2010",
                                "2110",
                                "2210",
                                "2310",
                                "0010",
                                "110",
                                "111",
                                "210"
                            ]
                        },
                        {
                            "stopName": "NTID",
                            "times": [
                                "706",
                                "806",
                                "906",
                                "1006",
                                "1106",
                                "2406",
                                "1306",
                                "1406",
                                "1516",
                                "1616",
                                "1716",
                                "1816",
                                "1916",
                                "2016",
                                "2116",
                                "2216",
                                "2316",
                                "0016",
                                "116",
                                "116",
                                "216"
                            ]
                        },
                        {
                            "stopName": "175 Jefferson",
                            "times": [
                                "708",
                                "808",
                                "908",
                                "1008",
                                "1108",
                                "2408",
                                "1308",
                                "1408",
                                "1518",
                                "1618",
                                "1718",
                                "1818",
                                "1918",
                                "2018",
                                "2118",
                                "2218",
                                "2318",
                                "0018",
                                "118",
                                "118",
                                "218"
                            ]
                        },
                        {
                            "stopName": "Park Point North",
                            "times": [
                                "711",
                                "811",
                                "911",
                                "1011",
                                "1111",
                                "2411",
                                "1311",
                                "1411",
                                "1521",
                                "1621",
                                "1721",
                                "1821",
                                "1921",
                                "2021",
                                "2121",
                                "2221",
                                "2321",
                                "0021",
                                "121",
                                "121",
                                "221"
                            ]
                        },
                        {
                            "stopName": "Park Point Retail",
                            "times": [
                                "712",
                                "812",
                                "912",
                                "1012",
                                "1112",
                                "2412",
                                "1312",
                                "1412",
                                "1522",
                                "1622",
                                "1722",
                                "1822",
                                "1922",
                                "2022",
                                "2122",
                                "2222",
                                "2322",
                                "0022",
                                "122",
                                "122",
                                "222"
                            ]
                        },
                        {
                            "stopName": "The Province",
                            "times": [
                                "715",
                                "815",
                                "915",
                                "1015",
                                "1115",
                                "2415",
                                "1315",
                                "1415",
                                "1525",
                                "1625",
                                "1725",
                                "1825",
                                "1925",
                                "2025",
                                "2125",
                                "2225",
                                "2325",
                                "0025",
                                "125",
                                "125",
                                "225"
                            ]
                        },
                        {
                            "stopName": "Perkins Green",
                            "times": [
                                "718",
                                "818",
                                "918",
                                "1018",
                                "1118",
                                "2418",
                                "1318",
                                "1418",
                                "1528",
                                "1628",
                                "1728",
                                "1828",
                                "1928",
                                "2028",
                                "2128",
                                "2228",
                                "2328",
                                "0028",
                                "128",
                                "128",
                                "228"
                            ]
                        },
                        {
                            "stopName": "Perkins Rd.",
                            "times": [
                                "719",
                                "819",
                                "919",
                                "1019",
                                "1119",
                                "2419",
                                "1319",
                                "1419",
                                "1529",
                                "1629",
                                "1729",
                                "1829",
                                "1929",
                                "2029",
                                "2129",
                                "2229",
                                "2329",
                                "0029",
                                "129",
                                "129",
                                "229"
                            ]
                        },
                        {
                            "stopName": "Residence Halls",
                            "times": [
                                "723",
                                "823",
                                "923",
                                "1023",
                                "1123",
                                "2423",
                                "1323",
                                "1423",
                                "1533",
                                "1633",
                                "1733",
                                "1833",
                                "1933",
                                "2033",
                                "2133",
                                "2233",
                                "2333",
                                "0033",
                                "133",
                                "133",
                                "233"
                            ]
                        },
                        {
                            "stopName": "Apex",
                            "times": [
                                "727",
                                "827",
                                "927",
                                "1027",
                                "1127",
                                "2427",
                                "1327",
                                "1427",
                                "1537",
                                "1637",
                                "1737",
                                "1837",
                                "1937",
                                "2037",
                                "2137",
                                "2237",
                                "2337",
                                "0037",
                                "137",
                                "137",
                                "237"
                            ]
                        },
                        {
                            "stopName": "RIT Inn",
                            "times": [
                                "738",
                                "838",
                                "938",
                                "1038",
                                "1138",
                                "2438",
                                "1338",
                                "1438",
                                "1548",
                                "1648",
                                "1748",
                                "1848",
                                "1948",
                                "2048",
                                "2148",
                                "2248",
                                "2348",
                                "0048",
                                "148",
                                "148",
                                "248"
                            ]
                        },
                        {
                            "stopName": "S Lot",
                            "times": [
                                "753",
                                "853",
                                "953",
                                "1053",
                                "1153",
                                "2453",
                                "1353",
                                "1453",
                                "1603",
                                "1703",
                                "1803",
                                "1903",
                                "2003",
                                "2103",
                                "2203",
                                "2303",
                                "0003",
                                "103",
                                ".undefined",
                                "203"
                            ]
                        },
                        {
                            "stopName": "Global Village",
                            "times": [
                                "753",
                                "853",
                                "953",
                                "1053",
                                "1153",
                                "2453",
                                "1353",
                                "1453",
                                "1603",
                                "1703",
                                "1803",
                                "1903",
                                "2003",
                                "2103",
                                "2203",
                                "2303",
                                "0003",
                                "103",
                                ".undefined",
                                "203"
                            ]
                        },
                        {
                            "stopName": "UC West",
                            "times": [
                                "755",
                                "855",
                                "955",
                                "1055",
                                "1155",
                                "2455",
                                "1355",
                                "1455",
                                "1605",
                                "1705",
                                "1805",
                                "1905",
                                "2005",
                                "2105",
                                "2205",
                                "2305",
                                "0005",
                                "105",
                                ".undefined",
                                "205"
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
loadAllRoutes();


