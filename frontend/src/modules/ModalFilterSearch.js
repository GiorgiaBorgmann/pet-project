import React, { useState } from 'react';
import Modal from 'react-modal';
import logo from '../img/logo.jpg'
import singin from '../img/sing-in-blue.PNG'
import { HiFilter } from 'react-icons/fa'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f2dcdd',
        width: '30%'
    },
    overlay: {
        backgroundColor: 'rgb(192,192,192, 0.4)',

    }
};
const ModalFilerSearch = () => {

    const [modalIsOpen, setIsOpen] = useState(false)
    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <div className="filter-modal" onClick={openModal}>Filter</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="close-button" onClick={closeModal}>X</div>
                <div className="logo-modal"><img src={logo} /></div>
                <div className="search-title">Filter your search</div>
                <form className="form-search-input">
                    <div className="top-search">
                        <label className="label-search">Adoption Status</label>
                        <select id="dog-status" name="dog-status">
                            <option value="Ready to adopt">Ready to adopt</option>
                            <option value="Foster dog">Foster dog</option>
                        </select>
                    </div>
                    <div className="mesures" >
                        <p className="label-search">Height (cm)</p>
                        <div className="max-min">
                            <label> Max </label>
                            <input type="number" />
                            <label> Min</label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="mesures">
                        <p className="label-search">Weight (kg)</p>
                        <div className="max-min">
                            <label> Max </label>
                            <input type="number" />
                            <label> Min </label>
                            <input type="number" />
                        </div>
                    </div>
                    <div className="bottom-search">
                        <label className="label-search"> Breed </label>
                        <input type="text" />
                        <label className="label-search">Name</label>
                        <input type="text" />
                    </div>
                    <button className="search-btn" type="submit">Search</button>

                </form>


            </Modal>
        </div>
    )
}
export default ModalFilerSearch