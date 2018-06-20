import App from "../App";
import { connect } from "react-redux";
import { fetchSites } from "../actions";

function mapDispatchToProps(dispatch) {
  return {
      fetchSites:function(){
      let action = fetchSites();
      dispatch(action);
      }
  };
}

const mapStateToProps = state => ({displaySite: state.displaySite})

export default connect(mapStateToProps,mapDispatchToProps)(App);
