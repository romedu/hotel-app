import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import TextInput from "../UI/Inputs/TextInput/TextInput";
import Button from "../UI/Button/Button";
import styles from "./AuthForm.module.css";

const AuthForm = props => {
    let type = props.match.params.type,
        fieldGroup = props[type],
        inputs = [];
    
    if(type !== "login" && type !== "register"){
        return <Redirect to={`/${type}`} />;
    }
    
    for(let field in fieldGroup){
        inputs.push(
            <TextInput key={`${field}1`} name={field} value={fieldGroup[field]} changeHandler={props.changeHandler} authType={type}/>
        );
    }
    
    return (   
        <div style={styles.AuthForm}> 
            <form onSubmit={(e) => props.submitHandler(e, type)}>
                {inputs}
                <Button bgColor="#2196c4" width="80vw" border="8px">
                  {type}
               </Button>
            </form>
        </div>
    );
};

export default withRouter(AuthForm);