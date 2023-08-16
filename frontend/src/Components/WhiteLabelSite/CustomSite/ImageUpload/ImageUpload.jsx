import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react'




const supabase = createClient("https://rouoteoqwehgnrgbeigu.supabase.co", process.env.SUPABASE_API_KEY);

const CDNURL ="https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/"


export default function ImageUpload() {

  const [logoUrl, setlogoUrl ] = useState("")

  async function handleUpload(event) {
    const imageFile = event.target.files[0]
    console.log("upload", event.target.files[0]);
    const { data, error } = await supabase.storage
      .from('images')
      .upload(uuidv4() + ".image", imageFile) //uuidv4() creates random string
      console.log('data', data)
      if(error) {
        console.log(error)
        alert("Error uploading file to Supabase")
      } else if(data) {
        const imageKey = data.path; // Assuming the response contains the Key property
        const imageURL = CDNURL + imageKey;
        setlogoUrl(imageURL);
        console.log("Image URL:", imageURL);
      }
  }


    return (
      <div>
        <h1>Image Upload Test Area</h1>
        <input type="file" accept="image/*" onChange={((e) => handleUpload(e))} />
        <img src={logoUrl} alt="" />
      </div>
    );

    
  }


