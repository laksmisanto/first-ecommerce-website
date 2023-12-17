import Container from "@/components/Container/Container";
import Flex from "@/components/Flex/Flex";
import Layout from "@/components/Layout/Layout";
import PageTitle from "@/components/PageTitle/PageTitle";
import SignUpForm from "@/components/SignUp/SignUp";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const signUp = () => {
  return (
    <>
      <Layout>
        <Container>
          <div className="border-b border-gray  pb-16 ">
            <PageTitle title={"sign Up"} />
            <Flex className="mt-3 mb-28 items-center gap-x-2">
              <Link href="/">Home</Link>
              <FaChevronRight />
              <p>SignIn</p>
            </Flex>
            <p className="font-primaryFont font-normal text-base text-gray w-[644px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the.
            </p>
          </div>
          <SignUpForm />
        </Container>
      </Layout>
    </>
  );
};

export default signUp;
