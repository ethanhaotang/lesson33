const express = require("express");

const router = express.Router();

const sum = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result
};

const sum2=(n)=>{
  let result=0
  let number=Number(n)
  let arr = Array.from(Array(number).keys())
  for(let value of arr){
    result+=value
  }
  return result
}

router.get("/sum", (req, res) => {
  const number = req.query.number;
  console.log("number", number);
 const result= sum2(number)
  res.send({
    msg: "get succeed",
    data: `sum of 1-${number} is ${result}`,
  });
});
module.exports = router;
