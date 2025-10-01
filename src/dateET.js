//function tellDateET(){
exports.tellDateET = function dateNowFormattedET() {
    const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai","juuni","juuli","august","september","oktoober","november","detsember"];
    const now = new Date();
    return now.getDate() + "." + monthNamesET[now.getMonth()] + " " + now.getFullYear();

}
