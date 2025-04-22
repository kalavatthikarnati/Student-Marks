
   function calcy(){
    let maths = document.getElementById('maths').value;
    let eng = document.getElementById('eng').value;
    let phy = document.getElementById('phy').value;
    let soc = document.getElementById('soc').value;
    let sci = document.getElementById('sci').value;
    grade ="";
    
    let total = parseFloat(maths) + parseFloat(eng) + parseFloat(phy) + parseFloat(soc) + parseFloat(sci);
    alert(total);

     let Ave = (total/500) * 100;
     alert(Ave);

    if(Ave>=90)
{
    grade ='A+';
    
}

else if(Ave>=80 && Ave<=89)
    {
        grade= 'A';
    }
    else if(Ave>70 && Ave<=79)
        {
            grade = 'B';
        }
        else if(Ave>60 && Ave<=69)
            {
              grade = 'C'
            }
            else if(Ave>50 && Ave<=59)
                {
                   grade = 'D';
                }
                else if(Ave>=50)
                {
                    grade = 'F';
                }
               
          document.getElementById('showDate').innerHTML = `out of 500 your total is ${total} and avarege is ${Ave}%.<br> your grade is ${grade}.`    
            
         


}
