function factorial(n)
{
    let finalVal=1;
    for(let i=n;i>1;i--)
    {
        finalVal*=i;
    }
    return finalVal;
}
factorial(4);