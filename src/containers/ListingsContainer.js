import { connect } from "react-redux";
import search from "../actions/listingActions";
import ListingsTable from "../ListingsTable";
import { requestOpenModal, requestCloseModal } from "../actions/listingActions";

const mapDispatchToProps = dispatch => {
  return {
    requestOpenModal: () => {
      dispatch(requestOpenModal());
    },
    requestCloseModal: () => {
      dispatch(requestCloseModal());
    }
  };
};

function mapStateToProps(state) {
  return {
    listings: state.listingsForm,
    requests: state.requests
  };
}

let ListingsContainer = connect(mapStateToProps, mapDispatchToProps)(
  ListingsTable
);
export default ListingsContainer;
