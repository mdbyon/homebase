import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";

export default class ListingsModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  componentDidMount() {
    console.log("*****************");
    console.log(this.props.listing);
    this.props.getPhotos(this.props.listing);
  }

  render() {
    let existsPictures;
    console.log(this.props.listing);
    console.log(this.props.listings);

    var modalContent = this.props.listings.photos.map(photo => {
      return <div>Hi</div>;

      existsPictures =
        this.props.listings.photos != null ? (
          <div className="hero">
            <Modal open={true} onClose={console.log("CLOSE")} className="modal">
              {modalContent}
            </Modal>
          </div>
        ) : (
          <div />
        );
    });
    return <div className="listingsModal">{existsPictures} </div>;
  }
}
