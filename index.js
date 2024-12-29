import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    console.log(result);
    res.render("index.ejs", { data: result });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {

  let type = req.body.type;
  let pat = req.body.participants;
  
  try{
    const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${pat}`)

    const result =  response.data;
      let newNum = Math.floor(Math.random() * result.length);
let finalResult = result[newNum];
console.log(finalResult);
    res.render("index.ejs",{data: finalResult});
  } catch (error){
    if(error.status == 404)
    {
       console.error("No activities that match your criteria.", error.message);
    }else {
        console.error("An unexpected error occurred.", error.message);
    }
     
      res.render("index.ejs",{
        error:error.message,
      });
    
  }
   
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
