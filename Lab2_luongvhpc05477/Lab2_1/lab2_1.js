let result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    
    let failureItems = arr.map((Items) => `<li class="text-warning">${Items}</li>`).join('\n')
   

    return console.log(failureItems);

}
let failuresList = makeList(result.failure);