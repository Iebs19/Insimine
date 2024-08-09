"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const countries = ["United States", "Canada", "United Kingdom", "Australia", "India"];

const schema = z.object({
//   firstname: z.string().nonempty("First name is required"),
  firstname: z.string().min(2, { message: "First name is required" }),
  lastname: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email("Invalid email address"),
  phone: z.string()
  .optional()
  .refine(value => !value || /^\+?[1-9]\d{1,14}$/.test(value), "Invalid phone number"),
  company: z.string().min(2, { message: "Company is required" }),
  designation: z.string().optional(),
  country: z.string().min(2, { message: "Country is required" }),
});

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    // Example of handling form submission
    console.log("Form data:", data);
    // Implement your form submission logic here
    // Make sure to sanitize inputs on the server-side as well
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex gap-4">

        <div className="mb-4">
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            id="firstname"
            placeholder="John"
            type="text"
            {...register("firstname")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.firstname && <p className="text-red-600 text-sm">{errors.firstname.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Doe"
            {...register("lastname")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.lastname && <p className="text-red-600 text-sm">{errors.lastname.message}</p>}
        </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@email.com"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number (optional)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="(123) 456-7890"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.phone && <p className="text-red-600 text-sm">{errors.phone.message}</p>}
        </div>
<div className="flex gap-4">

        <div className="mb-4">
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            id="company"
            type="text"
            {...register("company")}
            placeholder="Acme Inc."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.company && <p className="text-red-600 text-sm">{errors.company.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="designation" className="block text-sm font-medium text-gray-700">
            Designation (optional)
          </label>
          <input
            id="designation"
            type="text"
            placeholder="Software Engineer"
            {...register("designation")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.designation && <p className="text-red-600 text-sm">{errors.designation.message}</p>}
        </div>
</div>

        <div className="mb-4">
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            id="country"
            {...register("country")}
            
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm ]"
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-600 text-sm">{errors.country.message}</p>}
        </div>

        <button
          type="submit"
          className="inline-flex justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-500 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
