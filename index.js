import express =require('express');

const app = express();

app.use(express.json);

app.get('/bfhl', (req, res) => {
  res.send("testing");
});
app.post('/bfhl',(req,res)=>{
  const data=req.body.data;
  const oddnum=[];
  const evennum=[];
  const alpha=[];
  const email=null;
  const username=null;
  const rollnumber=null;
  for(let i=0;i<data.length;i++){
    if(typeof data[i]=='number'){
      if(data[i]%2==0){
        evennum.push(data[i]);
      }
      else{
        oddnum.push(data[i]);
      }
    }
    else if(typeof data[i]=='string'){
      if(data[i].split('_')!=null){
        username=data[i];
      }
      alpha.push(data[i]);
    }
    else if(typeof data[i]=='email'){
      email=data[i];
    }
    else{
      rollnumber=data[i];
    }
  }

  
  res.send({
    "is_success":true,
    "user_id":username,
    "email":email,
    "roll_number":rollnumber,
    "odd_numbers":oddnum,
    "even_numbers":evennum,
    "alphabets":alpha
  });
});


app.listen(3000, () => {
  console.log('Express server initialized');
});
// git remote add origin https://github.com/harshita1523/bajaj.git
// git branch -M main
// git push -u origin main
