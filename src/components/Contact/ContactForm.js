"use client";

import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-12 text-base text-justify xs:text-lg sm:text-xl font-medium leading-relaxed font-in">
      Hola! Mi nombre es
      <input type="text" placeholder="nombre" {...register("name", { required: true, maxLength: 80 })} className="outline-none font-bold border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" />
      y quiero discutir un proyecto potencial. Puede enviarme un correo electrónico a
      <input type="email" placeholder="ejemplo@email" {...register("email", {})}  className="outline-none font-bold mt-4 border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" />
      o ponte en contacto conmigo en
      <input type="tel" placeholder="telefono" {...register("phone number", {})} className="outline-none font-bold mt-4 border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" />
      Aquí está algún detalle sobre mi proyeto: <br />
      <textarea {...register("project details", {})} placeholder="Mi proyecto trata de..." rows={3} className="w-full font-bold mt-4 outline-none border-0 p-0 mx-0 focus:ring-0  placeholder:text-lg border-b border-gray focus:border-gray bg-transparent" />
      <input type="submit" value="Enviar" className="mt-8 font-bold inline-block capitalize text-lg hover:bg-orange-200 sm:text-xl py-2 sm:py-3 px-6 sm:px-8 border-2 border-solid border-dark dark:border-light dark:hover:text-dark rounded cursor-pointer" />
    </form>
  );
}
