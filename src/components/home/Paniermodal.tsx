import React from "react";
import { useEffect, useState } from "react";
import Axios from "axios";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonTitle,
  IonApp,
  IonContent,
  IonList,
  IonItem,
  IonRow,
  IonCol,
  IonInput,
  IonGrid,
  IonLabel,
  IonMenuButton,
  IonThumbnail,
  IonAvatar,
  IonBadge,
  IonImg,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonCardSubtitle,
  IonFooter,
  IonLoading,
  IonSpinner,
  IonModal,
  IonToast,
  IonProgressBar,
} from "@ionic/react";
import {
  arrowBack,
  arrowForward,
  checkmarkSharp,
  closeCircle,
  closeCircleOutline,
  informationCircle,
  trash,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
import "swiper/scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
import { Pagination } from "swiper";
import "./paniermodal.css";
import { PanierItem } from "./PanierItem";
import "./swip.css";
import { tab5 } from "./PanierItem";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  setProductPan,
  updateQuantity,
  dec,
  vider,
} from "../../Feature/PanierSlice";
import { recupProduct } from "../../Feature/ProductSlice";
import {
  decdateact,
  setcategories,
  setlike_list,
  recuplike_list,
  dectriggmod,
  setnumberUser,
} from "../../Feature/DeclencheursSlice";

export const Tableau13 = (namet: boolean, prenomt: number) => [
  {
    Formation: namet,
    Cible: prenomt,
  },
];

export let tab4 = 12;

const aff = () => {
  setTimeout(() => {
    tab4 = 12;
  }, 500);
  tab4 = 14;
};
export const atr = () => {
  console.log("er");
};

interface Ajout_utiliformprops {
  // nom: String;
  // prenom: String;

  Panier: [][];
  trigg: () => void;
}

