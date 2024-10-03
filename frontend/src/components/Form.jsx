"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { countryList } from "../data/countryList";

const schema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .optional()
    .refine(
      (value) => !value || /^\+?[1-9]\d{1,14}$/.test(value),
      "Invalid phone number"
    ),
  company: z.string().min(2, { message: "Company is required" }),
  designation: z.string().optional(),
  country: z.string().min(2, { message: "Country is required" }),
});

const Form = ({ closeDialog, type, id, title }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Select Country");

  const filteredCountries = countryList
    .filter((country) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 4); // Show only 4 countries initially

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
    setValue("country", country);
  };

  const onSubmit = async (data) => {
    console.log("submit clicked");
    try {
      const payload = {
        ...data,
        type: type,
        title: title,
      };
      const response = await fetch(
        "https://insimine.com/admin/api/form-submit/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      if (type === "white-paper") {
        const whitePaperResponse = await fetch(
          `https://insimine.com/admin/api/white-paper/${id}`
        );
        if (!whitePaperResponse.ok) {
          throw new Error("Failed to fetch white paper details");
        }

        const whitePaperData = await whitePaperResponse.json();
        const pdfUrl = whitePaperData.pdf;

        window.open(pdfUrl, "_blank");
        closeDialog();
      } else {
        if (closeDialog) closeDialog();
        navigate(`/${type}/${id}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="flex flex-row gap-4 justify-between">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
            />
            {errors.firstName && (
              <p className="text-red-600 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
            />
            {errors.lastName && (
              <p className="text-red-600 text-sm">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Phone Number (optional)
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-row gap-4 justify-between">
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              {...register("company")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
            />
            {errors.company && (
              <p className="text-red-600 text-sm">{errors.company.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="designation"
              className="block text-sm font-medium text-gray-700 text-left"
            >
              Designation (optional)
            </label>
            <input
              id="designation"
              type="text"
              {...register("designation")}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm"
            />
            {errors.designation && (
              <p className="text-red-600 text-sm">
                {errors.designation.message}
              </p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Country
          </label>
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="cursor-pointer border p-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm dark:text-white dark:bg-gray-800"
          >
            {selectedCountry} {/* Display the selected country */}
          </div>
          {isDropdownOpen && (
            <ul className="border p-2 max-h-60 overflow-auto bg-white dark:bg-gray-800 text-black dark:text-white">
              <li>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="p-2 w-full bg-white dark:bg-gray-800 text-black dark:text-white"
                  placeholder="Search countries..."
                />
              </li>
              {filteredCountries.map((country, index) => (
                <li
                  key={index}
                  onClick={() => handleCountrySelect(country)}
                  className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer text-black dark:text-white"
                >
                  {country}
                </li>
              ))}
            </ul>
          )}
          {errors.country && (
            <p className="text-red-600 text-sm">{errors.country.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-black py-2 px-4 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 mt-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
