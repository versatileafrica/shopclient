import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonicSlides, IonBadge, IonCardSubtitle, IonFab, IonFabButton, IonFabList, IonRefresher, IonRefresherContent, IonModal, IonLabel, IonItem, IonInput, IonCol, IonRow, IonThumbnail } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, setProductPan, updateQuantity } from '../Feature/PanierSlice';
import * as imageConversion from 'image-conversion';
import Axios from 'axios';

function Nouv3() {
    const ttr = "1660942326.jpg"
    var imgf = document.createElement('img');
    // imgf.src = `https://backend-shop.benindigital.com/uploads/1660942326.jpg`;


    const vf = async (event) => {
        const file = document.getElementById('demo').files[0];
        const res = await imageConversion.compressAccurately(file,30);
        console.log(res);
        const myFile = new File([res], event.target.files[0].name, {
            type: res.type,
        });
        console.log(myFile);
        console.log(event.target.files[0]);
    }

    const vf1 = async (event) => {
        var myImage = document.querySelector('.imga');

        // fetch('https://backend-shop.benindigital.com/uploads/1660942183.jpg')
        fetch('images/1e.jpg')
            .then((res) => res.blob())
            .then((myBlob) => {
                console.log(myBlob);  // convertit une image en blob
                var objectURL = URL.createObjectURL(myBlob);
                myImage.src = objectURL;
                const myFile = new File([myBlob], 'image.jpeg', {
                    type: myBlob.type,
                });
                console.log(myFile.type);// convertit un blob en image
            });
    }



    const declike = () => {
        // document.querySelector('.dara').appendChild(imgf);
        // axios.get(`https://backend-shop.benindigital.com/uploads/${ttr}`).then((res) => {
        //     const data = res
        //     return data
        // }).then((data) => {
        //     console.log(data);
        //     // setCategoryList(data);
        // })
        fetch(`https://backend-shop.benindigital.com/uploads/1660942326.jpg`)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'dot.png', blob)
                console.log(file)
            })
        // Axios.get(`https://backend-shop.benindigital.com/uploads/1660942326.jpg`).then((res) => {

        // })
        // //     const data = res
        // //     return data
        // // })
        



    }



    useEffect(() => {

    }, [])



    return (
        <>


            <input id="demo" type="file" onChange={vf} />
            <IonButton onClick={() => { declike() }} >
                ddgg
            </IonButton>
            <img src="images/yelan.png" alt="card" className="imga" />

            {/* ********************************************************************************* */}

            <div className='dara'></div>




            {/* {userInfo.filepreview !== null ?
                <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" />
                : null} */}
        </>
    )
}
export default Nouv3;
