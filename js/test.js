function dbTest(){
    let test = new XMLHttpRequest();
    test.open('get', "test",true);
    test.onload = function thing() {
        console.log(test.responseText);
    }
    test.send();
}