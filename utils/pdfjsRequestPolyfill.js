(function(proto){
    "use strict";
    /**
     * If the response method is not implemented for an XMLHttpRequest then we need to implement.
     * This is being done specifically for support with Internet Explorer <= 9 which doesn't
     * implement the XMLHttpRequest.response property until Internet Explorer 10.
     */
    if (!('response' in proto)) {
        /**
         * We have to define the property since this is how the response is accessed. This works in Internet Explorer >= 9.
         *
         * More Info: http://msdn.microsoft.com/en-us/library/ie/dd548687(v=vs.94).aspx
         */
        Object.defineProperty(proto, 'response', {
            get: function xmlHttpRequestResponseGet() {
                /**
                 * We are checking for the PDF content type here specifically because of PDF.JS which uses
                 * the byte data to display PDFs and we don't want to create malformed responses for other content types.
                 */
                var responseHeader = this.getResponseHeader('Content-Type');
                if (responseHeader && responseHeader.search(/application\/pdf/i) === 0) {
                    /**
                     * XMLHttpRequest.responseBody is an Internet Explorer specific property which works in
                     * Internet Explorer >= 7. It returns the response body as an array of unsigned bytes.
                     *
                     * More Info: http://msdn.microsoft.com/en-us/library/ie/ms534368(v=vs.85).aspx
                     */
                    return new Uint32Array(this.responseBody.toArray());
                } else {
                    /**
                     * XMLHttpRequest.responseBody is an Internet Explorer specific property which works in
                     * Internet Explorer >= 7. It returns the response body as an array of unsigned bytes.
                     *
                     * More Info: http://msdn.microsoft.com/en-us/library/ie/ms534368(v=vs.85).aspx
                     */
                    return this.responseText || this.responseBody;
                }
            }
        });
    }

}(XMLHttpRequest.prototype));