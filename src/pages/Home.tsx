import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonicSlides, IonBadge, IonCardSubtitle, IonFab, IonFabButton, IonFabList, IonRefresher, IonRefresherContent, IonModal, IonLoading, IonBackButton, IonItem, IonLabel, IonNote } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { useEffect,  useState } from "react";
import './Home.css'
import styles from "./Home.module.css";
import { analytics, cart, chevronBack, chevronUpCircle, chevronUpCircleOutline, closeCircleOutline, globeOutline, heart, home, homeOutline, logoFacebook, logoInstagram, logoTwitter, logoVimeo, share } from 'ionicons/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RefresherEventDetail } from '@ionic/core';
import { arrowBack, personAdd, personCircleOutline, personCircleSharp } from 'ionicons/icons';

import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';
import { useSelector, useDispatch } from 'react-redux';
import { Homes } from '../components/home/Homes';
import Paniermodal from '../components/home/Paniermodal';
// import { deleteProduct, setProductPan, updateQuantity, dec, vider, declien, deccont } from '../Feature/PanierSlice';

function doRefresh(event: Event | React.SetStateAction<any>) {
  console.log('Begin async operation');
  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}



const ajoutmed = () => {
  { window.location.href = "/ajoutmed" }
}
const listepat = () => {
  { window.location.href = "/listepat" }
}
const listemed = () => {
  { window.location.href = "/listemed" }
}
const RDV = () => {
  { window.location.href = "/rdv" }
}
export const RDVV = (ide: number | React.SetStateAction<any>) => {
  return ide;
}

const Homecom: React.FC = () => {


  const [showmodal, setShowmodal] = useState(false);
  const [showmodal2, setShowmodal2] = useState(false);
  // const modal = useRef<HTMLIonModalElement>(null);
  // const [getab, setGettab] = useState<any>(tab4);
  const [sho, setSho] = useState<any>(false);
  // let [panier, setPanier] = useState<any[]>(useSelector((state:any) => state.panier.panier));
  // const [cont, setCont] = useState<any>((window.location.pathname.split("/")[2]));
  // const [lien, setLien] = useState<any>((window.location.pathname.split("/")[3]));
  // const [trigger, setTrigger] = useState<any>(useSelector((state:any) => state.panier.trigg))
  let panier = useSelector((state: any) => state.panier.panier);
  let cont = useSelector((state: any) => state.panier.cont);
  const dispatch = useDispatch();
  let trigger = useSelector((state: any) => state.triggers.triggermod);
  const [patient, setPatientlist] = useState<any[]>([]);
  const [showLoading, setShowLoading] = useState(false);
  let lien = useSelector((state: any) => state.panier.lien);
  const router = useIonRouter();



  const ionRouter = useIonRouter();
  document.addEventListener('ionBackButton', (ev: any) => {
    ev.detail.register(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  });

  const getpan = () => {
    fetch('https://backend-shop.benindigital.com/affichepanier').then((res) => {
      const data = res.json()
      return data
    }).then((data) => {
    })
  }

  document.getElementById('far')?.addEventListener('touchmove', (e) => {
    document.getElementById('far')!.style.left = (e.changedTouches[0].clientX - 25) / window.innerWidth * 100 + '%';
    document.getElementById('far')!.style.top = (e.changedTouches[0].clientY - 25) / window.innerHeight * 100 + '%'
  })



  const relance = () => {
  }


  useEffect(() => {
    console.log(trigger);
    setShowmodal(false);
  }, [trigger]);

  useEffect(() => {

   // getpan();

  }, []);

  return (
    <IonPage>
      <IonHeader  mode='ios' >
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonButton onClick={() => router.goBack()}>
              <IonIcon color='medium' icon={chevronBack} />
            </IonButton>
          </IonButtons> */}
          <IonTitle className='nereide' >Digital trader</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className='alice'  >
        <Homes
          Panier={panier} />
        <IonFab vertical="center" horizontal="center" slot="fixed" className='fab1' id='far' >
          <IonButton mode='ios' color='secondary' onClick={() => {
            setShowmodal(true);
          }
          } size='small'  >
            <IonBadge color="secondary"  >{panier.length}</IonBadge>
            <IonIcon icon={cart} className="animate__animated" />
            Commande
          </IonButton>
        </IonFab>


        <IonModal isOpen={showmodal} onDidDismiss={() => { setShowmodal(false) }}
          backdropBreakpoint={0.5}
          className='modal1'>
          <IonItem lines='none'>
            <IonToolbar className='ion-text-center Titre1 '   >
              Panier
              <IonIcon icon={closeCircleOutline} size='large' slot='end' className='iconmod'
                onClick={() => { setShowmodal(false); }} />
            </IonToolbar>
          </IonItem>
          <Paniermodal Panier={panier} trigg={() => { setSho(!sho) }} />
        </IonModal>


        {/* <IonModal
          // ref={modal}
          trigger="open-modal"
          isOpen={showmodal}
          initialBreakpoint={0.25}
          breakpoints={[0.25, 0.5, 0.75]}
          backdropDismiss={false}
          backdropBreakpoint={0.5}
        >
          <IonContent className="ion-padding">
            <IonItem>
              <IonToolbar className='ion-text-center Titre1 '   >
                Panier
                <IonIcon icon={closeCircleOutline} size='large' slot='end' className='iconmod'
                  onClick={() => { setShowmodal(false); }} />
              </IonToolbar>
            </IonItem>
            <Paniermodal Panier={panier} trigg={() => { setSho(!sho) }} />

          </IonContent>
        </IonModal> */}

      </IonContent>




    </IonPage>
  );
};

export default Homecom;










