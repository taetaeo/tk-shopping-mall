import React, { ReactNode } from "react";
import Head from "next/head";

const Seo = ({ children }: ReactNode) => <Head children={children} />;

export default Seo;
