import React from "react";
import Carousel from "../../components/Carousel";
import Campaigns from "@/components/Campaigns";
import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Input from "@/components/form/Input";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const Index = () => {
  return (
    <div>
      <React.Fragment>
        <Carousel />
        <Campaigns />
        <MenuWrapper />
        <About />
        <Reservation />
        <Customers />
      </React.Fragment>
    </div>
  );
};

export default Index;
