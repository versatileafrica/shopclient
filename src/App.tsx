import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonRouterOutlet, IonSplitPane, IonTab, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Nouv from './pages/Nouvpage';
import Nouv2 from './pages/Nouv2';
import './App.css';
import 'animate.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { homeOutline, listOutline, cogOutline, cart, personOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { recupPan } from './Feature/PanierSlice';
import { recupProduct } from './Feature/ProductSlice';
import { IonButton, useIonLoading } from '@ionic/react';
import { decdateact, setcategories, setlike_list, recuplike_list, setnumberUser } from './Feature/DeclencheursSlice';

import Axios from "axios";
import ProtectedRoute from './components/home/ProtectedRoute';
import Nouv3 from './pages/Nouv3';
import Search from './components/home/Search';
import Parrainage from './components/home/Parrainage';
import Home from './pages/Home';





setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [present, dismiss] = useIonLoading();
  const [authuser, setauthuser] = useState(true);
  const [version, setversion] = useState(true);

  useEffect(() => {
    //  console.log(JSON.parse(localStorage.getItem("parrain") + "")[0].id);
    if (JSON.parse(localStorage.getItem("parrain") + "")) {
      //  let tab = JSON.parse(localStorage.getItem("parrain") + "")[0];
      setauthuser(true)
      getVersion()
      try {
        dispatch(recupPan(JSON.parse(localStorage.getItem('panier') + "")));
        dispatch(recuplike_list(JSON.parse(localStorage.getItem('like_list') + "")));
        dispatch(setnumberUser(JSON.parse(localStorage.getItem('numberUser') + "")));
        // dispatch(setaffiliate(JSON.parse(localStorage.getItem("parrain") + "")[0]));
        // dispatch(setnumberUser(JSON.parse(localStorage.getItem("numberUser") + "")[0]));
        Axios.post("https://backend-shop.benindigital.com/afficheart", {
          id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id
          // id_boutique: 8
        }).then((ret) => {
          dispatch(recupProduct(ret.data));
          console.log(ret.data);
        });
      } catch (e) { };
      try {
        fetch('https://backend-shop.benindigital.com/date_time').then((res) => {
          const data = res.json()
          return data
        }).then((data) => {
          dispatch(decdateact(data[0].time_actu));
        })
      } catch (e) { };

      Axios.post("https://backend-shop.benindigital.com/affichecategory", {
        // id_boutique: 8
        id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id
      }).then((ret) => {
        console.log(ret.data);
        dispatch(setcategories(ret.data));
      });

      present({
        message: 'Veuillez patienter',
        duration: 200
      })
      // window.setInterval(() => {
      //   Axios.post("https://backend-shop.benindigital.com/afficheart", {
      //     id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id
      //     // id_boutique: 8
      //   }).then((ret) => {
      //     dispatch(recupProduct(ret.data));
      //     console.log(ret.data);
      //   });
      // }, 2000);
    } else {
      setauthuser(false)
      if (window.location.pathname != "/parrainage") {
        window.location.href = "/parrainage";
      }
    }

  }, [])

  const getVersion = () => {
    Axios.get("https://backend-shop.benindigital.com/versionapp", {}).then(
      (response) => {
        if (response.data === "1.0.0") {
          console.log(response.data);
          setversion(true);
        } else {
          console.log(response.data);
          setversion(false);
        }
      }
    );
  };



  return (

    <IonApp >

      <IonReactRouter>

        {/* <Menu /> */}

        <IonRouterOutlet id="main" mode='ios' >
         

        <ProtectedRoute
            path="/home"
            component={Home}
            authuser={authuser}
            version={version}
          />
          <Route exact path="/tt">
            <Nouv3 />
          </Route>
          <Route exact path="/Search">
            <Search/>
          </Route>
          <Route path="/add">
            <Nouv />
          </Route>
          <Route path="/add2">
            <Nouv2 />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home/:id">
            <Home />
          </Route>
          <Route exact path="/home/articledesc/:id">
            <Home />
          </Route>
          <Route exact path="/home/categorie/:id">
            <Home />
          </Route>
          <Route exact path="/parrainage">
          < Parrainage />
          </Route>


        </IonRouterOutlet>
        {/* <IonTabBar slot='bottom' color='secondary'>
            <IonTabButton tab="tab1" href="/home">
              <IonIcon icon={homeOutline} />
            </IonTabButton>
            <IonTabButton tab="tab2" href="/panier" >
              <IonIcon icon={personOutline} />
            </IonTabButton>
            <IonTabButton tab="tab3" href="/tab3">
              <IonIcon icon={cogOutline} />
            </IonTabButton>
          </IonTabBar> */}


      </IonReactRouter>

    </IonApp>
  )

};

export default App;


