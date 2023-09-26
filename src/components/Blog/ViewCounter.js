"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useEffect, useState } from "react";

const supabase = createClientComponentClient();

const ViewCounter = ({ slug, noCount = false, showCount = true }) => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const incrementView = async () => {
      try {
        let { error } = await supabase.rpc("increment", {
          slug_text:slug ,
        });

        if (error){
            console.error("Error al incrementar el número de vistas dentro del bloque try:", error)
        }        
      } catch (error) {
        console.error("Se ha producido un error al incrementar el recuento de vistas:", error);
      }
    };

    if(!noCount){
        incrementView();
    }
  }, [slug, noCount]);

  useEffect(() => {
    const getViews = async () => {
      try {
        let { data, error } = await supabase.from('views').select('count').match({slug: slug}).single();

        if (error){
            console.error("Error al incrementar el número de vistas dentro del bloque try:", error)
        };

        setViews(data ? data.count : 0);        
      } catch (error) {
        console.error("Se ha producido un error al incrementar el recuento de vistas:", error);
      }
    };

    getViews();
  }, [slug]);

  if (showCount) {
    return <div>{views} views</div>;
  } else {
    return null;
  }
};

export default ViewCounter;
