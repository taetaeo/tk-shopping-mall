import React, { ReactNode } from "react";
import Head from "next/head";

const Seo = ({ children }: ReactNode | any) => <Head>{children} </Head>;

export default Seo;
