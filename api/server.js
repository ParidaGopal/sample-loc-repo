const express = require('express');
const app = express();
app.use(express.json());

 
app.get('/api/test', (req,res)=> {
res.send("Node api is working ..");
});
 const ent = '{"app_name":"Grootbasket"}';

// http://localhost:3000/locales/en/translation.json
app.get('/api/locales/:ln',(req,res) =>{
    console.log(req.params.ln);
    res.send('{"app_name":"Grootbasket"}');
})


 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));