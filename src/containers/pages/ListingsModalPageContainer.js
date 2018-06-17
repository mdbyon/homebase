import { connect } from "react-redux";
import { requestHome } from "../../actions/listingActions";
import { searchPhotos, requestCloseModal } from "../../actions/listingActions";
import HomePage from "../../HomePage";
import ListingsModalPage from "../../ListingsModalPage";

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: listing => {
      dispatch(searchPhotos(listing));
    },
    requestCloseModal: () => {
      dispatch(requestCloseModal());
    }
  };
};

const mapStateToProps = state => {
  return {
    listings: state.listingsForm,
    requests: state.requests
  };
};

let ListingsModalPageContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListingsModalPage
);

export default ListingsModalPageContainer;
