import React from "react";
import Flex from "../Flex/Flex";
import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import PageRoute from "../PageRoute/PageRoute";
import { MdArrowForwardIos } from "react-icons/md";

const SignInForm = () => {
  return (
    <>
      <Container>
        <div className="border-b border-gray">
          <PageTitle title={"logIn"} />
          <PageRoute routes={"Home > logIn"} />
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
                Email Address
              </label>
              <input
                type="email"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none focus:bg-none"
                placeholder="company@domain.com"
              />
            </div>
            <div className="w-full">
              <label className="font-primaryFont font-bold text-base text-black">
                Password
              </label>
              <input
                type="password"
                className="font-primaryFont font-normal text-sm text-gray w-full pt-3 pb-4 border-b border-gray outline-none bg-none"
                placeholder="*****"
              />
            </div>
          </Flex>
          <button className="font-primaryFont font-bold text-sm text-black py-4 px-20 border border-gray mt-10">
            Log In
          </button>
        </div>
        <div className="mb-16">
          <h2 className="font-primaryFont text-4xl font-bold mt-10 mb-10">
            New Customer
          </h2>
          <p className="font-primaryFont font-normal text-base text-gray w-[644px] pb-16 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the.
          </p>
          <button className="font-primaryFont font-bold text-sm text-white py-4 px-20 border border-gray bg-black">
            Continue
          </button>
        </div>
      </Container>
    </>
  );
};

export default SignInForm;
