import QueryString from "qs";
import React, { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { setProfile } from "../redux/reducers/auth/auth.actions";
import { PROFILE } from "../utils";
import apiServices from "../utils/api.services";

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children, props }) => {
  const [visible, setVisible] = useState(false);
  const [sidebarVisible, setSidbarVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [params, setParams] = useState({});
  const [locations, setlocations] = useState([]);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const showAdminDrawer = () => {
    setSidbarVisible(!sidebarVisible);
  };
  const onCloseAdminDrawer = () => {
    setSidbarVisible(false);
  };

  //   GET ITEMS FOR SIDEBAR

  const getItems = async () => {
    setLoading(true);
    await apiServices
      .get(PROFILE, QueryString.stringify(params))
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        // props.setProfile({
        //   ...props.state,
        //   profile: resp.data.data,
        //   id: resp.data.data.id,
        //   roles: resp.data.data.roles,
        // });
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

  console.log(items);

  return (
    <GlobalContext.Provider
      value={{
        showDrawer,
        onClose,
        visible,
        sidebarVisible,
        showAdminDrawer,
        onCloseAdminDrawer,
        items,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
