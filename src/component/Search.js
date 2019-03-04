import React ,{Component} from 'react';
import './Search.css'
import { connect } from 'react-redux';
import { SearchedValue } from '../actions/action';



class Search extends Component{
render(){
return(
<div className="searchContainer">
    <input
     className="search" 
     placeholder="xSearch " 
     type="search"
    onChange={(e)=>this.props.SearchedValue(e.target.value)}
    >
     </input>
    </div>
)
    
}

}
const mapDispatchToProps = dispatch => {
    return {
      SearchedValue: (value) => {dispatch(SearchedValue(value))
        }
    }
  }
  const SearchBarContainer = 
    connect(null ,mapDispatchToProps)(Search)



export default SearchBarContainer;