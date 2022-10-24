function Print24(s)
{
    const arrT =s.split(":");
    let hr=arrT[0];
    let min =arrT[1];
    let sec=arrT[2].substr(0,2);
    let ampm=arrT[2].substr(arrT[2].length-2,2);

    if(hr=='12')
    {
        hr='00';
    }

    if(ampm=='PM')
    {
        hr=(12+Number(hr)).toString();
    }

    console.log(`${hr}:${min}:${sec}`);
}

Print24('12:05:45PM');