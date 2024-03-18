declare module 'html-to-docx' {
    type Options = {
      // Define options here if needed
    };
  
    type ConversionResult = string;
  
    function htmlToDocx(html: string, options?: Options): Promise<ConversionResult>;
  
    export = htmlToDocx;
  }
  