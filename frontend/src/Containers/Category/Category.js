import React, {Component, Fragment} from "react";
import {Link, withRouter, Route} from "react-router-dom";
import Instance from "../../Components/Instance/Instance";
import "./Category.css";
import {connect} from "react-redux";
import * as actions from "../../store/actions/links";

class Category extends Component {
    componentDidMount(){
        this.props.onItemsGet(this.props.kingdom);
    }

    componentDidUpdate(prevProps, prevState){
        const {kingdom, onItemsGet} = this.props;
        if(prevProps.kingdom !== kingdom) onItemsGet(kingdom);
    }
    
    render(){
        let links = null;
        const {linkItems, match, name} = this.props;
        
        if(linkItems && linkItems.length){
            links = linkItems.map((linkItem, index) => {
                let linkTo = linkItem.name.split(" ").map(word => `${word[0].toLowerCase()}${word.slice(1)}`).join("-");
                return (<Link to={`${match.url}/${linkTo}`} style={{textDecoration: "none"}} key={`${linkItem.name}${index}`}> 
                            <Instance background={linkItem.image}> {linkItem.name} </Instance> 
                        </Link>);
            });
        }
        
        return (
            <div className="Category">
                <h1> {name} </h1>
                <Route exact path={`${match.url}`} render={() => (
                    <Fragment>
                        {links}
                    </Fragment>
                )} />
                <Route path={`${match.url}/:instance`} render={() => (<h3> Hello World </h3>)} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
   linkItems: state.links.linkItems 
});

const mapDispatchToProps = dispatch => ({
    onItemsGet: kingdom => dispatch(actions.getItems(kingdom))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Category));