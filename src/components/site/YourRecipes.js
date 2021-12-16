function fetchResults() {

    // const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjM5NjAwMzYyLCJleHAiOjE2Mzk2ODY3NjJ9.ucJMAPECMQzjlRjG-38Hhhzd_wPrRrSGQ7n9-rFv90U'
    
    const token = localStorage.getItem('token')
    console.log("fetchResults() called")
    // event.preventDefault();
fetch('http://localhost:3000/recipe/mine', {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + token
        // "Authorization": "Bearer " + token
    })
})
.then(res => {
  return res.json()
})
// .then(data => console.log(data))
.then(data => {
    console.log("DATA");
    console.log(data)


})
}

const YourRecipes = () => {
    return(
        <div>
        
        <h1>YourRecipes stuff goes here</h1>
        
        <form>
            {/* <input type="text" id="searchName" name="searchName"></input> */}
            <input type="button" value="Submit" onClick={fetchResults}></input>
        </form>


        </div>
    );
};

export default YourRecipes;