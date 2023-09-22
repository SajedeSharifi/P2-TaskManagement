import ticket from '../../../assets/ticket.webp'
import service from '../../../assets/system.webp'
import support from '../../../assets/comunicate.webp'

import './partTop.style.css'

const PartTop = () => {
    return (
        <div className='achievement'>

            <img
                src={ticket}
                alt='alibaba rate'
                width="89"
                height="89"
                className='d-inline-block align-top'
            />
            <div className='d-inline-block'>
                <h3 >رتبه یک سفر</h3>
                <span>معتبرترین عرضه کننده محصولات گردشگری ایران</span>
            </div>


            <img
                src={service}
                alt='alibaba service'
                width="89"
                height="89"
                className='d-inline-block align-top me-5'
            />
            <div className='d-inline-block'>
                <h3>همسفر هر سفر</h3>
                <span>ارائه تمامی خدمات سفر (پرواز،قطار، اتوبوس،هتل و تور)</span>
            </div>

            <img
                src={support}
                alt='alibaba support'
                width="89"
                height="89"
                className='d-inline-block align-top me-5'
            />
            <div className='d-inline-block'>
                <h3>همسفر همه لحظات سفر</h3>
                <span>پشتیبانی و همراهی 23 ساعته در تمامی مراحل سفر</span>
            </div>

        </div>
    );
}

export default PartTop;