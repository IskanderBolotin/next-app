"use client";
import { useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import CallbackForm from "@/components/callbackForm/callbackForm";
import Modal from "@/components/modal/modal";
import { Transition } from "react-transition-group";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };

  return (
    <html lang="en">
      <body className="fullScreen" id="custom-scrollbar">
        <Header btnHandler={handleModalOpen} />
        <main className="siteContent">{children}</main>
        <Footer />
        {isModalActive && (
          <Modal onClose={handleModalClose}>
            <CallbackForm />
          </Modal>
        )}
      </body>
    </html>
  );
}
