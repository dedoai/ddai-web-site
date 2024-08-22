---
title: Contact
spanTitle: Us.
meta_title: "dedoAI | Contacts"
description: "Have questions about our technology or potential partnerships? Reach out to us! Our dedicated team is ready to provide answers and foster collaboration."
keywords: [contacts, get in touch, form, partnership, support, media, inquiry, dedoai, ai data exchange, smartcontracts, blockchain]
date: 2024-07-16T06:00:00.000Z
draft: false
noheader: true

p1: "Whether you're curious about our technology, interested in partnering with us, or simply have questions about the future of data, we're here to answer all your inquiries. Our team is dedicated to fostering open communication and collaboration with our community, potential partners, and anyone interested in the project."
subt: Get in
spanSubtitle: Touch.
p2: "To make it easier for you to get in touch, please fill out the form below with your details and your inquiry. Our team will get back to you as soon as possible. Or elese feel free to contact us at [hello@dedoai.org](<mailto:hello@dedoai.org>)"
cover: "/assets/images/static-map.png"
picker_img: "/assets/images/map-picker.png"

alt_cover: "/assets/images/static-map.png"
hide_map: false

form:
  action: https://api.dedoai.org/contact/mail
  items:
  - name: "first_name"
    type: "text"
    label: "First name"
    icon: "/assets/images/icons/contacts-form-ico-1.webp"
    placeholder: "Insert your Name"
  - name: "last_name"
    type: "text"
    label: "Last name"
    icon: "/assets/images/icons/contacts-form-ico-1.webp"
    placeholder: "Insert your Surname"
  - name: "email"
    type: "email"
    label: "Email"
    icon: "/assets/images/icons/contacts-form-ico-2.webp"
    placeholder: "Insert your Email"
  - name: "subject"
    type: "select"
    options:
     - label: "General Inquiry"
       value: "general_inq"
     - label: "Partnership Opportunities"
       value: "partnership"
     - label: "Technical Support"
       value: "support"
     - label: "Media & Press"
       value: "media_press"
     - label: "Other"
       value: "other"
    label: "Subject"
    icon: "/assets/images/icons/contacts-icon-1.webp"
    placeholder: "Select an option"
  - name: "message"
    type: "textarea"
    class: "double"
    label: "Message"
    icon: "/assets/images/icons/contacts-icon-1.webp"
    placeholder: "Write your message here"

  submit_text: "Send Message"
  message_sent: "Message Sent!"
  failed_sent: "Failed to Send"
  retry: "Retry!"
  
map_title: "Our Offices"
map_text: "If you prefer, you can also contact us directly at our office:"
map_l1: "HTLC Consulting FZC LLC"
 
---
{{< wrap >}}
{{< section "contacts">}}
{{< /wrap >}}
