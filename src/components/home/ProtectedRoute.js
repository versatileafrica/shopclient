import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { useIonRouter } from "@ionic/react";



function ProtectedRoute({  component: Component , version: version, authuser: authuser,  ...rest }) {
  const router = useIonRouter();
  return (
    <Route
      {...rest}
      render={(props) => {
        if(version){
            if (authuser) {
              return <Component />;
            } else {
              return (
                // <Redirect to={{pathname: "/logt", state: {from: props.location} }} />
                window.location.href = "/parrainage"
                // router.push("/add")
              );
            }
        }else{
          window.location.href = "/version"
          // <Link  to="/version"/>
        }
      }}
    />
  );
}

export default ProtectedRoute;
