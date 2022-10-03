import React, { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Modal } from 'react-bootstrap';
import './styles.css'
import document from './document.pdf'

const Home = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const html = `<center>
    <table>
        <tr>
            <td colSpan="4" rowSpan="3">
                <b>
                    Max Electronics
                </b><br />
                Shiva Nagar banglore<br/>
                Contact Number: 9701118976<br/>
                Email: max@electronics.com<br/>
                www.maxelectronics.com
            </td>
            <td colSpan="2">
                Voucher No.<br/>
                <b>1</b>
            </td>
            <td colSpan="2">
                Dated<br/>
                <b>17-Mar-2020</b>
            </td>
        </tr>
        <tr>
            <td colSpan="2"></td>
            <td colSpan="2">
                <b>15 Days via cheque</b>                
            </td>
        </tr>
        <tr>
            <td colSpan="2">
                Circular No.<br/>
                <b>1</b>
            </td>
            <td colSpan="2">Other Reference(s)</td>
        </tr>
        <tr>
            <td colSpan="4" rowSpan="2">
                Dispatch To<br/>
                <b> High Tech Computer World </b><br/>
                Banglore,<br/>
                Karnataka
            </td>
            <td colSpan="2">Dispatch through <br/> <b> By Road </b></td>
            <td colSpan="2">Destination</td>
        </tr>
        <tr>
            <td colSpan="4" rowSpan="2">
                Terms of Delivery<br/>
                <b>Ex-Factory Delivery</b>  
            </td>
        </tr>
        <tr>
            <td colSpan="4">
                Dispatch To<br/>
                <b> High Tech Computer World </b><br/>
                Banglore,<br/>
                Karnataka
            </td>
        </tr>
        <tr>
            <td>SL</td>
            <td>Items</td>
            <td>Due DT</td>
            <td>Qty</td>
            <td>Rate</td>
            <td>Per</td>
            <td>Dis%</td>
            <td>Amt</td>
        </tr>
        <tr>
            <td>1</td>
            <td>Asus 15.6 Inch Monitor</td>
            <td>3 Days</td>
            <td>10 Nos</td>
            <td>7020</td>
            <td>Nos</td>
            <td>10%</td>
            <td>70000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Dell 12 Inch Monitor</td>
            <td>3 Days</td>
            <td>10 Nos</td>
            <td>8000</td>
            <td>Nos</td>
            <td>10%</td>
            <td>80000</td>
        </tr>
        <tr>
            <td colSpan="3">Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>1,50,000</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td colSpan="4" rowSpan="4"></td>
        </tr>
        <tr>
            <td colSpan="4">Max Electronics</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table>
</center>`
    return (

        <div classNameNameName='container' >
            <center>
                <div ref={componentRef} style={{ marginTop: '50px', marginBottom: '50px' }} dangerouslySetInnerHTML={{ __html: html }}>

                </div>
                <Button onClick={handlePrint} style={{ marginRight: '30px', padding: '10px 20px' }}>Download</Button>
                <ViewPdf html={html} />
            </center>
        </div >
    );
};

export default Home;

function ViewPdf({ html }) {
    const [show, setshow] = useState(false);
    const handleClose = () => setshow(false);

    console.log(html)
    return (
        <>
            <a className='btn btn-primary' href={document} style={{ marginRight: '30px', padding: '10px 20px' }}>View PDF</a>
            <Modal show={show} size="lg" onHide={handleClose} keyboard={false} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Body>
                    <div classNameName='container' style={{ margin: '100px' }} dangerouslySetInnerHTML={{ __html: html }}>

                    </div><br />
                </Modal.Body>
            </Modal>
        </>
    )
}