const Paniermodal: React.FC<Ajout_utiliformprops> = ({ Panier, trigg }) => {
  const [idant, setIdant] = useState(
    parseInt(window.location.pathname.split("/")[2])
  );
  // const [panier, setPanier] = useState<any[]>(useSelector((state:any) => state.panier.panier));
  const [showmodal, setShowmodal] = useState(false);
  const [progress, setprogress] = useState(false);
  const [totalquant, setTotalquant] = useState<number>(0);
  const [totalprix, setTotalprix] = useState<number>(0);
  const [invoice, setInvoice] = useState<any>();
  const [whatsapp, setWhatsapp] = useState<any>();
  const [sexe, setSexe] = useState("");
  const [trashed, setTrash] = useState(false);
  const [edited, setEdited] = useState(false);
  const [telephone2, setTelephone2] = useState(0);
  const [quartier, setQuartier] = useState("Quartier");
  const [ville, setVille] = useState("Ville");
  const [maison, setMaison] = useState("Maison");
  const [adresse, setAdresse] = useState("");
  let [antecedants, setAntecedants] = useState(" ");
  let [date, setdate] = useState("");
  const [remarque, setRemarque] = useState(" ");
  // const [commande, setCommande] = useState<any>();
  const [showLoading, setShowLoading] = useState(true);
  const [zer, setZer] = useState<any>(
    useSelector((state: any) => state.panier.panier)
  );
  const [trigger, setTrigger] = useState<any>(
    useSelector((state: any) => state.panier.trigg)
  );
  let trigger2 = useSelector((state: any) => state.triggers.triggermod);
  let panier = useSelector((state: any) => state.panier.panier);
  let numUser = useSelector((state: any) => state.triggers.numberUser);
  const [reclusia, setRec] = useState<any[]>([]);
  const Regex = /^\+229\d{8}$/;
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);
  const [showToast3, setShowToast3] = useState(false);
  let commande: any = "";
  const dispatch = useDispatch();

  const getpan = () => {
    // fetch('https://backend-shop.benindigital.com/affichepanier').then((res) => {
    //     const data = res.json()
    //     return data
    // }).then((data) => {
    //     setPanier(data);
    //     setInvoice(data[0].invoice);
    // })
    setTotalquant(
      panier
        .map((e: any) => e.product_quantity)
        .reduce((prev: any, curr: any) => prev + curr, 0)
    );
    setTotalprix(
      panier
        .map((e: any) => e.total_price)
        .reduce((prev: any, curr: any) => prev + curr, 0)
    );

    for (var i = 0; i < panier.length; i++) {
      commande = [
        ...commande,
        "\n" + panier[i].product_name + "x" + panier[i].product_quantity,
      ];
    }
  };
  const suppression = (ide: number | React.SetStateAction<any>) => {
    Axios.delete(`https://backend-shop.benindigital.com/deletepan/${ide}`);
    getpan();
    aff();
    getpan();
  };

  const calc = () => {
    console.log(whatsapp);

    if (whatsapp.match(Regex)) {
        dispatch(setnumberUser(whatsapp));
      envoi1();
    } else {
      setShowToast1(true);
    }
  };

  const envoi1 = () => {
    if (parseInt(panier.length) > 0) {
      setprogress(true);
      Axios.post("https://backend-shop.benindigital.com/ajoutcomList", {
        panier: panier,
        tail: parseInt(panier.length),
        whatsapp: !numUser ? whatsapp : numUser,
        id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id,
      }).then((ret) => {
        console.log(ret.data);
        envoi(ret.data);
      });
    } else {
      setShowToast3(true);
    }
  };
  const suppr = () => {
    fetch("https://backend-shop.benindigital.com/supprpan", {}).then((data) => {
      if (data) {
      } else {
      }
    });
    getpan();
    aff();
  };

  const envoi = (ide: any | React.SetStateAction<any>) => {
    Axios.post("https://backend-shop.benindigital.com/ajoutcommande", {
      totalquant: totalquant,
      totalprix: totalprix,
      invoice: ide,
      whatsapp: !numUser ? whatsapp : numUser,
      id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id,
    }).then((ret) => {
      if (ret.data == "suc") {
        console.log("commande ajoutée");
        setShowToast2(true);
        setprogress(false);
        envoi3();
      } else {
      }
    });
  };

  const envoi3 = () => {
    dispatch(dec(!trigger));
    dispatch(dectriggmod(!trigger2));
    const whats = `https://wa.me/${
      JSON.parse(localStorage.getItem("parrain") + "")[0].whatsapp
    }?text=${commande}`;
    {
      window.location.href = whats;
    }
    dispatch(vider(""));
    Axios.post("https://backend-shop.benindigital.com/afficheart", {
      id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id,
    }).then((ret) => {
      dispatch(recupProduct(ret.data));
      console.log(ret.data);
    });
    setShowmodal(false);
  };

  const refr = () => {
    Axios.post("http://127.0.0.1:8000/api/auth/checkToken", {
      token: "",
    }).then((ret) => {
      if (ret.data.success) {
        console.log("success");
      } else {
        console.log("non success");
      }
    });
  };

  useEffect(() => {
    getpan();
    console.log(JSON.parse(localStorage.getItem("numberUser") + ""));
  }, []);

  useEffect(() => {
    getpan();
  }, [(trigger: any) => {}]);

  return (
    <>
      <IonContent fullscreen>
        <IonList lines="full" class="ion-no-margin">
          <IonList>
            {panier.map((val: any, key: any) => {
              return (
                <PanierItem
                  Id={val.product_id}
                  Stock={val.stock}
                  Add={val.product_quantity}
                  Name={val.product_name}
                  Unit={val.unite_price}
                  Total={val.total_price}
                  Ig={val.picture1}
                />
              );
            })}
          </IonList>
        </IonList>
      </IonContent>
      <IonFooter className="cartFooter">
        {progress ? (
          <IonProgressBar type="indeterminate"></IonProgressBar>
        ) : (
          <div className="cartCheckout">
            <IonCardSubtitle>
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "XOF",
              }).format(totalprix)}
            </IonCardSubtitle>

            {!numUser ? (
              <IonButton
              color="dark"
              onClick={() => {
                setShowmodal(true);
              }}
            >
              <IonIcon icon={checkmarkSharp} />
              &nbsp;Commander
            </IonButton>
            ) : (
              <IonButton
                color="dark"
                onClick={() => {
                  envoi1(); 
                }}
              >
                <IonIcon icon={checkmarkSharp} />
                &nbsp;Commander
              </IonButton>
            )}
          </div>
        )}
      </IonFooter>
      <IonModal
        isOpen={showmodal}
        onDidDismiss={() => {
          setShowmodal(false);
        }}
        initialBreakpoint={0.25}
        breakpoints={[0, 0.25, 0.5, 0.75]}
      >
        <IonItem>
          <IonLabel>Veuillez entrer numéro votre whatsapp</IonLabel>
        </IonItem>
        <IonItem>
          <IonCol>
            <IonInput
              onIonChange={(e) => {
                setWhatsapp("+229" + e.detail.value);
              }}
            ></IonInput>
          </IonCol>
          <IonCol size="3">
            <IonButton
              onClick={() => {
                // setShowmodal(false)
                calc();
              }}
              size="small"
              color="secondary"
            >
              Valider
            </IonButton>
          </IonCol>
        </IonItem>
      </IonModal>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Veuillez entrer un numéro valide"
        icon={informationCircle}
        position="top"
        duration={3000}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Commande effectuée"
        icon={informationCircle}
        position="top"
        buttons={[
          {
            text: "fermer",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            },
          },
        ]}
      />
      <IonToast
        isOpen={showToast3}
        onDidDismiss={() => setShowToast3(false)}
        message="Veuillez ajouter un produit"
        icon={informationCircle}
        position="top"
        duration={3000}
      />
    </>
  );
};

export default Paniermodal;
