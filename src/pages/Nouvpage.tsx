import { CreateAnimation, IonApp, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonRefresher, IonRefresherContent, IonRippleEffect, IonRow, IonSegment, IonSegmentButton, IonSpinner, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { RefresherEventDetail } from '@ionic/core';
import { arrowBack, cartOutline, chevronDownCircleOutline, informationCircle, logoInstagram, search, star } from 'ionicons/icons';
import { IonPage, useIonToast } from '@ionic/react';
// import './RippleEffectExample.css';
import './Nouvpage.css'
import './Nouvpage.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/pagination";




function doRefresh(event: CustomEvent<RefresherEventDetail>) {
    console.log('Begin async operation');

    setTimeout(() => {
        console.log('Async operation has ended');
        event.detail.complete();
    }, 2000);
}

const Nouv: React.FC = () => {
    const [present, dismiss] = useIonToast();
    const [showToast1, setShowToast1] = useState(false);
    const [showToast2, setShowToast2] = useState(false);
    const [seg, setSeg] = useState<any>("promotion");


    const wha = () => {
        window.open('https//api.whatsapp.com/send?phone=+22961846455')
    }
    const data = [
        {
            title: "Road",
            subtitle: "Long road",
            image: "/assets/1e.jpg"
        },
        {
            title: "Moun",
            subtitle: "Big mountains",
            image: "/assets/1e.jpg"
        },
        {
            title: "Unk",
            subtitle: "This is unknown",
            image: "/assets/1e.jpg"
        },
        {
            title: "Unk",
            subtitle: "This is unknown",
            image: "/assets/1e.jpg"
        },
    ];



    return (
        <>
            <div className=''>
                <IonRow className='bbk'>
                    <IonCol size='10'>
                        <IonSegment onIonChange={e => { console.log('Segment selected', e.detail.value); setSeg(e.detail.value) }}
                            value={seg} scrollable={true} className='seg' >
                            <IonSegmentButton value="promotion">
                                <IonLabel>Promotions</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="top 3">
                                <IonLabel>Top 3</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="nouveau">
                                <IonLabel>Nouveau</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="ja">
                                <IonLabel>Ja</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="rr">
                                <IonLabel>rr</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCol>
                    <IonCol className='zer'>
                        <IonIcon icon={search} className='ico' />
                    </IonCol>
                </IonRow>
                <Swiper spaceBetween={0} slidesPerView={1} freeMode={false}
                    pagination={{ clickable: true, }}
                    modules={[FreeMode, Pagination]} className='rrt' >
                    {data.map((card, index) => {
                        return (
                            <SwiperSlide key={`slide_${index}`} onClick={() => {
                                { window.location.href = ` /home/categorie/ ` };
                            }}>
                                <IonImg src="img/1cc.png" />
                                {/* <Conteneur1 Titre={card.nom} Desc={card.description} /> */}
                            </SwiperSlide>
                        )
                    })}
                </Swiper>


            </div>
























            {/* <IonHeader translucent>
                <IonToolbar color='secondary'>
                    <IonButtons slot="start">
                        <IonButton routerLink="/">
                            <IonIcon style={{ fontSize: '30px' }} icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle className='ion-text-center tet'>Panier</IonTitle>
                    <IonButtons slot="end">
                        <IonMenuButton />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton>
                <IonButton onClick={() => setShowToast2(true)} expand="block">Show Toast 2</IonButton>
                <IonButton onClick={() => wha()} >whats</IonButton>
              
                <IonToast
                    isOpen={showToast2}
                    onDidDismiss={() => setShowToast2(false)}
                    message="Commande effectuée"
                    icon={informationCircle}
                    position="top"
                    buttons={[
                
                        {
                            text: 'fermer',
                            role: 'cancel',
                            handler: () => {
                                console.log('Cancel clicked');
                            }
                        }
                    ]}
                />

            </IonContent>
 */}

        </>
    );
};
export default Nouv;














{/* <IonRow>
                    <IonCol size='10'>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)} value="javascript" scrollable={true} className='seg' >
                            <IonSegmentButton value="python">
                                <IonLabel>Python</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="javascript">
                                <IonLabel>Javascript</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="java">
                                <IonLabel>Java</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="ja">
                                <IonLabel>Ja</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="rr">
                                <IonLabel>rr</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCol>
                    <IonCol className='zer'>
                        <IonIcon icon={search} className='ico' />
                    </IonCol>

                </IonRow>
                <IonImg src="img/1cc.png" className='rrt' /> */}