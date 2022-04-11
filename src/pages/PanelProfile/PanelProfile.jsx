import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import HeaderPanel from "../../components/HeaderPanel/HeaderPanel";
import SidebarPanel from "../../components/SidebarPanel/SidebarPanel";
import PersonalInfo from "./PersonalInfo";
import Suggestions from "../Home.jsx/Suggestions";
import RecentlyVeiws from "../Home.jsx/RecentlyVeiws";
import BoxesInfo from "./BoxesInfo";
import BasketFooterPanel from "../../components/BasketFooterPanel/BasketFooterPanel";
import ModalEditProfile from "./ModalEditProfile";
import { PROFILE } from "../../utils";
import APIService from "../../utils/api.services";
import queryString from "query-string";
import ModalEditMobile from "./ModalEditMobile";
import { connect } from "react-redux";
import { setProfile } from "../../redux/reducers/auth/auth.actions";
import ModalEditEmail from "./ModalEditEmail";
import { useSelector } from "react-redux";
import ModalAddAddress from "./ModalAddAddress";

const Panelprofile = (props) => {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({});
  const [visibleEditMobile, setvisibleEditMobile] = useState(false);
  const [visibleEditEmail, setvisibleEditEmail] = useState(false);
  const [visibleAddAddress, setVisibleAddAddress] = useState(false);
  const [locations, setlocations] = useState([]);

  const { roles } = useSelector((state) => state.authReducer);
  const getUserRole = () => {
    let userRole = "user";
    if (typeof roles === "string") {
      return roles;
    } else {
      if (roles && roles.length > 0) {
        if (roles.includes("seller")) {
          userRole = "seller";
        }
        if (roles.includes("artist")) {
          userRole = "artist";
        }
      } else {
        userRole = "user";
      }
    }
    return userRole;
  };

  const getItems = () => {
    setLoading(true);
    APIService.get(PROFILE, queryString.stringify(params))
      .then((resp) => {
        setLoading(false);
        props.setProfile({
          ...props.state,
          profile: resp.data.data,
          id: resp.data.data.id,
          roles: resp.data.data.roles,
        });
        // console.log("items.resp==>", resp.data.data.locations.map((item) => {
        //     return { value: item?.id }

        // }));
        setItems(resp.data.data);
        setlocations(
          resp.data.data.locations.map((item) => {
            return { value: item?.id };
          })
        );
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  useEffect(() => {
    getItems();
  }, [params]);

  return (
    <>
      <HeaderPanel t={t} />

      <div className="panel-style margin-top-20">
        <SidebarPanel items={items} />
        <div className="custom-container " id="main">
          <BoxesInfo items={items} />
          <PersonalInfo
            profile={items}
            setvisibleEditMobile={setvisibleEditMobile}
            setvisibleEditEmail={setvisibleEditEmail}
            setVisibleAddAddress={setVisibleAddAddress}
          />
          <Suggestions />
          <RecentlyVeiws />
        </div>

        <BasketFooterPanel />
      </div>

      <ModalEditMobile
        items={items}
        getItems={getItems}
        setvisibleEditMobile={setvisibleEditMobile}
        visibleEditMobile={visibleEditMobile}
      />

      <ModalEditEmail
        items={items}
        getItems={getItems}
        setvisibleEditEmail={setvisibleEditEmail}
        visibleEditEmail={visibleEditEmail}
      />

      <ModalAddAddress
        locations={locations}
        profile={items}
        getItems={getItems}
        setVisibleAddAddress={setVisibleAddAddress}
        visibleAddAddress={visibleAddAddress}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProfile: (data) => dispatch(setProfile(data)),
  };
};

const mapStateToProps = (store) => {
  return {
    auth: store.authReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panelprofile);
