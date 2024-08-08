import React, { useEffect, useState } from 'react';
import capitalizeFirstLetter from '../../../functions/capinalizeFirstLetter';
import { CustomerDataStyled } from './CustomerDataStyled';
import ModifyCustomerData from '../modifyCustomerData/ModifyCustomerData';
import ChangePassword from '../changePassword/ChangePassword';

function CustomerData() {
  const [customerData, setCustomerData] = useState([]);
  const [showModifyCustomerDataForm, setShowModifyCustomerDataForm] =
    useState(false);
  const [showChangePasswordForm, setShowChangePasswordForm] = useState(false);

  useEffect(() => {
    const customerData = JSON.parse(localStorage.getItem('userData'));
    if (customerData) {
      setCustomerData(customerData);
    }
  }, []);

  return (
    <>
      <CustomerDataStyled>
        <div className='col-12 artTitle'>
          <h2>Datele contului tau</h2>
        </div>

        <div className='customerDetailsList'>
          <div className='customerImage'>
            <img
              src='https://www.aroma-pasiunii.intorsura.ro/media/icons/userAvatar.png'
              alt='Aroma Pasiunii'
            />
          </div>
          <div className='customerData'>
            <div className='customerName'>
              <span>Nume: </span>
              <h3>
                {capitalizeFirstLetter(customerData.first_name)}{' '}
                {capitalizeFirstLetter(customerData.last_name)}
              </h3>
            </div>
            <div className='customerDetails'>
              <span>Utilizator:</span> {customerData.username}
            </div>
            <div className='customerDetails'>
              <span>Email:</span> {customerData.email}
            </div>
            <div className='customerDetails'>
              <span>Telefon:</span> {customerData.phone}
            </div>
            <div className='customerDetails'>
              <span>Adresa:</span> {customerData.city}
              {customerData.street && ', Strada: ' + customerData.street}
              {customerData.street_nr && ', Nr.: ' + customerData.street_nr}
              {customerData.building && ', Bloc: ' + customerData.building}
              {customerData.staircase && ', Sc.: ' + customerData.staircase}
              {customerData.apartment && ', Ap.: ' + customerData.apartment}
            </div>

            {customerData.intercom && (
              <div>
                <span>Nr. interfon.:</span>
                {customerData.intercom}
              </div>
            )}
          </div>
          <div className='customerButtons'>
            <button
              className='modifyData'
              onClick={() => {
                setShowModifyCustomerDataForm(true);
                setShowChangePasswordForm(false);
              }}
            >
              Modifica date
            </button>
            <button
              className='passwordReset'
              onClick={() => {
                setShowChangePasswordForm(true);
                setShowModifyCustomerDataForm(false);
              }}
            >
              Schimba parola
            </button>
          </div>
        </div>
        {showModifyCustomerDataForm && (
          <ModifyCustomerData
            cancel={() => setShowModifyCustomerDataForm(false)}
          />
        )}
        {showChangePasswordForm && (
          <ChangePassword cancel={() => setShowChangePasswordForm(false)} />
        )}
      </CustomerDataStyled>
    </>
  );
}

export default CustomerData;
