import React from 'react';
import {Label} from "./Label";

export const Input = props => (
    <div className="form-group">
        <Label className="form-control" {...props}/>
    </div>
);