
function submit(){
    console.log("hesgd");
    let url = 'http://localhost:5500/results.html?data=' + JSON.stringify(data);
    window.location = url;
}

