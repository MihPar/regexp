const arr = [
    "https://www.geeksforgeeks.org/",
    "http://localhost:8000",
    "https://www.geeksforgeeks.org/ABC.html",
];

function parseUrl(str) {
    const obj = {};
    let arr = str.split("//");
    obj.scheme = arr[0];
    arr = arr[1].split("/");
    if (arr[1] === "") {
        arr.pop();
    }
    if (arr.length === 2) {
        obj.path = arr[1];
    }
    arr = arr[0].split(":");
    obj.host = arr[0];
    if (arr.length === 2) {
        obj.port = arr[1];
    }
    return obj;
}
for (const str of arr) {
    console.log(parseUrl(str));
}
