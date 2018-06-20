import {connect} from 'react-redux';
import SiteInfo from '../components/SiteInfo'

const mapStateToProps = state => ({ displaySite: state.displaySite })
       
export default connect(mapStateToProps)(SiteInfo);