import React, { useState } from 'react'
const Flames = () => {
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [finalResult, setFinalResult] = useState("")


    const relationshipValues = [
        'Siblings', 
        'Friends',  
        'Love',     
        'Affection',
        'Marriage',
        'Enemy' 
      ];

    return (
        <div>
            <input name="name1" data-testid="input1" value={FirstName} type="text" placeholder='Enter First Name'
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input name="name2" data-testid="input2" value={SecondName} type="text" placeholder='Enter Second Name'
                onChange={(e) => setSecondName(e.target.value)}
            />
            <button data-testid="calculate_relationship" style={{ color: "lightblue" }}
                onClick={() => {
                    let result = "";
                    let arr1 = FirstName.split("");
                    let arr2 = SecondName.split("");
                    let length=arr1.length+arr2.length;

                    arr1.forEach(char => {
                        const index = arr2.indexOf(char);
                        if (index !== -1) {
                            char=''; 
                            arr2[index] = '';
                          length-=2;
                        }
                      });
                    result = relationshipValues[length % 6];

                    setFinalResult(result)
                }}
            >Calculate Reletionship Future</button>
            <button data-testid="clear" style={{ color: "lightblue" }}
                onClick={() => {
                    setFirstName("");
                    setSecondName("");
                    setFinalResult("");
                }}
            >Clear</button>

            <h3 data-testid="answer">{finalResult}</h3>
        </div>
    )
}

export default Flames