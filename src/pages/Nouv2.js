import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonMenuButton, IonIcon, IonicSlides, IonBadge, IonCardSubtitle, IonFab, IonFabButton, IonFabList, IonRefresher, IonRefresherContent, IonModal, IonLabel, IonItem, IonInput, IonCol, IonRow, IonThumbnail } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, setProductPan, updateQuantity } from '../Feature/PanierSlice';


function Nouv2() {

    const [userInfo, setuserInfo] = useState({
        file: [],
        filepreview: null,
    });

    const [userInfo2, setuserInfo2] = useState({
        file: [],
        filepreview: null,
    });

    const [userInfo3, setuserInfo3] = useState({
        file: [],
        filepreview: null,
    });
    const [userInfo4, setuserInfo4] = useState({
        file: [],
        filepreview: null,
    });

    const handleInputChange = (event) => {
        setuserInfo({
            ...userInfo,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    }
    const handleInputChange2 = (event) => {
        setuserInfo2({
            ...userInfo2,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    }
    const handleInputChange3 = (event) => {
        setuserInfo3({
            ...userInfo3,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    }
    const handleInputChange4 = (event) => {
        setuserInfo4({
            ...userInfo4,
            file: event.target.files[0],
            filepreview: URL.createObjectURL(event.target.files[0]),
        });
    }


    const [isSucces, setSuccess] = useState(null);
    const [isSucces2, setSuccess2] = useState(null);
    const [isSucces3, setSuccess3] = useState(null);
    const [isSucces4, setSuccess4] = useState(null);
    const dispatch= useDispatch();

    const [patient, setPatientlist] = useState([]);
    const [nom, setNom] = useState();
    const [prix, setPrix] = useState();
    const [description, setDescription] = useState();
    const [stock, setStock] = useState();
    const [reduc, setReduc] = useState(true);
    const [Id, setId] = useState(null);
    const [cet, setCet] = useState(0);
    const submit = async (e, a, obj) => {
        const formdata = new FormData()
        formdata.append('avatar', obj);
        axios.put(`http://backend-shop.benindigital.com/imga/${e}/${a}`, formdata, {

            headers: { "Content-Type": "multipart/form-data" },

        })
            .then(res => { // then print response status
                console.warn(res);
                if (res.data.success === 1) {
                    setSuccess("Image upload successfully")
                }
            })
    }

    const submit2 = async () => {
        localStorage.removeItem("panier");
        console.log(zer);
    }


    const zer= useSelector((state)=>state.panier.panier);

    const envoi = () => {
        dispatch(setProductPan({
            product_id: cet+1,
            product_quantity:2,
            product_name:'aria',
            unite_price:2,
            total_price:2,
            picture: "jjk"
        }))
        setCet(cet+1);
        console.log(zer);
    }
    const update = () => {
        dispatch(updateQuantity([55,1,55]))
        console.log(zer);
    }
    const del =  (e) => {
        console.log(e);
        dispatch(deleteProduct(e))
        console.log(zer);
    }




    useEffect(()=>{
     
      },[])



    return (
        <>
            

            
                <IonItem>
                    <IonButton //type="submit" 
                        className="ion-text-center" color='secondary' onClick={() => envoi()}> add </IonButton>
                </IonItem>
                <IonItem>
                    <IonButton //type="submit" 
                        className="ion-text-center" color='secondary' onClick={() => submit2()}> remove </IonButton>
                </IonItem>
                <IonItem>
                    <IonButton //type="submit" 
                        className="ion-text-center" color='secondary' onClick={() => update()}> update </IonButton>
                </IonItem>
                <IonItem>
                    <IonInput value={Id} onIonChange={(e) => { setId(parseInt(e.target.value)); }}></IonInput>
                    <IonButton //type="submit" 
                        className="ion-text-center" color='secondary' onClick={() => del(Id)}> supprimer element </IonButton>
                </IonItem>

            
            {/* ********************************************************************************* */}

            <div className='danaria'></div>




            {/* {userInfo.filepreview !== null ?
                <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" />
                : null} */}
        </>
    )
}
export default Nouv2;
export const {zer} = Nouv2;