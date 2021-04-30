if (document.querySelectorAll(".darkreader")[0]){
    console.log("Darkreader Extension detected");
} else {
    DarkReader.setFetchMethod(window.fetch);
    DarkReader.enable({
         brightness: 100,
         contrast: 90,
         sepia: 10
    });
}
