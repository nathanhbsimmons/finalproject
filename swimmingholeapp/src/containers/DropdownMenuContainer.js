import { handleDropdownSelectedChange } from '../actions';
import { connect } from 'react-redux';


function mapDispatchToProps(dispatch){
    return {
        handleDropdownSelectedChange:function(user){
        var action = handleDropdownSelectedChange(user);
        dispatch(action);
      },
      
    }
}
  
export default connect(null,mapDispatchToProps)(DropdownMenu);