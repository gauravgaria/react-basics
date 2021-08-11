import React from 'react'

/*  {{object:'value'}} in JSX, where first bracket tells its javascript code and second tells within it its an object(see comment 1). JSX then converts into javascript

    {buttonText} assigning variables and anything can be assigned like array, numbers etc
*/ 

function JsxBasics(){
    
    const buttonText = "Click me"                               //  String
    const number = 1020                                         //  Number
    const list = ['hello', 'gary', 'garia']                     //  Array
    const basicObject = {name:'Gaurav', age: 28}                // Objects accessed by (.)

    const style = {backgroundColor:'blue', color:'white'};      // comment 1

    return(
        <div>
            <label>Enter your name </label>
            <input type = {{text:'text', placeHolder:'First Name'}} />  
            <button style = {style}>{buttonText} {number}</button>
            <div>{list}</div>
            <div>
                <ul>
                    <li>{basicObject.name}</li>
                    <li>{basicObject.age}</li>
                </ul>
            </div>
        </div>
    );
 }

export default JsxBasics;