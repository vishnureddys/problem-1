import { getQueriesForElement } from '@testing-library/dom';
import React from 'react';
const ChildComponent = (props) => {
    return(
            <div style={{backgroundColor:"rgb("+props.r+","+ props.g+","+ props.b+")"}}>
                <h1 style={{color:"rgb("+props.r+","+ props.g+","+ props.b+")"}}> {props.r} {props.g} {props.b} </h1>
            </div>
          
    );
}
export default ChildComponent;

