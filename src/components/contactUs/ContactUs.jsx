'use client';
import React, { useState } from 'react';
import { usePathname } from "next/navigation";
import Image from 'next/image';
import axios from 'axios';
import { MantineProvider, Container, Button } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import Swal from 'sweetalert2';

export function FeatureItem({ img, title, subtitle, spacing = '30' }) {
  return (
    <div className="col">
      <div className={`mainfeature__item text-center mb-${spacing}`}>
        <div className="mainfeature__icon">
          {/* <Image src={`/assets/img/icon/feature-icon-${img}.svg`} alt="icon" width={40} height={40}/> */}
        </div>
        <div className="mainfeature__content">
          <h4 className="mainfeature__title ibx-font" style={{ fontSize: "30px", textDecoration: "Capitalize" }}>{title}</h4>
          <p className='text-muted fw-bold' dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
      </div>
    </div>
  );
}

const fieldStyle = {
  outline: "none",
  border: "none",
  background: "none",
  backgroundColor: "none",
  borderBottom: "1px solid #00344c",
  width:"300px"
};

const TextAreastyle = {
  resize: 'vertical',
  background: 'none',
  border: 'none',
  width: '100%',
  minHeight: '119px',
  borderBottom: '1px solid #00344c',
};

const ContactUs = () => {
  const pathname = usePathname();
  const activeLocale = pathname.split("/")[1] || "en";
  const contactFields = {
    en: {
      title: "Contact Us",
      fields: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send Message",
      },
    },
    ar: {
      title: "اتصل بنا",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "إرسال الرسالة",
      },
    }
  };
  const currentContentLang = contactFields[activeLocale];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false); // For button loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post('/api/send-email', formData);
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: activeLocale === "en" ? "Success" : "نجاح",
          text: activeLocale === "en" ? "Message sent successfully!" : "تم إرسال الرسالة بنجاح!",
          confirmButtonText: 'OK',
        });
        setFormData({ name: '', email: '', message: '' }); // Reset form
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: activeLocale === "en" ? "Error" : "خطأ",
        text: activeLocale === "en" ? "Failed to send message." : "فشل في إرسال الرسالة.",
        confirmButtonText: 'OK',
      });
    } finally {
      setLoading(false); // End loading
    }
  };
  const contactDetails = {
    en: {
      title: "Contact Us",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      address: {
        title: "Address",
        subtitle: "Amman Shafa Badran"
      },
      mobile: {
        title: "Mobile/Tel",
        subtitle: "00962 6 523 00 11 <br> 00962 77 523 00 11"
      },
      email: {
        title: "Email",
        subtitle: "Info@aqardrug.com"
      }
    },
    ar: {
      title: "اتصل بنا",
      description: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.",
      address: {
        title: "العنوان",
        subtitle: "عمان , شفا بدران"
      },
      mobile: {
        title: "الموبايل",
        subtitle:"00962 6 523 00 11 <br> 00962 77 523 00 11"
      },
      email: {
        title: "البريد الإلكتروني",
        subtitle: "Info@aqardrug.com"
      }
    }
  };

  const currentContent = contactDetails[activeLocale];

  return (
    <MantineProvider>
      <Notifications />
      <section className="contact-us-section text-center pt-70 pb-70" style={{ backgroundColor: "#F2F2F6" }}>
        <h1 className='ibx-font' style={{ fontSize: "50px", fontWeight: "900" }}>{currentContent.title}</h1>
        <Container size="md" className="my-4">
          <form onSubmit={handleSubmit} className='contactForm'>
            <div className="d-flex flex-column flex-md-row gap-5 mb-4 justify-content-between ">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={fieldStyle}
                  placeholder={currentContentLang.fields.name}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={fieldStyle}
                  placeholder={currentContentLang.fields.email}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className='tArea mb-4'>
              <textarea
                id="message"
                name="message"
                style={TextAreastyle}
                placeholder={currentContentLang.fields.message}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className='tp-btn'>
            {loading &&<span class="loader"></span> }
              {!loading && currentContentLang.fields.submit}
            </button>
          </form>
        </Container>

        <div className="container">
          <div className="row justify-content-center pt-50 pb-50">
            <div className="col-sm-4 col-12">
              <FeatureItem img="1" title={currentContent.email.title} subtitle={currentContent.email.subtitle} />
            </div>
            <div className="col-sm-4 col-12">
              <FeatureItem img="1" title={currentContent.address.title} subtitle={currentContent.address.subtitle} />
            </div>
            <div className="col-sm-4 col-12">
              <FeatureItem img="2" title={currentContent.mobile.title} subtitle={currentContent.mobile.subtitle} />
            </div>
          </div>
        </div>
      </section>
    </MantineProvider>
  );
};

export default ContactUs;
