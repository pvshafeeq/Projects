function findDigits(n) {
    // Write your code here
    let j=0;
    for(let i=0;i<n.toString().length;i++)
        {
            let num =parseInt(n.toString()[i]);
            if(n%num==0)
                {
                    j=j+1;
                }
        }
    console.log('j='+j);

}
findDigits(1012);