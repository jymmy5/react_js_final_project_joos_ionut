import WebFont from 'webfontloader';

export const loadGoogleFonts = () => {
  WebFont.load({
      google: {
          families: ['Roboto:400,500,700', 'Lato:400,700', 'Open Sans Web:300..800;1,300..800&display=swap', 'Oleo Script Web:400..700', 'Montserrat:ital,wght@0,100..900;1,100..900&display=swap', 'Bebas Neue&display=swap', 'sans-serif'] // Specify the Google Fonts you want to load and their variations
      }
  });
};
