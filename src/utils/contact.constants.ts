import { Mail, Phone, MapPin } from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rajagarwalgood@gmail.com",
    href: "mailto:rajagarwalgood@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-6388056219",
    href: "tel:+916388056219",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, UP",
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Lucknow, Uttar Pradesh")}`,
  },
];
