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
        logo: "",
        cover_photo: "",
        custom_message: "",
        social_sharing_message: "",
        color_theme: "",
      });


      const handleChange = (event) => {
        setNewSite({
          ...newSite,
          [event.target.name]: event.target.value,
        });
      };
      // Either here or on review and submit page need to navigate to requestConfirmation page if POST success or specify error otherwise
      const handleReviewSubmit = (event) => {
        event.preventDefault();
        
        const data = JSON.stringify(newSite);

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
        <FormContext.Provider value ={{ newSite, handleChange, handleReviewSubmit }} >
            {children}
        </FormContext.Provider>
      )
}