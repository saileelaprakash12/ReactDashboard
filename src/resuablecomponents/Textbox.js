import React from 'react'
const Textbox=({type,name,lbl,input,placeholder ,meta:{touched,error}})=>{
    return<div className="row form-group">
        <div className="col-sm-5 text-right">{lbl}:</div>
        <div className="col-sm-3">
        <input className="form-control" {...input} type={type} name={name} placeholder={placeholder}/>
        </div>
        <div className="col-sm-4 text-left">
{touched && error && <b className="text-danger">{error}</b>}
        </div>
    </div>
}
export default Textbox