async function API(jsonBody){
   // jsonBody.token = sessionStorage.getItem("X-TOKEN");
    const response = await fetch(
    'https://api.comgig.com/thailand',
    {
        method: 'POST',
        body: JSON.stringify(jsonBody),
        headers: {
            'Authorization': 'Bearer 491b5102f7dbe8b5c492f30fecaa7f4cd4fa005e088ba65f84b59f8c4842b291',
            'Content-type': 'application/json; charset=UTF-8',
        },
        credentials: 'include'
    })
    .catch((error) => {
        console.info('API Error:', error);
    })

    return await response.json()
  
}