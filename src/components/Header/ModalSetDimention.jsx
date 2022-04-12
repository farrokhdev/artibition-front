import React from "react";
import { Modal } from "antd";
import close_icon from "../../assets/img/clear.svg";
import { t } from "i18next";

function ModalSetDimention(props) {
  const {
    setVisibleSetDimentionModal,
    visibleSetDimentionModal,
    width_min,
    width_max,
    height_min,
    height_max,
    length_min,
    length_max,
    setWidth_min,
    setWidth_max,
    setHeight_min,
    setHeight_max,
    setLength_min,
    setLength_max,
    setFilters,
    filterSizes,
  } = props;

  const handleClose = () => {
    if (
      width_min ||
      width_max ||
      height_min ||
      height_max ||
      length_max ||
      length_min
    ) {
      setFilters((state) => ({
        ...state,
        width_min: width_min,
        width_max: width_max,
        height_min: height_min,
        height_max: height_max,
        length_min: length_min,
        length_max: length_max,
      }));
      setVisibleSetDimentionModal(false);
    } else {
      filterSizes();
      setVisibleSetDimentionModal(false);
    }
  };

  return (
    <React.Fragment>
      <Modal
        centered
        className="custom-dimention"
        visible={visibleSetDimentionModal}
        onOk={handleClose}
        onCancel={handleClose}
        width={800}
        footer={[]}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              {t("filter-header.size.dimention.select-custom-size.title")}
            </h5>
            <button>
              <span onClick={handleClose} aria-hidden="true" aria-label="Close">
                <img
                  className="btn-close-modal"
                  src={close_icon}
                  alt="close-icon"
                />
              </span>
            </button>
          </div>
          <div className="modal-body">
            <div className="custom-dimention">
              <div className="row row-inputs">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.min-width"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setWidth_min(e.target.value)}
                    />
                  </div>
                  <span className="unit-dimention">
                    {t("filter-header.size.dimention.select-custom-size.to")}
                  </span>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.max-width"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setWidth_max(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-inputs">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.min-length"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setLength_min(e.target.value)}
                    />
                  </div>
                  <span className="unit-dimention">
                    {t("filter-header.size.dimention.select-custom-size.to")}
                  </span>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.max-length"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setLength_max(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row row-inputs">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.min-height"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setHeight_min(e.target.value)}
                    />
                  </div>
                  <span className="unit-dimention">
                    {t("filter-header.size.dimention.select-custom-size.to")}
                  </span>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>
                      {t(
                        "filter-header.size.dimention.select-custom-size.max-length"
                      )}
                    </label>
                    <input
                      type="text"
                      className=" persian-num"
                      onChange={(e) => setHeight_max(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-black"
              onClick={() => handleClose()}
            >
              {t("filter-header.size.dimention.select-custom-size.submit")}
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default ModalSetDimention;
