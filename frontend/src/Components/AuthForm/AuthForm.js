import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import TextInput from "../UI/Inputs/TextInput/TextInput";
import Button from "../UI/Button/Button";

const AuthForm = props => {
    let type = props.match.params.type,
        fieldGroup = props[type],
        inputs = [],
        formStyle = {
            width: "100vw",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "6vh"
        };
    
    if(type !== "login" && type !== "register"){
        return <Redirect to={`/${type}`} />;
    }
    
    for(let field in fieldGroup){
        inputs.push(
            <TextInput key={`${field}1`} name={field} value={fieldGroup[field]} changeHandler={props.changeHandler} authType={type}/>
        );
    }
    
    return (   
        <div style={{display: "flex", justifyContent: "center"}}> 
            <form onSubmit={(e) => props.submitHandler(e, type)} style={formStyle}>
                {inputs}
                <Button bgColor="#2196c4" width="80vw" border="8px"> {type} </Button>
                <div style={{color: "#e8b358", fontStyle: "italic", textDecoration: "none", paddingTop: "1vh"}} 
                onClick={() => props.authenticate("login", {username: "guest", password: "none"})}>
                    Log in as Guest 
                </div>
            </form>
        </div>
    );
};

export default withRouter(AuthForm);