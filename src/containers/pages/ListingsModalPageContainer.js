import { connect } from "react-redux";
import { requestHome } from "../../actions/listingActions";
import {
  requestDetails,
  requestPreferences
} from "../../actions/listingActions";
import HomePage from "../../HomePage";

const mapDispatchToProps = dispatch => {
  return {
    requestDetails: () => {
      dispatch(requestDetails());
    }
  };
};

const mapStateToProps = state => {
  return {
    listings: state.listingsForm
  };
};

let ListingsModalPageContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListingsModalPageContainer
);
export default ListingsModalPageContainer;
