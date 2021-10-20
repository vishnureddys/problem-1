import { getQueriesForElement } from '@testing-library/dom';
import 'primeflex/primeflex.css';
import './index.css';
import React from 'react';
const ChildComponent = (props) => {
    return(
            <div className="p-col-1" style={{backgroundColor:"rgb("+props.r+","+ props.g+","+ props.b+")"}} >
                <h4 className="text-inside"> D{props.d} - {props.r}, {props.g}, {props.b} </h4>
            </div>
          
    );
}
export default ChildComponent;
