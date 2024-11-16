function findSubsequence(s,p){
    // if(s.length < p.length) return null;
     let i = 0;
     let j = 0;
     const res = [];
     let prefix = '';
     while(i < s.length){
       if(i !== j) return prefix;
       if(s[i] === p[j]){
         
         prefix = prefix+p[j];
         res.push(prefix);
           j++;
     }
       i++;
     
   }
     return res;
     
   }
   
   findIndexSubsequence('Stegosauraus','Steam')
   
   <h1>ste<h1/>gos<h1>a<h1>uraus


// S = Stegosauraus, P = Steam
// [S, St, Ste, Stea]

function findSubsequence(s,p){
 // if(s.length < p.length) return null;
  let i = 0;
  let j = 0;
  const res = [];
  let prefix = '';
  while(i < s.length){
    if(s[i] === p[j]){
      
      prefix = prefix+p[j];
      res.push(prefix);
        j++;
  }
    i++;
  
}
  return res;
  
}

findSubsequence('booking', 'brokerize');

function findIndexSubsequence(s,p){
 // if(s.length < p.length) return null;

  let i = 0;
  let j = 0;
  const res = [];
  let prefix = [];
  while(i < s.length){
    if(s[i] === p[j]){
      prefix.push(i)
      res.push([...prefix]);
      j++;
  }
    i++;
  
}
  return res;
  
}

findIndexSubsequence('Stegosauraus','Steam')