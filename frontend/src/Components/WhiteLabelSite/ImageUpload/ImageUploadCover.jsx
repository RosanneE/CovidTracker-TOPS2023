// import { createClient } from '@supabase/supabase-js'
import { useContext } from 'react'
import { v4 as uuidv4 } from "uuid";
import supabase from '../../Supabase/Supabase'
import { FormContext } from "../../../Context/FormContext";;


const CDNURL = "https://rouoteoqwehgnrgbeigu.supabase.co/storage/v1/object/public/images/"


export default function ImageUploadCover() {
  const { handlePartnerChange } = useContext(FormContext);


  async function handleUpload(event) {
    const imageFile = event.target.files[0]
    // console.log("upload", event.target.files[0]);
    const { data, error } = await supabase.storage
      .from('images')
      .upload(uuidv4() + ".image", imageFile) //uuidv4() creates random string
    // console.log('data', data)
    if (error) {
      console.log(error)
      alert("Error uploading file to Supabase")
    } else if (data) {
      const imageKey = data.path;
      const imageURL = CDNURL + imageKey;
      handlePartnerChange({
        target: { name: "cover_photo", value: imageURL },
      });

      // console.log("Image URL:", imageURL);
    }
  }


  return (
    <div>
      <input type="file" accept="image/*" onChange={((e) => handleUpload(e))} />
    </div>
  );


}


