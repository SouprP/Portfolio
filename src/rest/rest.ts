const REST_API = ""

function getBlogs(){
    let response = fetch(REST_API + "blogs")
        .then(response => {
            return response.json();
        }).catch(error => {
            console.log(error);
        })
}