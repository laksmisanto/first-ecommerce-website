import React from "react";
import Container from "../Container/Container";
import Link from "next/link";
import Grid from "../Grid/Grid";
import Flex from "../Flex/Flex";

const SignUpForm = () => {
  let initialvalues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    telephone: "",
    address: "",
    city: "",
    postCode: "",
    division: "",
    district: "",
    bYear: "",
    bMonth: "",
    bDate: "",
  };
  return (
    <>
      <form action="">
        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            Returning Customer
          </h2>
          <Grid className="w-1/2 gap-y-6">
            <Grid className="grid-cols-2 gap-8">
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  First Name
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                  placeholder="Last Name"
                />
              </div>
            </Grid>
            <Grid className="grid-cols-2 gap-8">
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Email Address
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                  placeholder="company@domain.com"
                />
              </div>
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Telephone
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                  placeholder="Your phone number"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            New Customer
          </h2>
          <Grid className="w-1/2 gap-y-6">
            <Grid className="grid-cols-2 gap-8">
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Address 1
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                  placeholder="4279 Zboncak Port Suite 6212"
                />
              </div>
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Address 2
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                  placeholder="--"
                />
              </div>
            </Grid>
            <Grid className="grid-cols-2 gap-8">
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  City
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                  placeholder="Your City"
                />
              </div>
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Post Code
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                  placeholder="05228"
                />
              </div>
            </Grid>
            <Grid className="grid-cols-2 gap-8">
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  Division
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                  placeholder="Your City"
                />
              </div>
              <div>
                <label className="font-primaryFont font-bold text-base text-black">
                  District
                </label>
                <input
                  type="text"
                  className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                  placeholder="05228"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            Your Password
          </h2>
          <Grid className="w-1/2 grid-cols-2 gap-8">
            <div>
              <label className="font-primaryFont font-bold text-base text-black">
                Password
              </label>
              <input
                type="password"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="password"
              />
            </div>
            <div>
              <label className="font-primaryFont font-bold text-base text-black">
                Repeat Password
              </label>
              <input
                type="password"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="Repeat password"
              />
            </div>
          </Grid>
        </div>
        <div className="pt-16">
          <Flex className="mb-6">
            <span>Date of Birth</span>
            <Grid className="ml-10 w-[300px] grid-cols-3 gap-x-4">
              <select className="text-center border-b border-gray outline-none">
                <option value="">1990</option>
                <option value="">1991</option>
                <option value="">1992</option>
                <option value="">1993</option>
                <option value="">1994</option>
                <option value="">1995</option>
                <option value="">1996</option>
                <option value="">1997</option>
                <option value="">1998</option>
                <option value="">1999</option>
                <option value="">2000</option>
                <option value="">2001</option>
                <option value="">2002</option>
                <option value="">2003</option>
                <option value="">2004</option>
                <option value="">2005</option>
                <option value="">2006</option>
              </select>
              <select className="text-center border-b border-gray outline-none">
                <option value="">1990</option>
                <option value="">1991</option>
                <option value="">1992</option>
                <option value="">1993</option>
                <option value="">1994</option>
                <option value="">1995</option>
                <option value="">1996</option>
                <option value="">1997</option>
                <option value="">1998</option>
                <option value="">1999</option>
                <option value="">2000</option>
                <option value="">2001</option>
                <option value="">2002</option>
                <option value="">2003</option>
                <option value="">2004</option>
                <option value="">2005</option>
                <option value="">2006</option>
              </select>
              <select className="text-center border-b border-gray outline-none">
                <option value="">1990</option>
                <option value="">1991</option>
                <option value="">1992</option>
                <option value="">1993</option>
                <option value="">1994</option>
                <option value="">1995</option>
                <option value="">1996</option>
                <option value="">1997</option>
                <option value="">1998</option>
                <option value="">1999</option>
                <option value="">2000</option>
                <option value="">2001</option>
                <option value="">2002</option>
                <option value="">2003</option>
                <option value="">2004</option>
                <option value="">2005</option>
                <option value="">2006</option>
              </select>
            </Grid>
          </Flex>
          <div>
            <input type="checkbox" name="agree" id="agree" />
            <label className="font-primaryFont font-normal text-sm text-gray pl-4">
              I have read and agree to the Privacy Policy
            </label>
          </div>
          <div className="pt-6">
            <label className="font-primaryFont font-normal text-sm text-gray pr-8">
              Subscribe Newsletter
            </label>
            <input type="checkbox" name="agree" id="agree" />
            <label className="font-primaryFont font-normal text-sm text-gray pr-8 pl-4">
              Yes
            </label>
            <input type="checkbox" name="agree" id="agree" />
            <label className="font-primaryFont font-normal text-sm text-gray pl-4">
              No
            </label>
          </div>
          <button className="font-primaryFont font-bold text-sm text-black py-4 px-20 border border-gray mt-10">
            Log In
          </button>
          <div>
            <span>I have alredy account</span>
            <Link href={"/pages/signin"} className="ml-2 text-blue-500">
              signUp
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
