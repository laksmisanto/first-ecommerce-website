import React from "react";
import PageTitle from "../PageTitle/PageTitle";
import PageRoute from "../PageRoute/PageRoute";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";

const SignUpForm = () => {
  return (
    <>
      <Container>
        <div className="border-b border-gray">
          <PageTitle title={"sign Up"} />
          <PageRoute routes={"Home > signUp"} />
          <p className="font-primaryFont font-normal text-base text-gray w-[644px] pb-16 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the.
          </p>
        </div>
        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            Returning Customer
          </h2>
          <Flex className="w-1/2 grid-cols-1 gap-8">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                First Name
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="First Name"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Last Name
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="Last Name"
              />
            </div>
          </Flex>
          <Flex className="w-1/2 grid-cols-1 gap-8 mt-6">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Email Address
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="company@domain.com"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Telephone
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="Your phone number"
              />
            </div>
          </Flex>
        </div>
        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            New Customer
          </h2>
          <Flex className="w-1/2 grid-cols-1 gap-8">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Address 1
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="4279 Zboncak Port Suite 6212"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Address 2
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="--"
              />
            </div>
          </Flex>
          <Flex className="w-1/2 grid-cols-1 gap-8 mt-6">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                City
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="Your City"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Post Code
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="05228"
              />
            </div>
          </Flex>
          <Flex className="w-1/2 grid-cols-1 gap-8 mt-6">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Division
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="Your City"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                District
              </label>
              <input
                type="text"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="05228"
              />
            </div>
          </Flex>
        </div>

        <div className="border-b border-gray pb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            Your Password
          </h2>
          <Flex className="w-1/2 grid-cols-1 gap-8">
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Password
              </label>
              <input
                type="password"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="password"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Repeat Password
              </label>
              <input
                type="Repeat password"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="*****"
              />
            </div>
          </Flex>
        </div>
        <div className="pt-16">
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
        </div>
      </Container>
    </>
  );
};

export default SignUpForm;
