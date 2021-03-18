static string gameOfStones(int n) {
    if(n == 1)
        return "Second";
    if(n < 6)
        return "First";

    bool[] p1Win = new bool[n+1];
    p1Win[0] = false;
    p1Win[1] = false;
    p1Win[2] = true;
    p1Win[3] = true;
    p1Win[4] = true;
    p1Win[5] = true;

    for (int i = 6; i <= n;i++)
    {
        //If one of the possible next moves makes p1 lose, it means that now p1 is winning
        if(!p1Win[i-2] || !p1Win[i-3] || !p1Win[i-5])
            p1Win[i] = true;
        else
            p1Win[i] = false;
    }
    
    if(p1Win[n])
        return "First";
    else
        return "Second";
}