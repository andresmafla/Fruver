import jwt from 'jsonwebtoken';

function verificarToken(req, res, next){
  const bearerHeader = req.headers['authorization'];
  if (!bearerHeader){
      return res.status(401).json("No autorizado");
  }

  const bearerToken = bearerHeader.split(" ")[1];
  jwt.verify(bearerToken, "SECRET", (err, response) => {
      if (err){
          return res.sendStatus(403);
      }else{
          res.locals = response;
          next();     
      }
  });
}

export {verificarToken};