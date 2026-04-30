module.exports = {
    name: "Domestic Bliss Cleaning Services",
    email: "info@domesticblissdurham.co.uk",
    phoneForTel: "0191-555-0123",
    phoneFormatted: "0191 555 0123",
    address: {
        lineOne: "12 Durham Business Park",
        lineTwo: "Front Street",
        city: "Durham",
        state: "County Durham",
        zip: "DH1 1TH",
        country: "UK",
        mapLink: "https://maps.app.goo.gl/realistic-link-here",
    },
    socials: {
        facebook: "https://www.facebook.com/domesticbliss",
        instagram: "https://www.instagram.com/domesticbliss",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: process.env.URL || "https://www.domesticblisscleaning.co.uk",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};