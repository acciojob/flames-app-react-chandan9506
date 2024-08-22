import React,{useState} from 'react';


const Flames = () => {
    const [inputValue1,setInputValue1]=useState("");
    const [inputValue2,setInputValue2]=useState("");

    const [finalResult,setFinalResult] = useState("");

    const handleInputChange1 = (e) =>{
        setInputValue1(e.target.value);
    }

    const handleInputChange2 = (e) =>{
        setInputValue2(e.target.value);
    }

    const handleRelationship = ()=>{
        
        let arr1 = inputValue1.split("");
        let arr2 = inputValue2.split("");

        //console.log(arr1)
        //console.log(arr2)

       

        function frequncyMapOfArr(arr){
            const frequency = {};
            for(const item of arr){
                if(frequency[item]){
                    frequency[item]++;
                }
                else{
                    frequency[item]=1
                }
            }
            return frequency;
        }

        let result1 = frequncyMapOfArr(arr1);
        let result2 = frequncyMapOfArr(arr2);
       //console.log(result1);
       //console.log(result2);

        for(let item in result1){
            if(result2[item]){
                let  minCount = Math.min(result1[item],result2[item]);
                for(let i=0; i< minCount; i++){
                    arr1.splice(arr1.indexOf(item),1);
                    arr2.splice(arr2.indexOf(item),1);
                }
            }
        }

       //console.log(arr1)
       //console.log(arr2)

       let flamesArr = ["Siblings","Family","Love","Affection","Marriage","Enemy"];

       let flamesResult = (arr1.length + arr2.length)%6;

       
       setFinalResult(flamesArr[flamesResult])

       //console.log(finalResult);
       


    }


    return (

        <div>
            <input data-testid="input1" type="text" placeholder='Enter first name' value={inputValue1} onChange={handleInputChange1}/>
            <input data-testid="input2" type="text" placeholder='Enter second name' value={inputValue2} onChange={handleInputChange2}/>
            <button data-testid="calculate_relationship" onClick={handleRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={()=>{
                setInputValue1("");
                setInputValue2("");
            }}>Clear</button>

            {finalResult ? <h1>{finalResult}</h1>:""}


        </div>

        
    );
};

export default Flames ;