var connectBtn =document.getElementById('connectBtn');

if(window.ethereum){
    
    ethereum.request({method: "eth_requestAccounts" });
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    var MoodContractAddress ="0x2c67D9bb1E507e7D467169f718bA35B563cDE4eB";
    var MoodContractABI =[
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_mood",
                    "type": "string"
                }
            ],
            "name": "setMood",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMood",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    var MoodContract;
    var signer;

    provider.listAccounts().then(function(accounts) {
        signer = provider.getSigner(accounts[0]);
        MoodContract = new ethers.Contract(MoodContractAddress, MoodContractABI, signer);
    });


    var setBtn = document.getElementById('setmood');
    var getBtn = document.getElementById('getmood');
    
    setBtn.addEventListener('click', setMood);
    getBtn.addEventListener('click', getMood);

    async function getMood(){
        getMoodPromise = MoodContract.getMood();
        var Mood = await getMoodPromise;
        document.getElementById('mood-output').innerText= "Your Mood On the Smart Contract is: " + Mood;
        console.log(Mood);
        
    }

    async function setMood(){

        let Mood = document.getElementById("mood");
        setMoodPromise = MoodContract.setMood(Mood.value);
        await setMoodPromise;
        Mood.value='';
        
    }
    
    

    document.getElementById('web3-form').onclick=(e)=>{
        e.preventDefault();
    }
}
