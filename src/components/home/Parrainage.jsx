/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Axios from "axios";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLoading,
  IonPage,
  IonProgressBar,
  IonTextarea,
  IonTitle,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import { useDispatch, useSelector } from "react-redux";
import { setaffiliate, setnumberUser } from "../../Feature/DeclencheursSlice";


const Parrainage = () => {
  const [boutik, setboutik] = useState("");
  const [numeros, setnumeros] = useState(0);
  const [ifboutik, setIfboutik] = useState(false);
  const [ifnumeros, setIfnumeros] = useState(false);
  const [ifnumeross, setIfnumeross] = useState(false);
  const [ifmontdepa, setIfmontdepa] = useState(false);
  const [type, settype] = useState("sellers");
  const [showLoading, setShowLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showToast1, setShowToast1] = useState(false);
  const [progress, setprogress] = useState(false);
  const Regex = /^\+229\d{8}$/;
  const dispatch = useDispatch();

  const dep = () => {
    if (!boutik) {
      setIfboutik(true);
      setTimeout(() => {
        setIfboutik(false);
      }, [4000]);
    } else {
      setIfboutik(false);
      setprogress(true)
        // setShowLoading(true);
        Axios.post("https://backend-shop.benindigital.com/verif_parrainage", {
          boutique: boutik,
        }).then((res) => {
          // console.log(res.data.message);
          if(res.data.message == "succ" ){
            setprogress(false)
            setShowLoading(false);
            setShowToast(true)
            dispatch(setaffiliate(res.data.result));
            // dispatch(setnumberUser(numeros));
            window.location.href = "/home"
          }else if(res.data.message == "sacc" ){
            setprogress(false)
            // setShowLoading(false);
            setShowToast1(true)
          }
          // if(res.data)
          // setShowLoading(false);
          // setShowToast(true);
          // setboutik("");
          // setnumeros("");
           
          // console.log(res.data);
        });
      
    }
    // if (!numeros) {
    //   setIfnumeros(true);
    //   setTimeout(() => {
    //     setIfnumeros(false);
    //   }, [4000]);
    // } else {
    //   setIfnumeros(false);
    // }
    // if (numeros.match(Regex)) {
    //   setIfnumeross(false);
    // } else {
    //   setIfnumeross(true);
    //   setTimeout(() => {
    //     setIfnumeross(false);
    //   }, [4000]);
    // }

    // if (boutik) {
        
    // }
  };

  useEffect(() => {
    // console.log(caisse_value[0].caisse);
    // console.log(userid.userId);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonButton routerLink="/home">
              <IonIcon color="medium" icon={chevronBack} />
            </IonButton>
          </IonButtons> */}
          <IonTitle className="nereide">Digital trader</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonLoading
        cssClass="my-custom-class"
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={"Please wait..."}
        duration={5000}
      /> */}
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Vous avez été parrainé avec succèss"
        duration={1500}
        position="top"
      />
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Boutique non existante"
        duration={1500}
        position="top"
      />
      <IonContent>
        <div class="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
          <div class="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <div class="flex flex-col overflow-y-auto md:flex-row">
              <div class="h-32 md:h-auto md:w-1/2">
                <img
                  aria-hidden="true"
                  class="object-cover w-full h-full dark:hidden"
                  src="create-account-office.jpeg"
                  alt="Office"
                />
                <img
                  aria-hidden="true"
                  class="hidden object-cover w-full h-full dark:block"
                  src="create-account-office-dark.jpeg"
                  alt="Office"
                />
              </div>
              <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                <div class="w-full flex flex-col">
                  <div className="w-full items-center justify-center text-center">
                    <h1 class="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                      Entrez le code de la boutique
                    </h1>
                  </div>

                  <label class=" text-sm">
                    {/* <span class="text-gray-700 dark:text-gray-400 mb-2">
                      Code de la Boutique
                    </span> */}
                    <IonInput
                      className="w-full mb-4 mt-1 h-10 text-sm border-2 border-color bg-white rounded-md p-2 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input"
                      placeholder="Nom de la boutique affiliée"
                      type="text"
                      value={boutik}
                      onIonChange={(e) => setboutik(e.target.value)}
                    />
                  </label>
                  {ifboutik && (
                    <div className="empty_full">
                      Veuillez entrez le code d'une boutique!
                    </div>
                  )}
                  {/* <label class=" mt-4 text-sm mb-4">
                    <span class="text-gray-700 dark:text-gray-400">
                      Votre numéro
                    </span>
                    <IonInput
                      className="w-full mt-1 h-10 text-sm border-2 border-color bg-white rounded-md p-2 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple form-input"
                      // placeholder="+229"
                      type="number"
                      
                      onIonChange={(e) => { setnumeros("+229" + e.detail.value) }}
                      // onIonChange={(e) => setnumeros("+229" + e.detail.value)}
                    />
                  </label> */}
                  {/* {ifnumeros && (
                    <div className="empty_full">
                      Veuillez entrez le numero!
                    </div>
                  )}
                  {ifnumeros && (
                    <div className="empty_full">
                      Veuillez entrez un numero valide!
                    </div>
                  )} */}
                  {progress ? (
                    <>
                      <IonProgressBar type="indeterminate"></IonProgressBar>
                    </>
                  ) : (
                    <>
                      <a
                        class="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-deep_sky_blue border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        onClick={dep}
                      >
                        Valider
                      </a>
                    </>
                  )}
                  <hr class="my-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Parrainage;
