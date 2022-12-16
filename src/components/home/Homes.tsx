import { useEffect, useRef, useState } from "react";
import {
  IonApp,
  IonButton,
  IonCol,
  IonList,
  IonModal,
  IonThumbnail,
  IonSearchbar,
  IonContent,
  IonAvatar,
  IonSelectOption,
  IonPage,
  IonItemDivider,
  IonSelect,
  IonRadioGroup,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonAlert,
  IonButtons,
  IonMenuButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRouterOutlet,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonNote,
  IonBadge,
  IonRouterLink,
  IonLoading,
  IonSegment,
  IonSegmentButton,
  IonListHeader,
  IonSkeletonText,
  IonRefresher,
  IonRefresherContent,
} from "@ionic/react";

import "./homes.css";
import {
  triangle,
  ellipse,
  square,
  arrowBack,
  arrowForward,
  personCircleOutline,
  globeOutline,
  calendar,
  informationCircle,
  map,
  personCircle,
  chevronBack,
  search,
} from "ionicons/icons";
import { Route, Redirect } from "react-router";

// import { zer } from '../../pages/Nouv2';
// import { SearchModal } from './searchModal';
import { IonReactRouter } from "@ionic/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { App } from "@capacitor/app";
import { useIonRouter } from "@ionic/react";
import { Conteneur } from "../../components/home/conteneur";
import { recupProduct } from "../../Feature/ProductSlice";

// console.log(Date.parse('2001-10-10'));            // Convertir un string en date (renvoie le nombre de seconde avant 1970)

interface Ajout_utiliformprops {
  Panier: [][];
}

