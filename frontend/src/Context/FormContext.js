import React, { createContext, useState, useEffect } from "react";

// Creates context to manage form state and functions
export const FormContext = createContext();

// Context provider component
export const FormProvider = ({ children }) => {
  
  const initialPartnerState = {
    org_name: "",
    contact_name: "",
    email: "",
    site_origin: "",
    home_link: "",
    positive_test_link: "",
    negative_test_link: "",
    more_info_link: "",
    logo: "",
    cover_photo: "",
    custom_message: "",
    social_sharing_message: "",
    color_theme: "",
  }

  const storedPartnerState = JSON.parse(localStorage.getItem("partnerFormState"))

  //Partners
  const [newSite, setNewSite] = useState(storedPartnerState || initialPartnerState);

  useEffect(() => {
    localStorage.setItem("partnerFormState", JSON.stringify(newSite))
  }, [newSite])
  const handlePartnerChange = (event) => {
    setNewSite({
      ...newSite,
      [event.target.name]: event.target.value,
    });
  };
  // Either here or on review and submit page need to navigate to requestConfirmation page if POST success or specify error otherwise
  const handleReviewSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(newSite);

    fetch("http://localhost:5423/partners", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((newPartner) => {
        console.log("New partner created: ", newPartner);
      })
      .catch((err) => {
        console.error("Error creating new partner: ", err);
      });
  };

  //Users
  const [newUser, setNewUser] = useState({
    test_result: null,
    test_taken: null,
    test_date: null,
    zipcode: null,
    symptoms: null,
    sex: null,
    race: null,
    ethnicity: null,
    reminder: null,
    first_name: null,
    middle_initial: null,
    last_name: null,
    street_address: null,
    city: null,
    state: null,
    email: null,
    phone_number: null,
  });

  const handleUserChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();

    const data = JSON.stringify(newUser);

    fetch("http://localhost:5423/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((res) => res.json())
      .then((newUser) => {
        console.log("New user created: ", newUser);
      })
      .catch((err) => {
        console.error("Error creating new user: ", err);
      });
  };

  return (
    <FormContext.Provider
      value={{
        newSite,
        newUser,
        handlePartnerChange,
        handleReviewSubmit,
        handleUserChange,
        handleUserSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
