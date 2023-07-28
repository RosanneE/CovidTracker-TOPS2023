import React, { createContext, useState } from "react"

// Creates context to manage form state and functions
export const FormContext = createContext();

// Context provider component
export const FormProvider = ({ children }) => {
    
    const [newSite, setNewSite] = useState({
        org_name: "",
        contact_name: "",
        email: "",
        site_origin: "",
        home_link: "",
        positive_test_link: "",
        negative_test_link: "",
        more_info_link: "",
      });


      const handleChange = (event) => {
        setNewSite({
          ...newSite,
          [event.target.name]: event.target.value,
        });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // form submission goes here
      };

      return (
        <FormContext.Provider value ={{ newSite, handleChange, handleSubmit }} >
            {children}
        </FormContext.Provider>
      )
}