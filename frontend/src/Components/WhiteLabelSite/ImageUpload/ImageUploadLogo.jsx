// import { createClient } from '@supabase/supabase-js'
// import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import supabase from '../../Supabase/Supabase';


const CDNURL = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/"


export default function ImageUploadLogo({ setlogoUrl }) {



  async function handleUpload(event) {
    const imageFile = event.target.files[0]
    console.log("upload", event.target.files[0]);
    const { data, error } = await supabase.storage
      .from('images')
      .upload(uuidv4() + ".image", imageFile) //uuidv4() creates random string
    console.log('data', data)
    if (error) {
      console.log(error)
      alert("Error uploading file to Supabase")
    } else if (data) {
      const imageKey = data.path;
      const imageURL = CDNURL + imageKey;
      setlogoUrl(imageURL);
      console.log("Image URL:", imageURL);
    }
  }


  return (
    <div>
      <input type="file" accept="image/*" onChange={((e) => handleUpload(e))} />
    </div>
  );


}