export const Homes: React.FC<Ajout_utiliformprops> = ({ Panier }) => {
  // const [showmodal, setShowmodal] = useState(false);
  // const [showmodal2, setShowmodal2] = useState(false);
  // const [showmodal3, setShowmodal3] = useState(false);
  // const [showmodal4, setShowmodal4] = useState(false);
  // const [article, setArticlelist] = useState<any[]>(useSelector((state: any) => state.product.product));
  const [objet1, setObjet1] = useState<any[] | unknown>(
    useSelector((state) => state)
  );
  // const [category, setCategoryList] = useState<any[]>([]);
  let panier = useSelector((state: any) => state.panier.panier);
  let lien = useSelector((state: any) => state.panier.lien);
  let dateact = useSelector((state: any) => state.triggers.dateact);
  const ionRouter = useIonRouter();

  document.addEventListener("ionBackButton", (ev: any) => {
    ev.detail.register(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  });

  let article = []
    .concat(useSelector((state: any) => state.product.product))
    .sort(function (a: any, b: any) {
      var key1 = new Date(a.creation_date);
      var key2 = new Date(b.creation_date);
      if (key1 < key2) {
        return 1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return -1;
      }
    });

  let article1 = []
    .concat(useSelector((state: any) => state.product.product))
    .sort(function (a: any, b: any) {
      var key1 = new Date(a.creation_date);
      var key2 = new Date(b.creation_date);
      if (key1 < key2) {
        return 1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return -1;
      }
    });

  let article2 = []
    .concat(useSelector((state: any) => state.product.product))
    .sort(function (a: any, b: any) {
      var key1 = new Date(a.creation_date);
      var key2 = new Date(b.creation_date);
      if (key1 < key2) {
        return 1;
      } else if (key1 == key2) {
        return 0;
      } else {
        return -1;
      }
    });
  let category = [].concat(
    useSelector((state: any) => state.triggers.categories)
  );
  const [dat, setDat] = useState<Date>(
    useSelector((state: any) => state.triggers.dateact)
  );
  const [velk, setVelk] = useState<any[]>(
    useSelector((state: any) => state.product.product)
  );
  const [alas, setAlas] = useState<any[]>(
    useSelector((state: any) => state.product.product)
  );
  const [disl, setDisl] = useState<any>(false);
  // const [category, setCategoryList] = useState<any[]>([]);
  const [nom, setNom] = useState<String>("ee");
  const [prenom, setPrenom] = useState<String>("rr");
  const [age, setAge] = useState<any>(0);
  const [sexe, setSexe] = useState<String>("rr");
  const [groupee, setGroupee] = useState<String>("rr");
  const [nomCli, setNomCli] = useState<[]>([]);
  const [telephone, setTelephone] = useState<String>("rr");
  const [commandeRech, setCommandeRech] = useState<any>("rr");
  const [adresse, setAdresse] = useState<String>("rr");
  const [antecedant, setantecedant] = useState<String>("rr");
  const [datenaissance, setdatenaissance] = useState<String>("zaratras");
  const [id, setId] = useState<number>(0);
  const [zer, setZer] = useState<any>(
    useSelector((state: any) => state.panier.panier)
  );
  const [trigger, setTrigger] = useState<any>(
    useSelector((state: any) => state.panier.trigg)
  );
  let dateactu = useSelector((state: any) => state.triggers.dateact);
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [seg, setSeg] = useState<any>("Récents");
  const [seg2, setSeg2] = useState<any>(1);
  const [seg3, setSeg3] = useState<any>("Autres produits");
  const router = useIonRouter();
  const prodRef = useRef<any>();
  const prodRef2 = useRef<any>();

  const getpatient = () => {
    // nomCli.includes
  };

  const getart = () => {
    fetch("https://backend-shop.benindigital.com/afficheart")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        setVelk(data);
        setAlas(data);
      });
  };

  const getnow = () => {
    fetch("https://backend-shop.benindigital.com/datenow")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data[0]);
      });
  };
  // console.log(Date.parse('2001-10-10'));            // Convertir un string en date (renvoie le nombre de seconde avant 1970)

  const change = (ide: any | React.SetStateAction<any>) => {
    setSearchText(ide);
    const query = ide.toLowerCase();

    setVelk(
      article.filter((t: any) =>
        t.name.toLowerCase().includes(ide.toLowerCase())
      )
    );
    // console.log(alas.filter((t:any) => t.name.toLowerCase().includes(ide.toLowerCase()))[0].name);
    // console.log(article.find((e:any)=>e.name == "zior")); Vérifie si le nom d'un élément == zior et renvoie sa ligne
    // console.log(article.every((e:any)=>e.id < 26));   Vérifie si tous les id sont < à 26 et renvoie un true si oui
  };

  const change2 = (ide: any | React.SetStateAction<any>) => {
    setSearchText(ide);
    const query = ide.toLowerCase();
    setVelk(
      article.filter((t: any) =>
        t.name.toLowerCase().includes(ide.toLowerCase())
      )
    );
    // console.log(alas.filter((t:any) => t.name.toLowerCase().includes(ide.toLowerCase()))[0].name);
    // console.log(article.find((e:any)=>e.name == "zior")); Vérifie si le nom d'un élément == zior et renvoie sa ligne
    // console.log(article.every((e:any)=>e.id < 26));   Vérifie si tous les id sont < à 26 et renvoie un true si oui
  };

 
  const permu = async (n: any | React.SetStateAction<any>) => {
    await prodRef.current.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      prodRef.current.classList.remove("animate__fadeOutLeft");
      prodRef.current.classList.add("animate__fadeInRight");
      setSeg(n);
    }, 100);
  };

  const permu2 = async (n: any | React.SetStateAction<any>) => {
    await prodRef2.current.classList.add("animate__fadeOutLeft");
    setTimeout(() => {
      prodRef2.current.classList.remove("animate__fadeOutLeft");
      prodRef2.current.classList.add("animate__fadeInRight");
      setSeg2(n);
    }, 100);
  };

  function doRefresh(event: Event | React.SetStateAction<any>) {
  Axios.post("https://backend-shop.benindigital.com/afficheart", {
          id_boutique: JSON.parse(localStorage.getItem("parrain") + "")[0].id
          // id_boutique: 8
        }).then((ret) => {
          dispatch(recupProduct(ret.data));
          console.log(ret.data);
        });
    setTimeout(() => {
      event.detail.complete();
    }, 2000);
  }

  useEffect(() => {
    // getcat();
    // console.log(category);
    // console.log(article.splice(0, 20));
    console.log(article.splice(0, 20));
    console.log(category);
    // console.log(article);
  }, []);
  return (
    <div className="alice">
      
      <div className="div1">
        <IonHeader className="Item1" collapse="condense" mode="ios">
          <IonToolbar>
            <IonTitle size="large" className="page-title ion-text-center">
              <IonLabel>Digital </IonLabel>
              <IonNote>Trader</IonNote>
            </IonTitle>
            <IonButtons slot="end">
              <IonButton routerLink="/Search">
                <IonIcon className="ico8" color="medium" icon={search} />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonList
          lines="full"
          class="ion-no-margin hom"
          className="alice"
          mode="ios"
        >
           <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200} className='refresh'>
          <IonRefresherContent ></IonRefresherContent>
        </IonRefresher>
          {!dateactu && !article[0] ? (
            <div className="homes">
              <IonGrid className="grid1">
                <IonRow>
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                </IonRow>
                <IonRow className="mt-5">
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                </IonRow>
                <IonRow className="mt-5">
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                </IonRow>
                <IonRow className="mt-5">
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                  <IonCard className="card">
                    <IonSkeletonText
                      animated={true}
                      className="imga"
                    ></IonSkeletonText>
                    <IonCardContent>
                      <h3>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "80%" }}
                        ></IonSkeletonText>
                      </h3>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "60%" }}
                        ></IonSkeletonText>
                      </p>
                      <p>
                        <IonSkeletonText
                          animated={true}
                          style={{ width: "30%" }}
                        ></IonSkeletonText>
                      </p>
                    </IonCardContent>
                  </IonCard>
                </IonRow>
              </IonGrid>
            </div>
          ) : (
           (dateactu && !article[0]) ? <>
           <div className="items-center justify-center text-center mb-3">
            <img className="" src="delai-de-traitement.png" alt="d" />
            <h2 className="items-center justify-center text-center ">
             Aucun article disponible pour cette boutique
            </h2>
          </div>
           </> : <>
           <div className="homes">
              <IonSegment
                className="nereide"
                mode="ios"
                onIonChange={(e) => {
                  permu(e.detail.value);
                }}
                scrollable={true}
                value={seg}
              >
                <IonSegmentButton value="Tendances" id="act">
                  <IonLabel>Tendances</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="Récents">
                  <IonLabel>Récents</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="+ Vendus">
                  <IonLabel>Top Ventes</IonLabel>
                </IonSegmentButton>
              </IonSegment>
              <div ref={prodRef} className="animate__animated vril1">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={2}
                  freeMode={true}
                  pagination={{ dynamicBullets: true }}
                  modules={[FreeMode, Pagination]}
                  className="swip1 "
                >
                  {seg == "Récents" ? (
                    <div>
                      {/* (article.filter((e:any)=>(index  3))) */}
                      {article.map((card: any, index: any) => {
                        return index >= 10 ? null : (
                          <SwiperSlide
                            className="dril2"
                            key={`slide_${index}`}
                            onClick={() => {
                              // { window.location.href = ` /home/categorie/${card.id} ` };
                            }}
                          >
                            <Conteneur
                              Nom={card.name}
                              Prix={card.price}
                              Id={card.id}
                              Stock={card.stock}
                              Ig={card.picture1}
                              Panier={Panier}
                            />
                          </SwiperSlide>
                        );
                      })}
                    </div>
                  ) : null}
                  {seg == "Tendances" ? (
                    <div>
                      {article
                        .sort(function (a: any, b: any) {
                          var key1 = new Date(a.like_number);
                          var key2 = new Date(b.like_number);
                          if (key1 < key2) {
                            return 1;
                          } else if (key1 == key2) {
                            return 0;
                          } else {
                            return -1;
                          }
                        })
                        .map((card: any, index: any) => {
                          return index >= 10 ? null : (
                            <SwiperSlide
                              className="dril2"
                              key={`slide_${index}`}
                              onClick={() => {
                                // { window.location.href = ` /home/categorie/${card.id} ` };
                              }}
                            >
                              <Conteneur
                                Nom={card.name}
                                Prix={card.price}
                                Id={card.id}
                                Stock={card.stock}
                                Ig={card.picture1}
                                Panier={Panier}
                              />
                            </SwiperSlide>
                          );
                        })}
                    </div>
                  ) : null}
                  {seg == "+ Vendus" ? (
                    <div>
                      {article
                        .sort(function (a: any, b: any) {
                          var key1 = new Date(a.total_sold);
                          var key2 = new Date(b.total_sold);
                          if (key1 < key2) {
                            return 1;
                          } else if (key1 == key2) {
                            return 0;
                          } else {
                            return -1;
                          }
                        })
                        .map((card: any, index: any) => {
                          return index >= 10 ? null : (
                            <SwiperSlide
                              className="dril2"
                              key={`slide_${index}`}
                              onClick={() => {
                                // { window.location.href = ` /home/categorie/${card.id} ` };
                              }}
                            >
                              <Conteneur
                                Nom={card.name}
                                Prix={card.price}
                                Id={card.id}
                                Stock={card.stock}
                                Ig={card.picture1}
                                Panier={Panier}
                              />
                            </SwiperSlide>
                          );
                        })}
                    </div>
                  ) : null}
                </Swiper>
              </div>
              {/* (article1.filter((e: any) => (e.nom == seg2))) */}
              <IonSegment
                className="nereide"
                mode="ios"
                scrollable={true}
                onIonChange={(e) => {
                  permu2(e.detail.value);
                }}
                value={seg2}
              >
                {category.map((card: any, index: any) => {
                  return index < 3 ? (
                    <>
                      <IonSegmentButton value={card.id} id="act">
                        <IonLabel>{card.nom}</IonLabel>
                      </IonSegmentButton>
                    </>
                  ) : null;
                })}
              </IonSegment>
              <div ref={prodRef2} className="animate__animated vril1">
                <Swiper
                  spaceBetween={0}
                  slidesPerView={2}
                  freeMode={true}
                  pagination={{ dynamicBullets: true }}
                  modules={[FreeMode, Pagination]}
                  className="swip1 "
                >
                  {article1
                    .filter((e: any) => e.category_id == seg2)
                    .map((card: any, index: any) => {
                      return index < 10 ? (
                        <SwiperSlide
                          className="dril2"
                          key={`slide_${index}`}
                          onClick={() => {
                            // { window.location.href = ` /home/categorie/${card.id} ` };
                          }}
                        >
                          <Conteneur
                            Nom={card.name}
                            Prix={card.price}
                            Id={card.id}
                            Stock={card.stock}
                            Ig={card.picture1}
                            Panier={Panier}
                          />
                        </SwiperSlide>
                      ) : null;
                    })}
                </Swiper>
              </div>

              {/* <div className='div1'>
                            <IonRow className='Titre2'>
                                <h2 className='straze'>Categories</h2>
                            </IonRow>
                            <Swiper spaceBetween={0} slidesPerView={2} freeMode={true}
                                pagination={{ clickable: true, }}
                                modules={[FreeMode, Pagination]} className='mySwiper ' >
                                {category.map((card: any, index: any) => {
                                    return (
                                        <SwiperSlide key={`slide_${index}`} onClick={() => {
                                            { window.location.href = ` /home/categorie/${card.id} ` };
                                        }}>
                                            <IonRouterLink routerLink={`/${card.subtitle}`} color='dark' >
                                                <Conteneur1 Titre={card.nom} Desc={card.subtitle} />
                                            </IonRouterLink>
                                            
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div> */}

              {/* <IonSearchbar value={searchText} animated={true} onIonChange={e => { setSearchText(e.detail.value!); change(e.detail.value!) }}></IonSearchbar> */}

              <IonSegment
                className="nereide"
                mode="ios"
                onIonChange={(e) => {
                  permu(e.detail.value);
                }}
                scrollable={true}
                value="Autres produits"
              >
                <IonSegmentButton value="Autres produits" id="act">
                  <IonLabel>Autres produits</IonLabel>
                </IonSegmentButton>
              </IonSegment>

              <IonGrid className="grid1">
                {/* <IonToolbar className='ion-text-center div1 '  >
                                <div className='Titre'>Meilleures offres</div>
                            </IonToolbar> */}
                <IonRow>
                  {article2
                    .slice(0, 10)
                    .filter((t: any) =>
                      t.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    .map((card: any, index: any) => {
                      return (
                        <IonCol key={index} className="dril">
                          <Conteneur
                            Nom={card.name}
                            Prix={card.price}
                            Id={card.id}
                            Stock={card.stock}
                            Ig={card.picture1}
                            Panier={Panier}
                          />
                        </IonCol>
                      );
                    })}
                </IonRow>
              </IonGrid>
              
              <IonRow className="Titre2">
                <h6 className="straze mt-4">
                  Vous ne trouvez pas votre produit?
                </h6>
              </IonRow>
              <IonItem className="div1" lines="none">
                <IonLabel></IonLabel>
                <IonInput
                  className="nereide"
                  placeholder="Ecrivez ce que vous recherchez "
                  onIonChange={(e) => {
                    setCommandeRech(
                      "Commande personnalisé:\n " + e.detail.value
                    );
                  }}
                ></IonInput>
              </IonItem>
              <IonCol size="5">
                <IonButton
                  className="ion-margin-center"
                  color="secondary"
                  size="small"
                  expand="block"
                  onClick={() => {
                    {
                      window.location.href = `https://wa.me/22969889350?text=${commandeRech}`;
                    }
                  }}
                >
                  Commander
                </IonButton>
              </IonCol>
              {/* <IonCol> <IonButton className='ion-margin-center' color='secondary' size='small'
                            routerLink="/searchmodal" >Rechercher un produit</IonButton>
                        </IonCol> */}
              {/* <IonModal
                            isOpen={showmodal}
                            onDidDismiss={() => { setShowmodal(false) }}>
                            <SearchModal onclose={() => { setShowmodal(false) }} />
                        </IonModal> */}
            </div>
           </>
          )}
        </IonList>
      </div>

      {/* <div className='aaa'></div> */}
    </div>
  );
};
