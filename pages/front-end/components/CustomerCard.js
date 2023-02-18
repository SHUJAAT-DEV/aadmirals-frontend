// import "../style.scss";
import Image from 'next/image';
import imgs from '../../../Assets/client pics.svg';

function CustomerCard(){
 return(
        <div className="card-container">
            <div className="customer-img">
                <Image src={imgs}/>
            </div>
            <div className="feedbacks">
                <p>
                AAdmirals provides superior Houston George Bush Airport Transport black car service, including a George Bush Airport shuttle service, guaranteed to be on time. Our professional chauffeurs are vetted, background-checked, and experienced, and 
                </p>
            </div>
            <div className="card-footer">
                <h4>abc</h4>
            </div>
        </div>
 );
}
export default CustomerCard;