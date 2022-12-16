
import { useEffect, useRef, useState } from "react";
import { IonApp, IonButton, IonCol, IonList, IonModal, IonThumbnail, IonSearchbar, IonContent, IonAvatar, IonSelectOption, IonPage, IonItemDivider, IonSelect, IonRadioGroup, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, IonIcon, IonAlert, IonButtons, IonMenuButton, IonTabBar, IonTabButton, IonTabs, IonRouterOutlet, IonCard, IonCardContent, IonCardTitle, IonNote, IonBadge, IonRouterLink, IonSegment, IonSegmentButton, IonAccordion, IonAccordionGroup, IonCheckbox, IonInfiniteScroll, IonInfiniteScrollContent } from "@ionic/react";


import { triangle, ellipse, square, arrowBack, arrowForward, personCircleOutline, globeOutline, personCircle, arrowDownCircle, closeCircleOutline, search, chevronBack, filter } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useIonRouter } from '@ionic/react';







import { IonReactRouter } from '@ionic/react-router';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { setactive_categ, setactive_tendance } from "./Feature/DeclencheursSlice";
import { Conteneur } from "./components/home/conteneur";





interface Ajout_utiliformprops {

    onclose: () => void;
    // nom: String;
    // prenom: String;



}



const Search: React.FC = () => {
    const [showmodal, setShowmodal] = useState(false);
    const [produit, setProduitlist] = useState<any[]>([]);
    const [velk, setVelk] = useState<any[]>([]);
    const [titre, setTitre] = useState<String>();
    const [age, setAge] = useState<any>(0);
    const [groupee, setGroupee] = useState<String>('rr');
    const [nomCli, setNomCli] = useState<String>('rr');
    const [telephone, setTelephone] = useState<String>('rr');
    const [remarque, setRemarque] = useState<String>('rr');
    const [adresse, setAdresse] = useState<String>('rr');
    const [antecedant, setantecedant] = useState<String>('rr');
    const [id, setId] = useState<number>(0);
    const [checked, setChecked] = useState(false);
    const [searchText, setSearchText] = useState('');
    const router = useIonRouter();
    const productsRef = useRef<any>();
    let act_categ: any = ([].concat(useSelector((state: any) => state.triggers.active_categ)))
    let act_tend: any = ([].concat(useSelector((state: any) => state.triggers.active_tendance)))
    let category = ([].concat(useSelector((state: any) => state.triggers.categories)))
    const dispatch = useDispatch();
    let article1 = ([].concat(useSelector((state: any) => state.product.product)))
    const [nub, setNub] = useState<any>(10);
    const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);


    const loadData = (ev: any) => {
        setTimeout(() => {
            setNub(nub + 10)
            ev.target.complete();
        }, 500);
    }

    const change1 = async (
        n: any | React.SetStateAction<any>
    ) => {
        // article= article.filter((e: any) => (e.category_id == n))
        await productsRef.current.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
            productsRef.current.classList.remove("animate__fadeOutLeft");
            productsRef.current.classList.add("animate__fadeInRight");
            dispatch(setactive_categ(n))
            // setSeg(n)
        }, 700);
    }

    const change2 = async (
        n: any | React.SetStateAction<any>
    ) => {
        // article= article.filter((e: any) => (e.category_id == n))
        await productsRef.current.classList.add("animate__fadeOutLeft");
        setTimeout(() => {
            productsRef.current.classList.remove("animate__fadeOutLeft");
            productsRef.current.classList.add("animate__fadeInRight");
            dispatch(setactive_tendance(n))
            // setSeg(n)
        }, 700);
    }


    let article = ([].concat(useSelector((state: any) => state.product.product))).sort(function (a: any, b: any) {
        var key1 = new Date(a.creation_date);
        var key2 = new Date(b.creation_date);
        if (key1 < key2) {
            return 1;
        } else if (key1 == key2) {
            return 0;
        } else {
            return -1;
        }
    })

    const permu = async (
        n: any | React.SetStateAction<any>
    ) => {
        dispatch(setactive_categ(n));
        // await productsRef.current.classList.add("animate__fadeOutLeft");
        // setTimeout(() => {
        //     productsRef.current.classList.remove("animate__fadeOutLeft");
        //     productsRef.current.classList.add("animate__fadeInRight");
        //     // setSeg(n)
        // }, 500);

    }

    const change = (ide: any | React.SetStateAction<any>) => {
        setSearchText(ide)
        const query = ide.toLowerCase();
        setVelk(produit.filter(t => t.name.toLowerCase().includes(ide.toLowerCase())));
    }











    useEffect(() => {

    }, []);
    return (
        <IonPage>
            <IonHeader >
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => router.goBack()}>
                            <IonIcon color='medium' icon={chevronBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className='nereide' >Digital trader</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className='alice'>
                <IonHeader className='Item1' collapse='condense' mode='ios'  >
                    <IonToolbar>
                        <IonTitle size="large" className="page-title">
                            <IonLabel>Rechercher</IonLabel>
                            <IonNote></IonNote>
                        </IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonList lines="full" class="ion-no-margin hom" className='alice' mode='ios'>
                    <div className="homes">

                        <IonSearchbar mode="ios" value={searchText} animated={true} onIonChange={e => { setSearchText(e.detail.value!); change(e.detail.value!) }}
                            onIonFocus={e => { dispatch(setactive_categ("")); dispatch(setactive_tendance("")); setNub(10) }}></IonSearchbar>

                        <IonRow >

                        </IonRow>
                        <IonCol size="2" >
                            <IonButton onClick={() => { setShowmodal(true); }} id="open-modal" size="small" slot="" color="secondary">
                                <IonIcon icon={filter} />
                                <IonLabel>Filtrer</IonLabel>
                            </IonButton>
                        </IonCol>


                        <IonGrid ref={productsRef} className='animate__animated grid1'>
                            {/* <IonRow>
                                {(article.filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase())))).map((card: any, index: any) => {
                                    return (
                                        <IonCol key={index} className='dril' >
                                            <Conteneur Nom={card.name}
                                                Prix={card.price}
                                                Id={card.id}
                                                Stock={card.stock}
                                                Ig={card.picture1}
                                                Panier={[]}
                                            />
                                        </IonCol>
                                    )
                                })}
                            </IonRow> */}


                            <IonRow>
                                {(act_categ == '') ? (
                                    <>
                                        {(article.filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase())))).slice(0, nub).map((card: any, index: any) => {
                                            return (
                                                <IonCol key={index} className='dril' >
                                                    <Conteneur Nom={card.name}
                                                        Prix={card.price}
                                                        Id={card.id}
                                                        Stock={card.stock}
                                                        Ig={card.picture1}
                                                        Panier={[]}
                                                    />
                                                </IonCol>
                                            )
                                        })}
                                    </>
                                ) : ((act_tend == "" ?
                                    <>
                                        {(article.filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase()) && t.category_id == act_categ))).slice(0, nub).map((card: any, index: any) => {
                                            return (
                                                <IonCol key={index} className='dril' >
                                                    <Conteneur Nom={card.name}
                                                        Prix={card.price}
                                                        Id={card.id}
                                                        Stock={card.stock}
                                                        Ig={card.picture1}
                                                        Panier={[]}
                                                    />
                                                </IonCol>
                                            )
                                        })}
                                    </> :
                                    ((act_tend == "Récent" ?
                                        <>
                                            {(article.filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase()) && t.category_id == act_categ))).slice(0, nub).map((card: any, index: any) => {
                                                return (
                                                    (index < -1) ? (
                                                        null
                                                    ) : (
                                                        <IonCol key={index} className='dril' >
                                                            <Conteneur Nom={card.name}
                                                                Prix={card.price}
                                                                Id={card.id}
                                                                Stock={card.stock}
                                                                Ig={card.picture1}
                                                                Panier={[]}
                                                            />
                                                        </IonCol>)
                                                )
                                            })}
                                        </> :
                                        ((act_tend == "Tendances" ?
                                            <>
                                                {(article.sort(function (a: any, b: any) {
                                                    var key1 = new Date(a.like_number);
                                                    var key2 = new Date(b.like_number);
                                                    if (key1 < key2) {
                                                        return 1;
                                                    } else if (key1 == key2) {
                                                        return 0;
                                                    } else {
                                                        return -1;
                                                    }
                                                }).filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase()) && t.category_id == act_categ))).slice(0, nub).map((card: any, index: any) => {
                                                    return (
                                                        (index < -1) ? (
                                                            null
                                                        ) : (
                                                            <IonCol key={index} className='dril' >
                                                                <Conteneur Nom={card.name}
                                                                    Prix={card.price}
                                                                    Id={card.id}
                                                                    Stock={card.stock}
                                                                    Ig={card.picture1}
                                                                    Panier={[]}
                                                                />
                                                            </IonCol>)
                                                    )
                                                })}
                                            </> :
                                            <>
                                                {(article.sort(function (a: any, b: any) {
                                                    var key1 = new Date(a.total_sold);
                                                    var key2 = new Date(b.total_sold);
                                                    if (key1 < key2) {
                                                        return 1;
                                                    } else if (key1 == key2) {
                                                        return 0;
                                                    } else {
                                                        return -1;
                                                    }
                                                }).filter((t: any) => (t.name.toLowerCase().includes(searchText.toLowerCase()) && t.category_id == act_categ))).slice(0, nub).map((card: any, index: any) => {
                                                    return (
                                                        (index < -1) ? (
                                                            null
                                                        ) : (
                                                            <IonCol key={index} className='dril' >
                                                                <Conteneur Nom={card.name}
                                                                    Prix={card.price}
                                                                    Id={card.id}
                                                                    Stock={card.stock}
                                                                    Ig={card.picture1}
                                                                    Panier={[]}
                                                                />
                                                            </IonCol>)
                                                    )
                                                })}
                                            </>
                                        ))
                                    ))
                                )
                                )}

                            </IonRow>
                            <IonInfiniteScroll className="scroll1"
                                onIonInfinite={loadData}
                                threshold="100px"
                                disabled={isInfiniteDisabled}
                            ><IonInfiniteScrollContent
                                loadingSpinner="lines-sharp-small"
                                loadingText="Chargement de données..."
                                
                            >
                                </IonInfiniteScrollContent>
                            </IonInfiniteScroll>

                        </IonGrid>

                    </div>



                </IonList>

                <IonModal
                    isOpen={showmodal}
                    onDidDismiss={() => { setShowmodal(false) }}
                    // initialBreakpoint={0.25}
                    initialBreakpoint={0.5}
                    breakpoints={[0, 0.25, 0.5, 0.75]}
                // handleBehavior="cycle"
                >
                    <IonContent className="ion-padding">
                        <div className="ion-margin-top">
                            <IonToolbar color="none" style={{ "--border-style": "none" }}>
                                <IonTitle className=" ion-text-center nereide">Categories</IonTitle>
                            </IonToolbar>
                            <IonGrid >
                                <IonRow style={{ "margin": "auto" }}>
                                    {category.map((f: any) => (
                                        <IonCol key={f} size="auto">
                                            <IonButton className="nereide" mode="ios" size="small" expand="full" color={act_categ == f.id ? "secondary" : "light"} onClick={() => { ; change1(f.id) }}><span className="cache">{f.nom}</span></IonButton>
                                        </IonCol>
                                    ))}
                                </IonRow>
                            </IonGrid>
                        </div>
                        <div className="ion-margin-top">
                            <IonToolbar color="none" style={{ "--border-style": "none" }}>
                                <IonTitle className=" ion-text-center nereide">Préférences</IonTitle>
                            </IonToolbar>
                            <IonGrid >
                                <IonRow style={{ "margin": "auto" }}>
                                    <IonCol size="auto">
                                        <IonButton className="nereide" mode="ios" size="small" expand="full" color={act_tend == "Récent" ? "secondary" : "light"} onClick={() => { change2("Récent"); }}><span className="cache">Récent</span></IonButton>
                                    </IonCol>
                                    <IonCol size="auto">
                                        <IonButton className="nereide" mode="ios" size="small" expand="full" color={act_tend == "Tendances" ? "secondary" : "light"} onClick={() => { change2("Tendances"); }}><span className="cache">Tendances</span></IonButton>
                                    </IonCol>
                                    <IonCol size="auto">
                                        <IonButton className="nereide" mode="ios" size="small" expand="full" color={act_tend == "+ Vendus" ? "secondary" : "light"} onClick={() => { change2("+ Vendus"); }}><span className="cache">+ Vendus</span></IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                        {/* <IonGrid>
                            <IonCol size="5">
                                <IonButton mode="ios" size="small" expand="full" color="secondary" onClick={() => {  }}><span className="cache">Rechercher</span></IonButton>
                            </IonCol>
                        </IonGrid> */}
                    </IonContent>
                </IonModal>


            </IonContent>

        </IonPage>



    )

};
export default Search;