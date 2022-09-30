//login button event handelar
const loginBtn = document.getElementById('login')
    loginBtn.addEventListener('click',function(){
       const loginArea = document.getElementById('log-in-area')
       loginArea.style.display="none";
        const transactionArea = document.getElementById('transaction-area') 
        transactionArea.style.display = 'block'
    })
    
    
 //deposit busston event handelar
 
    const depositBtn = document.getElementById('adddeposit')
    depositBtn.addEventListener('click',function(){
        // console.log('shetu')
        const despositAmount = document.getElementById('depositAmount').value
        const depositNumber = parseFloat(despositAmount)
       if(depositNumber<0){
        alert(`Deposit Number can't to Nagative Number`)
       }
       else{
        document.getElementById('depositAmount').value=""
        spanUpdateText('curentDeposit',depositNumber);
        spanUpdateText('curenBalance' ,depositNumber);
       }
    
       
      
    })


        // Withdraw section event handelar

    const withdrawBtn = document.getElementById('addwithdraw')
    withdrawBtn.addEventListener('click',function(){
        const withdrawAmount= document.getElementById('withdrawAmount').value;
        const withdrawNumber = parseFloat(withdrawAmount)

        if(withdrawNumber < 0){
            alert(`Deposit Number can't to Nagative Number`)
        }
        else{
            document.getElementById('withdrawAmount').value="";
        spanUpdateText('curentWithdraw',withdrawNumber)
        spanUpdateText('curenBalance', -1 * withdrawNumber)
        }
        
       
    })


// multi handelar function deposit and withdraw

    function spanUpdateText(id, depositNumber,withdrawNumber){
        const current= document.getElementById(id).innerText;
        const currentNumber=parseFloat(current);
        const totalAmount=currentNumber+depositNumber;
        document.getElementById(id).innerText=totalAmount;
    }

    
    