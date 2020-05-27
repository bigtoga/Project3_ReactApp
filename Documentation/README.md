To run:
This app works together with Project3_FlaskApp. You need to clone both - 

* Step 1: clone both repos to separate locations on your hard drive
* Step 2: Get the Flask app going first:
    1. cd to the folder in a terminal
    2. `python app.py` will start the app
    3. Open your browser and browse to `http://localhost:5000` to see SwaggerUI page
* Step 3: Get React going 
    1. cd to the folder in a separate terminal
    2. `npm install -g serve`
    3. `npm run build`
    4. `serve -s build -l 3000`
    5. Open your browser and browse to `http://localhost:3000` 
    
Set up a proxy    


```
var proxyUrl = 'https://peaceful-sierra-66116.herokuapp.com/',
    targetUrl = 'http://localhost:5000/predict'

fetch(proxyUrl + targetUrl)
  .then(blob => blob.json())
  .then(data => {
    console.table(data);
    document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
    return data;
  })
  .catch(e => {
    console.log(e);
    return e;
  });
  ```